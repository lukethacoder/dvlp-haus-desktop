import { IModuleConfig } from '~/src/types/global'
import { SvgFunctions } from './svg-functions'
import { Icon } from './icon'

export const config: IModuleConfig = {
  component: SvgFunctions,
  name: 'SVG Functions',
  slug: 'svg-functions',
  desc: 'fun with svg code',
  status: 'draft',
  rust: false,
  icon: {
    component: Icon,
  },
}
