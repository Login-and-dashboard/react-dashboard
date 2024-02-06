import '@radixdlt/dapps-dropdown'
import React, { useEffect, useRef } from 'react'
import { useConnectButtonState } from '../../hooks/useConnectButtonState'
import ConnectArrow from '../../images/connect-arrow.svg'
import { Tooltip } from '../UI/Tooltip/Tooltip'
import styles from './ConnectButton.module.css'

export const ConnectButton = ({
  className = '',
  hasXrd,
  accounts = [],
  accountsLoading = false,
}) => {
  const connectButtonState = useConnectButtonState()
  const [state, setState] = React.useState({
    hideTooltip: false,
    isPopoverOpen: false,
    insufficientXrdAlertDismissed: false,
  })
  const ref = useRef(null)

  const showConnectHelper =
    accounts.length === 0 && connectButtonState === 'default'

  const showTooltip =
    !state.hideTooltip &&
    !state.isPopoverOpen &&
    connectButtonState === 'pending'

  useEffect(() => {
    if (state.hideTooltip && connectButtonState !== 'pending') {
      setState((prev) => ({ ...prev, hideTooltip: false, popoverOpen: false }))
    }

    const handlePopoverState = () => {
      const isPopoverOpen = !!ref.current?.showPopover
      if (state.isPopoverOpen !== isPopoverOpen)
        setState((prev) => ({ ...prev, isPopoverOpen }))
    }

    document.addEventListener('click', handlePopoverState)

    return () => {
      document.removeEventListener('click', handlePopoverState)
    }
  }, [connectButtonState, state, setState, ref])

  return (
    <>
      <div className={`${styles.header} `}>
        <div className={`${styles['header-right']}`}>
          <div className={styles['radix-connect-button']}>
            <radix-connect-button ref={ref} />
            {/* {showConnectHelper ? <ConnectHelper /> : null} */}
            {showTooltip && (
              <Tooltip
                className={styles.tooltip}
                onClose={() =>
                  setState((prev) => ({ ...prev, hideTooltip: true }))
                }
              >
                You have a request waiting! Open your Radix Wallet mobile app to
                review and approve.
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
