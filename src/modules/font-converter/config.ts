import { IModuleConfig } from '~/src/types/global'
import { FontConverter } from './font-converter'
import { Icon } from './icon'

export const config: IModuleConfig = {
  component: FontConverter,
  name: 'Font Converter',
  slug: 'font-converter',
  desc: 'easily convert font values',
  status: 'active',
  rust: false,
  icon: {
    component: Icon,
  },
}
