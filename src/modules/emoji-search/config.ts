import { IModuleConfig } from '~/src/types/global'
import { EmojiSearch } from './emoji-search'
import { Icon } from './icon'

export const config: IModuleConfig = {
  component: EmojiSearch,
  name: 'Emoji Search',
  slug: 'emoji-search',
  desc: 'Search and favourite your most used emojis',
  status: 'draft',
  rust: false,
  icon: {
    component: Icon,
  },
}
