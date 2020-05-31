import { IModuleConfig } from '~/src/types/global'
import { RustExample } from './rust-example'
import { Icon } from './icon'

export const config: IModuleConfig = {
  component: RustExample,
  name: 'Rust Example',
  slug: 'rust-example',
  desc: 'Example of Rust Module Usage',
  status: 'draft',
  rust: true,
  icon: {
    component: Icon,
  },
}
