import React, { FC, useContext } from 'react'
import NotyfContext from '~/src/context/notify'

import { IEmojiResults, IEmojiSingle } from './types'

const EmojiSearchResultItem: FC<IEmojiSingle> = (props) => {
  const { item, copyEmoji } = props
  // console.log('item => ', item)
  return (
    <div
      className='emoji__single relative w-8 h-8 overflow-hidden flex items-center justify-center'
      data-emoji={item?.emoji}
      data-unicode={item?.hexcode}
      data-annotation={item?.annotation}
      onClick={copyEmoji}
    >
      {item?.emoji}
    </div>
  )
}

const EmojiSearchResults: FC<IEmojiResults> = (props) => {
  const notyf = useContext(NotyfContext)
  const { results } = props

  function copyThisEmoji(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log('click emoji ', e.currentTarget)
    console.log('e.currentTarget.dataset ', e.currentTarget.dataset)

    notyf.success(`Copied ${e.currentTarget.dataset.emoji}`)
    // actually copy the emoji here
  }

  return (
    <div className='flex flex-wrap'>
      {results &&
        results.map((single: IEmojiSingle) => (
          <EmojiSearchResultItem {...single} key={single.item.hexcode} copyEmoji={copyThisEmoji} />
        ))}
    </div>
  )
}
export { EmojiSearchResults }
