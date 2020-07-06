import React, { FC, useEffect } from 'react'
import Clipboard from 'react-clipboard.js'

import { IEmojiResults, IEmojiSingle } from './types'
import StarSVG from '~/src/assets/icons/fa/star.svg'
import { useStore } from '~/src/hooks/use-store/use-store'

export const EmojiSingleFavourite: FC<IEmojiSingle> = (props) => {
  const { item, copyEmoji, toggleFav } = props
  if (item?.annotation.includes('person:') || item?.shortcodes?.[0].includes('mx_')) {
    return null
  }

  return (
    <div
      className='emoji__single_fav w-full flex flex-col items-center justify-center px-2'
      data-emoji={item?.unicode}
      data-unicode={item?.hexcode}
      data-annotation={item?.annotation}
      data-shortcode={item?.shortcodes?.[0]}
    >
      <Clipboard
        className='top-0 absolute w-full h-full flex flex-col items-center justify-center z-20'
        data-clipboard-text={item?.unicode}
        onSuccess={() => copyEmoji(item?.unicode)}
      >
        <div className='w-full h-full relative flex items-center justify-center z-20'>
          <h4>{item?.unicode}</h4>
        </div>
      </Clipboard>
    </div>
  )
}

const EmojiSearchResultItem: FC<IEmojiSingle> = (props) => {
  const { item, copyEmoji, toggleFav } = props
  if (item?.annotation.includes('person:') || item?.shortcodes?.[0].includes('mx_')) {
    return null
  }

  return (
    <div className='emoji__single relative w-full flex flex-col items-center justify-center px-2'>
      <div className='w-full h-full flex flex-row items-center justify-between z-20'>
        <Clipboard
          className='w-full'
          data-clipboard-text={item?.unicode}
          onSuccess={() => copyEmoji(item?.unicode)}
        >
          <div
            className='w-full h-full flex flex-row items-center'
            data-emoji={item?.unicode}
            data-unicode={item?.hexcode}
            data-annotation={item?.annotation}
            data-shortcode={item?.shortcodes?.[0]}
          >
            <h4>{item?.unicode}</h4>
            <div className='emoji__text text-center flex flex-col items-center'>
              <p className='text-xs text-secondary-text-color whitespace-no-wrap w-auto px-2 py-1'>
                :{item?.shortcodes?.[0]}:
              </p>
            </div>
          </div>
        </Clipboard>
        <div>
          <div
            className={`icon w-6 h-6 bg-primary-icon hover:bg-brand cursor-pointer z-50`}
            data-emoji={item?.unicode}
            data-unicode={item?.hexcode}
            data-annotation={item?.annotation}
            data-shortcode={item?.shortcodes?.[0]}
            onClick={() => toggleFav(item?.hexcode)}
            style={{
              maskImage: `url(${StarSVG})`,
              WebkitMaskImage: `url(${StarSVG})`,
              paddingBottom: '100%',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export const EmojiSearchResults: FC<IEmojiResults> = (props) => {
  const { results, copyEmoji, toggleFav } = props

  return (
    <div className='flex flex-col'>
      {results &&
        results.map((single: IEmojiSingle) => (
          <EmojiSearchResultItem
            {...single}
            key={single.item.hexcode}
            copyEmoji={copyEmoji}
            toggleFav={toggleFav}
          />
        ))}
    </div>
  )
}
