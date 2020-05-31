import { IModuleConfig } from '~/src/types/global'

export const config: IModuleConfig = {
  name: 'Font Converter',
  slug: 'font-converter',
  desc: 'easily convert font values',
  status: 'active',
  rust: false,
  icon: {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="text-size" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-text-size fa-w-20 fa-3x"><path fill="currentColor" d="M624 32H272a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h88v304h-40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h88v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM304 224H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h56v128H96a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-24V288h56v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z" class=""></path></svg>`,
  },
}
