import React, { FC, useState } from 'react'
import Clipboard from 'react-clipboard.js'

import { ModuleWrapper } from '~/src/components/module-wrapper'
import { encodeSVG, checkIfValidSVG, invertQuoteType } from './utils'

const SvgFunctions: FC = () => {
  const [svgInput, setSvgInput] = useState('')
  const [pureDataOutput, setPureDataOutput] = useState('')
  const [cssBackgroundOutput, setCssBackgroundOutput] = useState('')
  const [svgPreview, setSvgPreview] = useState('')

  function handleInputChange(event: any) {
    event.persist()
    if ((event.target.name = 'svgCode')) {
      if (checkIfValidSVG(event.target.value)) {
        setPureDataOutput(
          `"data:image/svg+xml,${invertQuoteType(encodeSVG(event.target.value), 'single')}"`
        )
        setCssBackgroundOutput(
          `background-image: url("data:image/svg+xml,${invertQuoteType(
            encodeSVG(event.target.value),
            'single'
          )}");`
        )
        setSvgPreview(event.target.value)
      } else {
        setSvgPreview('')
        setPureDataOutput('')
        setCssBackgroundOutput('')
      }
      setSvgInput(event.target.value)
    } else {
      setSvgInput('')
      setSvgPreview('')
      setPureDataOutput('')
      setCssBackgroundOutput('')
    }
  }

  return (
    <ModuleWrapper>
      <div>
        <h3>Svg to base64</h3>

        <div className='w-full flex flex-wrap'>
          <div className='w-full md:w-3/5 order-2 md:order-1 md:pr-2'>
            <div className='w-full flex flex-wrap pb-2'>
              <div className='w-full flex flex-col relative'>
                <Clipboard className='absolute bottom-0 right-0' data-clipboard-text={svgInput}>
                  Copy
                </Clipboard>
                <label className='w-full'>SVG Code</label>
                <textarea
                  value={svgInput}
                  name='svgCode'
                  placeholder='paste your <svg>here</svg>'
                  spellCheck={false}
                  onChange={handleInputChange}
                  className='w-full'
                ></textarea>
              </div>
            </div>
            <div className='w-full flex flex-wrap pb-2'>
              <div className='w-full flex flex-col relative'>
                <Clipboard
                  className='absolute bottom-0 right-0'
                  data-clipboard-text={pureDataOutput}
                >
                  Copy
                </Clipboard>
                <label className='w-full'>Pure Data Output</label>
                <textarea
                  value={pureDataOutput}
                  name='pureDataOutput'
                  spellCheck={false}
                  readOnly={true}
                  onChange={handleInputChange}
                  className='w-full'
                ></textarea>
              </div>
            </div>
            <div className='w-full flex flex-wrap pb-2'>
              <div className='w-full flex flex-col relative'>
                <Clipboard
                  className='absolute bottom-0 right-0'
                  data-clipboard-text={cssBackgroundOutput}
                >
                  Copy
                </Clipboard>
                <label className='w-full'>CSS Background Image</label>
                <textarea
                  value={cssBackgroundOutput}
                  name='cssBackgroundImage'
                  spellCheck={false}
                  readOnly={true}
                  onChange={handleInputChange}
                  className='w-full'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='w-full md:w-2/5 order-1 md:order-2 md:pl-2 py-2 md:pt-0'>
            <div className='border-color border-solid border p-4'>
              <div className=''>
                {svgPreview ? (
                  svgPreview.includes('<svg') && svgPreview.includes('</svg>') ? (
                    <div
                      className=''
                      dangerouslySetInnerHTML={{
                        __html: `${svgPreview}`,
                      }}
                    ></div>
                  ) : null
                ) : null}
                <div className='text-font opacity-20'>svg preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModuleWrapper>
  )
}

export { SvgFunctions }
