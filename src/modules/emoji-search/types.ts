import { Emoji } from 'emojibase'

export interface IEmojiResults {
  results: IEmojiSingle[]
  copyEmoji: (emoji: string) => void
  toggleFav: (unicode: string) => void
}
export interface IEmojiSingle {
  item: Emoji
  refIndex?: number
  score?: number
  copyEmoji: (emoji: string) => void
  toggleFav: (unicode: string) => void
}
