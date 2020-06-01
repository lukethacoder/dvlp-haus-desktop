import React, { FC } from 'react'
import { IModuleWrapperProps } from '~/src/types/global'

/**
 *
 * @param children
 * @param className? - optional param. defaults to 'p-4'
 */
export const ModuleWrapper: FC<IModuleWrapperProps> = ({ children, className }) => (
  <div className={className ? className : 'p-4'}>{children}</div>
)
