import React, { FC, useState, useEffect, useContext, SetStateAction } from 'react'
import Fuse from 'fuse.js'
import emojis from 'emojibase-data/en/compact.json'
import { Emoji } from 'emojibase'

import NotyfContext from '~/src/context/notify'
import { useStore } from '~/src/hooks/use-store/use-store'
import { IEmojiResults, IEmojiSingle } from './types'
import { EmojiSearchResults, EmojiSingleFavourite } from './emoji-search-results'
import { ModuleWrapper } from '~/src/components/module-wrapper'

import MinusCircleSVG from '~/src/assets/icons/fa/minus-circle.svg'

import './styles.scss'

const fuse = new Fuse(emojis, {
  keys: ['name', 'annotation', 'shortcodes', 'tags'],
  includeScore: true,
})

const EmojiSearch: FC = () => {
  const [searchString, setSearchString] = useState('')
  const [results, setResults] = useState<IEmojiResults>()
  const [favourites, setFavourites] = useState<IEmojiResults>()
  const [favouritesHexcodes, setFavouritesHexcodes] = useState<string[]>()
  const [hasFetchedStore, setHasFetchedStore] = useState(false)

  const notyf = useContext(NotyfContext)
  const [emojiStore, setEmojiStore] = useStore('emoji', {
    favs: ['1F525'],
  })

  useEffect(() => {
    const emoij_res = fuse.search(' ').slice(0, 150) as unknown
    setResults(emoij_res as SetStateAction<IEmojiResults | undefined>)
  }, [])

  useEffect(() => {
    // if the store has 'favs' set it to our local favHex codes value
    if (emojiStore?.favs) {
      setFavouritesHexcodes(emojiStore.favs)
    }
  }, [emojiStore])

  useEffect(() => {
    /**
     * only set the favourites once,
     * the emojiStore value isn't populated on initial render, so need to catch it here
     */
    if (!hasFetchedStore) {
      if (favouritesHexcodes) {
        const emoji_favs: unknown = favouritesHexcodes.map((emoji_hex) => {
          if (emoji_hex && emoji_hex !== null) {
            let res = emojis.find((emoji: Emoji) => emoji?.hexcode === emoji_hex)
            return res ? res : null
          } else {
            return null
          }
        })
        setFavourites(emoji_favs as SetStateAction<IEmojiResults | undefined>)
        setHasFetchedStore(true)
      }
    }
  }, [favouritesHexcodes])

  function searchEmojis(e: React.FormEvent<HTMLInputElement>) {
    setSearchString(e?.currentTarget?.value)

    const emoij_res = fuse.search(searchString).slice(0, 500)
    setResults(emoij_res)
  }

  function copyThisEmoji(emoji: string) {
    // tell the user the good news
    notyf.success(`Copied ${emoji}`)
  }

  function toggleThisFav(unicode: string) {
    // catch empty favs array
    const _favourites = favourites || []

    if (_favourites.find((emoji: Emoji) => emoji.hexcode === unicode)) {
      // already in fav, remove it
      const remove_this_emoji = _favourites.filter((item) => item.hexcode !== unicode)

      if (remove_this_emoji !== undefined) {
        setFavourites(remove_this_emoji)
      }
    } else {
      // not found, add the fav
      const find_this_emoji = results.find(({ item }) => item.hexcode === unicode)
      if (find_this_emoji !== undefined) {
        setFavourites([..._favourites, find_this_emoji.item])
      }
    }
    setEmojiStore('emoji', { favs: favourites.map((emoji: Emoji) => emoji.hexcode) })
  }

  return (
    <ModuleWrapper className='p-4'>
      <div className='w-full pb-4'>
        {/* <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-1'> */}
        <div className='flex flex-wrap pb-4'>
          {favourites &&
            favourites.map((fav_emoji: Emoji) => (
              <div
                className='emoji__single__fav_wrapper w-12 h-12 relative flex justify-center'
                key={fav_emoji.hexcode}
              >
                <div
                  className={`emoji__single__fav_remove icon w-4 h-4 bg-primary-icon hover:bg-brand cursor-pointer z-50 absolute -mb-2 bottom-0`}
                  style={{
                    maskImage: `url(${MinusCircleSVG})`,
                    WebkitMaskImage: `url(${MinusCircleSVG})`,
                  }}
                  onClick={() => toggleThisFav(fav_emoji.hexcode)}
                ></div>
                <EmojiSingleFavourite
                  item={fav_emoji}
                  copyEmoji={copyThisEmoji}
                  toggleFav={toggleThisFav}
                />
              </div>
            ))}
        </div>
        <input
          type='text'
          className='w-full'
          placeholder='Search...'
          value={searchString}
          onChange={searchEmojis}
        />
      </div>
      <div>
        <EmojiSearchResults results={results} copyEmoji={copyThisEmoji} toggleFav={toggleThisFav} />
      </div>
    </ModuleWrapper>
  )
}

export { EmojiSearch }
