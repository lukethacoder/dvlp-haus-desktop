import { Emoji } from 'emojibase'

export interface IEmojiResults {
  results: IEmojiSingle[]
}
export interface IEmojiSingle {
  item: Emoji
  refIndex?: number
  score?: number
  copyEmoji: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
