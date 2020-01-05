declare interface IModuleConfig {
  name: string
  slug: string
  desc: string
  status: 'active' | 'draft' | 'hidden'
}
