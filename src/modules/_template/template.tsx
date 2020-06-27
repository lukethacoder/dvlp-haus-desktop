import React, { FC } from 'react'

import { ModuleWrapper } from '~/src/components/module-wrapper'
import TerminalSVG from '~/src/assets/img/terminal-solid.svg'
import BugSVG from '~/src/assets/img/bug-solid.svg'
import CodeBranchSVG from '~/src/assets/img/code-branch-solid.svg'
import KeyboardSVG from '~/src/assets/img/keyboard-regular.svg'
import ProjectDiagramSVG from '~/src/assets/img/project-diagram-solid.svg'

const icons = [TerminalSVG, BugSVG, CodeBranchSVG, KeyboardSVG, ProjectDiagramSVG]
const colors = ['brand', 'color', 'font', 'accent', 'font-accent']

const Template: FC = () => (
  <ModuleWrapper className='p-4'>
    <div>
      <h1 className='text-color'>heading h1</h1>
      <h2 className='text-color'>heading h2</h2>
      <h3 className='text-color'>heading h3</h3>
      <h4 className='text-color'>heading h4</h4>
      <h5 className='text-color'>heading h5</h5>
      <h6 className='text-color'>heading h6</h6>

      <form className='w-full'>
        <section className='flex -mx-2'>
          <div className='w-1/2 p-2'>
            <input value='' placeholder='test input' className='w-full' />
          </div>
          <div className='w-1/2 p-2'>
            <select name='numberInSpanish' className='w-full' defaultValue=''>
              <option value='' hidden>
                Select...
              </option>
              <option value='Uno'>Uno</option>
              <option value='Dos'>Dos</option>
              <option value='Tres'>Tres</option>
            </select>
          </div>
        </section>

        <section className='flex -mx-2'>
          <div className='w-1/2 p-2'>
            <fieldset>
              <legend>Radio Button Test</legend>
              <ul className='flex flex-col'>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__radio_input'>
                      <input name='radioButtonExample' id='uno' type='radio' value='Uno' />
                      <div className='input_radio__background'>
                        <div className='input_radio__background_outer'></div>
                        <div className='input_radio__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='uno'>Uno</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__radio_input'>
                      <input name='radioButtonExample' id='dos' type='radio' value='Dos' />
                      <div className='input_radio__background'>
                        <div className='input_radio__background_outer'></div>
                        <div className='input_radio__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='dos'>Dos</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__radio_input'>
                      <input name='radioButtonExample' id='tres' type='radio' value='Tres' />
                      <div className='input_radio__background'>
                        <div className='input_radio__background_outer'></div>
                        <div className='input_radio__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='tres'>Tres</label>
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
        </section>

        <section className='flex -mx-2'>
          <div className='w-1/2 p-2'>
            <fieldset>
              <legend>Checkbox Button Test</legend>
              <ul className='flex flex-col'>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__checkbox_input'>
                      <input
                        name='checkboxButtonExample'
                        id='uno'
                        type='checkbox'
                        value='Uno'
                        className='checkbox_input'
                      />
                      <div className='input_checkbox__background'>
                        <div className='input_checkbox__background_outer'></div>
                        <div className='input_checkbox__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='uno'>Uno</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__checkbox_input'>
                      <input
                        name='checkboxButtonExample'
                        id='dos'
                        type='checkbox'
                        value='Dos'
                        className='checkbox_input'
                      />
                      <div className='input_checkbox__background'>
                        <div className='input_checkbox__background_outer'></div>
                        <div className='input_checkbox__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='dos'>Dos</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__checkbox_input'>
                      <input
                        name='checkboxButtonExample'
                        id='tres'
                        type='checkbox'
                        value='Tres'
                        className='checkbox_input'
                      />
                      <div className='input_checkbox__background'>
                        <div className='input_checkbox__background_outer'></div>
                        <div className='input_checkbox__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='tres'>Tres</label>
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
        </section>

        <section className='flex -mx-2'>
          <div className='w-1/2 p-2'>
            <fieldset>
              <legend>Switch Button Test</legend>
              <ul className='flex flex-col'>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__switch_input'>
                      <input
                        name='switchButtonExample'
                        id='unoSwitch'
                        type='checkbox'
                        value='Uno'
                        className='switch_input'
                      />
                      <div className='input_switch__background'>
                        <div className='input_switch__background_outer'></div>
                        <div className='input_switch__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='unoSwitch'>Uno</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__switch_input'>
                      <input
                        name='switchButtonExample'
                        id='dosSwitch'
                        type='checkbox'
                        value='Dos'
                        className='switch_input'
                      />
                      <div className='input_switch__background'>
                        <div className='input_switch__background_outer'></div>
                        <div className='input_switch__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='dosSwitch'>Dos</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div className='input__switch_input'>
                      <input
                        name='switchButtonExample'
                        id='tresSwitch'
                        type='checkbox'
                        value='Tres'
                        className='switch_input'
                      />
                      <div className='input_switch__background'>
                        <div className='input_switch__background_outer'></div>
                        <div className='input_switch__background_inner'></div>
                      </div>
                    </div>
                    <label htmlFor='tresSwitch'>Tres</label>
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
        </section>

        <section className='flex -mx-2'>
          <div className='w-full p-2'>
            <h6 className='text-color'>SVG Icons feat. mask-image</h6>
            <ul className='grid grid-cols-4 grid-flow-row gap-2'>
              {icons.map((icon) => {
                return colors.map((color) => {
                  console.log('color ', color)
                  console.log('icon ', icon)
                  return (
                    <li
                      className={`flex w-full h-full p-4 border-2 border-${color} border-solid hover:border-todo`}
                    >
                      <div
                        className={`icon w-full h-full pb-full bg-${color} hover:bg-todo cursor-pointer`}
                        style={{
                          maskImage: `url(${icon})`,
                          WebkitMaskImage: `url(${icon})`,
                          paddingBottom: '100%',
                        }}
                      ></div>
                    </li>
                  )
                })
              })}
            </ul>
          </div>
        </section>
      </form>

      <button className='btn-primary px-2 py-1 mr-2'>btn-primary</button>
      <button className='btn-secondary px-2 py-1 mr-2'>btn-secondary</button>
    </div>
  </ModuleWrapper>
)

export { Template }
