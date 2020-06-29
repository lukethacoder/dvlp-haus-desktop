// All modules should be imported and exported from this file
// This file then becomes the main entry point to all of the modules

import { IModuleConfig } from '~/src/types/global'

import { config as TemplateConfig } from './_template'
import { config as FontConverterConfig } from './font-converter'
import { config as SvgFunctionsConfig } from './svg-functions'
import { config as RustExampleConfig } from './rust-example'
import { config as EmojiSearchConfig } from './emoji-search'

export const MODULE_CONFIG: IModuleConfig[] = [
  TemplateConfig,
  EmojiSearchConfig,
  FontConverterConfig,
  SvgFunctionsConfig,
  RustExampleConfig,
]
