import React, { FC, useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import emojis from 'emojibase-data/en/compact.json'

import { IEmojiResults, IEmojiSingle } from './types'
import { EmojiSearchResults } from './emoji-search-results'
import { ModuleWrapper } from '~/src/components/module-wrapper'

import './styles.scss'

const fuse = new Fuse(emojis, {
  keys: ['name', 'annotation', 'shortcodes', 'tags'],
  includeScore: true,
})

const EmojiSearch: FC = () => {
  const [searchString, setSearchString] = useState('')
  const [results, setResults] = useState<IEmojiResults>()

  useEffect(() => {
    const emoij_res = fuse.search(' ').slice(0, 150)
    setResults(emoij_res)
  }, [])

  function searchEomjis(e: React.FormEvent<HTMLInputElement>) {
    setSearchString(e?.currentTarget?.value)

    const emoij_res = fuse.search(searchString).slice(0, 150)
    setResults(emoij_res)
  }

  return (
    <ModuleWrapper className='p-4'>
      <div className='w-full'>
        <h1 className='text-primary-text-color'>searchin emojis h1</h1>
        <input
          type='text'
          className='w-full'
          placeholder='Search...'
          value={searchString}
          onChange={searchEomjis}
        />
      </div>
      <div>
        <EmojiSearchResults results={results} />
      </div>
    </ModuleWrapper>
  )
}

export { EmojiSearch }
