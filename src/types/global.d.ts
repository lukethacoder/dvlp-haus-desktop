export type ModuleStatus = 'active' | 'draft' | 'hidden'

export declare interface IModuleConfig {
  name: string
  slug: string
  desc: string
  status: ModuleStatus
  rust: boolean
  icon?: {
    svg?: string
  }
}
