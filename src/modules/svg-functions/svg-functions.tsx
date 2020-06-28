import React, { FC, useState, useContext } from 'react'
import Clipboard from 'react-clipboard.js'
import NotyfContext from '~/src/context/notify'

import { ModuleWrapper } from '~/src/components/module-wrapper'
import { encodeSVG, checkIfValidSVG, invertQuoteType } from './utils'

import CopySVG from '~/src/assets/icons/fa/copy.svg'

const SvgFunctions: FC = () => {
  const notyf = useContext(NotyfContext)

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
          `url("data:image/svg+xml,${invertQuoteType(encodeSVG(event.target.value), 'single')}")`
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
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-3/5 order-2 md:order-1 md:pr-2'>
          <div className='w-full flex flex-wrap pb-2'>
            <div className='w-full flex flex-col relative'>
              <div className='textarea_actions'>
                <Clipboard
                  className=''
                  data-clipboard-text={svgInput}
                  onSuccess={() => notyf.success('Copied output')}
                >
                  <div
                    className={`icon w-4 h-4 bg-font hover:bg-brand cursor-pointer`}
                    style={{
                      maskImage: `url(${CopySVG})`,
                      WebkitMaskImage: `url(${CopySVG})`,
                      paddingBottom: '100%',
                    }}
                  ></div>
                </Clipboard>
              </div>
              <label className='w-full pb-1'>SVG Source Code</label>
              <textarea
                value={svgInput}
                name='svgCode'
                placeholder='paste your <svg>here</svg>'
                spellCheck={false}
                onChange={handleInputChange}
                rows={12}
                className='w-full'
              ></textarea>
            </div>
          </div>
          <div className='w-full flex flex-wrap pb-2'>
            <div className='w-full flex flex-col relative'>
              <div className='textarea_actions'>
                <Clipboard
                  className=''
                  data-clipboard-text={pureDataOutput}
                  onSuccess={() => notyf.success('Copied output')}
                >
                  <div
                    className={`icon w-4 h-4 bg-font hover:bg-brand cursor-pointer`}
                    style={{
                      maskImage: `url(${CopySVG})`,
                      WebkitMaskImage: `url(${CopySVG})`,
                      paddingBottom: '100%',
                    }}
                  ></div>
                </Clipboard>
              </div>
              <label className='w-full pb-1'>base64 Output</label>
              <textarea
                value={pureDataOutput}
                name='pureDataOutput'
                spellCheck={false}
                readOnly={true}
                onChange={handleInputChange}
                rows={6}
                className='w-full'
              ></textarea>
            </div>
          </div>
          <div className='w-full flex flex-wrap pb-2'>
            <div className='w-full flex flex-col relative'>
              <div className='textarea_actions'>
                <Clipboard
                  className=''
                  data-clipboard-text={cssBackgroundOutput}
                  onSuccess={() => notyf.success('Copied output')}
                >
                  <div
                    className={`icon w-4 h-4 bg-font hover:bg-brand cursor-pointer`}
                    style={{
                      maskImage: `url(${CopySVG})`,
                      WebkitMaskImage: `url(${CopySVG})`,
                      paddingBottom: '100%',
                    }}
                  ></div>
                </Clipboard>
              </div>
              <label className='w-full pb-1'>CSS url()</label>
              <textarea
                value={cssBackgroundOutput}
                name='cssBackgroundImage'
                spellCheck={false}
                readOnly={true}
                onChange={handleInputChange}
                rows={6}
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
                ) : (
                  <div className='text-font opacity-20 flex items-center justify-center'>
                    <p>invalid svg</p>
                  </div>
                )
              ) : (
                <div className='text-font opacity-20 flex items-center justify-center'>
                  <p>svg preview</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModuleWrapper>
  )
}

export { SvgFunctions }
