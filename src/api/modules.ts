import * as fs from 'fs'

const MODULES_DIR = './src/renderer/modules'

async function apiModules(search: string) {
  const modules_ref: String[] = fs.readdirSync(MODULES_DIR)

  // create an array of dynamic imports based on the folder structure
  const module_promises = modules_ref.map((single_module) =>
    import(`../modules/${single_module}/config.ts`)
  )

  return Promise.all(module_promises).then((res_all) => {
    let filtered_modules = res_all
    // handle search by module name if string provided
    if (search !== '' && search !== null) {
      filtered_modules = res_all.filter((single_module) => {
        return single_module.default.name.toLowerCase().includes(search.toLowerCase())
      })
    }
    return filtered_modules
  })
}

export { apiModules }
