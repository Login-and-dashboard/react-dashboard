import { useEffect, useState } from 'react'
import { useDappToolkit } from './useDappToolkit'

export const usePersona = () => {
  const dAppToolkit = useDappToolkit()
  const [state, setState] = useState({ hasLoaded: false })

  useEffect(() => {
    const subscription = dAppToolkit.walletApi.walletData$.subscribe(
      (state) => {
        setState({ persona: state.persona, hasLoaded: true })
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [dAppToolkit])

  return state
}
