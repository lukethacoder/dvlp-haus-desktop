import * as fs from 'fs';
// import * as remote from 'electron'

const MODULES_DIR = './src/renderer/modules'

function API_modules() {
  console.log('API_modules')
  const modules_ref: String[] = fs.readdirSync(MODULES_DIR)

  // let modules = modules_ref.filter(module_name => module_name !== 'config-types.ts')
  let modules = modules_ref
  // console.log('testfilesystem root => ', modules)
  
  let module_config = modules.map(single_module => {
    const single_module_ref = `${MODULES_DIR}/${single_module}`;
    let module_files = fs.readdirSync(single_module_ref);
    // console.log(`testfilesystem ${single_module} => `, module_files)
    
    // const config_ref = fs.readFileSync(
    //   `${single_module_ref}/config.ts`, 'utf8', function (err, data) {
    //     if (err) throw err;
    //     obj = JSON.parse(data);
    //     return obj
    //   }
    // );

    let config;
    import(`../modules/${single_module}/config.ts`).then(module_config => {
      config = module_config.default;
      console.log('config => ', config)
    });   
    return config

  })

  console.log('module_config => ', module_config)

  return module_config
}

export { API_modules }
