import React, { FC, useContext } from 'react'
import NotyfContext from '~/src/context/notify'

import { IEmojiResults, IEmojiSingle } from './types'

const EmojiSearchResultItem: FC<IEmojiSingle> = (props) => {
  const { item, copyEmoji } = props
  console.log('item => ', item)
  if (item?.annotation.includes('person:') || item?.shortcodes?.[0].includes('mx_')) {
    return null
  }
  return (
    <div
      className='emoji__single relative w-full flex flex-col items-center justify-center'
      data-emoji={item?.unicode}
      data-unicode={item?.hexcode}
      data-annotation={item?.annotation}
      data-shortcode={item?.shortcodes?.[0]}
      onClick={copyEmoji}
    >
      <div className='top-0 absolute w-full h-full flex flex-col items-center justify-center z-20'>
        <h4>{item?.unicode}</h4>
        <div className='emoji__text absolute bottom-0 w-full text-center flex flex-col items-center'>
          <p className='text-xs whitespace-no-wrap min-w-full w-auto bg-brand px-4 py-1 '>
            :{item?.shortcodes?.[0]}:
          </p>
        </div>
      </div>
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
    <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-1'>
      {results &&
        results.map((single: IEmojiSingle) => (
          <EmojiSearchResultItem {...single} key={single.item.hexcode} copyEmoji={copyThisEmoji} />
        ))}
    </div>
  )
}
export { EmojiSearchResults }
