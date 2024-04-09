import { useCallback, useEffect, useState } from 'react'
import { useDappToolkit } from './useDappToolkit'
import { switchMap, map } from 'rxjs'
import {
  transformFungibleTokens,
  transformNonFungibleTokens,
} from '../transformers/addTokens'

const useWithTokens = (stateApi) => {
  return useCallback(
    (accounts) =>
      stateApi
        .getEntityDetailsVaultAggregated(
          accounts.map((account) => account.address)
        )
        .then((data) =>
          Promise.all(
            data.map((item) =>
              transformFungibleTokens(item?.fungible_resources)
                .then((fungibleTokens) => ({
                  ...accounts.find(
                    (account) => account.address === item.address
                  ),
                  fungibleTokens,
                }))
                .then((values) =>
                  transformNonFungibleTokens(item?.non_fungible_resources).then(
                    (nonFungibleTokens) => {

                      return ({
                        ...values,
                        nonFungibleTokens,
                      })
                    }
                  )
                ).then((data) => {
                  return data;
                })
            )
          )
        ).then(data => {
          console.log(data, "abc data");
          return data;
        }),
    [stateApi]
  )
}

export const useAccounts = () => {
  const dAppToolkit = useDappToolkit()
  const [state, setState] = useState({ accounts: [], status: 'pending', hasLoaded: false })

  const withTokens = useWithTokens(dAppToolkit.gatewayApi.state)

  useEffect(() => {
    const subscription = dAppToolkit.walletApi.walletData$
      .pipe(
        map((walletData) => walletData.accounts),
        switchMap((accounts) => {
          setState((prev) => ({ ...prev, status: 'pending' }))
          return withTokens(accounts)
            .then((accounts) => {
              setState({
                accounts,
                status: 'success',
                hasLoaded: true,
              })
            })
            .catch(() => {
              setState({ accounts: [], status: 'error', hasLoaded: true })
            })
        })
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [dAppToolkit, withTokens, setState])

  return {
    state,
    refresh: useCallback(() => {
      setState((prev) => ({ ...prev, status: 'pending' }))
      return withTokens(state.accounts)
        .then((accounts) => {
          setState({ accounts, status: 'success', hasLoaded: true })
        })
        .catch(() => {
          setState({ accounts: [], status: 'error', hasLoaded: true })
        })
    }, [state.accounts, withTokens]),
  }
}
