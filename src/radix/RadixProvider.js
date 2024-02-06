import React from 'react'
import { RadixContext } from './radix-context'

export const RadixProvider = ({
  value,
  children,
}) => <RadixContext.Provider value={value}>{children}</RadixContext.Provider>
