// All modules should be imported and exported from this file
// This file then becomes the main entry point to all of the modules

import { IModuleConfig } from '~/src/types/global'

import { config as FontConverterConfig } from './font-converter'
import { config as SvgFunctionsConfig } from './svg-functions'

export const MODULE_CONFIG: IModuleConfig[] = [FontConverterConfig, SvgFunctionsConfig]
