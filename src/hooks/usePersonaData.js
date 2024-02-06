import { useEffect, useState } from 'react'
import { useDappToolkit } from './useDappToolkit'

export const usePersonaData = () => {
  const dAppToolkit = useDappToolkit()

  const [state, setState] = useState({})

  useEffect(() => {
    const subscription = dAppToolkit.walletApi.walletData$.subscribe(
      (walletData) => {
        const entires = walletData.personaData.reduce((acc, item) => ({ ...acc, [item.entry]: item.fields }), {})

        setState(entires)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [dAppToolkit, setState])

  return state
}
