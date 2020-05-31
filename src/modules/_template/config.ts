import { IModuleConfig } from '~/src/types/global'
import { Template } from './template'
import { Icon } from './icon'

export const config: IModuleConfig = {
  component: Template,
  name: 'Template',
  slug: 'template',
  desc: 'template test',
  status: 'draft',
  rust: false,
  icon: {
    component: Icon,
  },
}
