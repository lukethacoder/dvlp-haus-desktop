import { MODULE_CONFIG } from `~/src/modules`
import { IModuleConfig } from '~/src/types/global'

async function apiModules(search?: string) {
  console.log('apiModules() MODULE_CONFIG ', MODULE_CONFIG)

  let filtered_modules: IModuleConfig[] = []
  // handle search by module name if string provided
  if (search !== '' && search !== null && search !== undefined) {
    filtered_modules = MODULE_CONFIG.filter((single_module: IModuleConfig) =>
      single_module.name.toLowerCase().includes(search.toLowerCase())
    )
  } else {
    filtered_modules = MODULE_CONFIG
  }
  return filtered_modules
}

export { apiModules }
