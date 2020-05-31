import { FC } from 'react'

declare type ModuleStatus = 'active' | 'draft' | 'hidden'

declare interface IModuleConfig {
  component: FC
  name: string
  slug: string
  desc: string
  status: ModuleStatus
  rust: boolean
  icon?: {
    svg?: string
    component?: FC
  }
}

declare interface IReactRouterLink {
  slug: string
  name: string
  exact?: boolean
  icon?: {
    svg?: string
    component?: FC
  }
}
