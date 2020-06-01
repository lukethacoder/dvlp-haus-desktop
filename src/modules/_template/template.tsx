import React, { FC } from 'react'
import { ModuleWrapper } from '~/src/components/module-wrapper'

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
            <select name='numberInSpanish' className='w-full'>
              <option value='' hidden selected>
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
              <ul>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div>
                      <input name='radioButtonExample' id='uno' type='radio' value='Uno' />
                      <div className='input_radio__background'>
                        <div className='input_radio__background_outer'></div>
                        <div className='input_radio__background_inner'></div>
                      </div>
                    </div>
                    <label for='uno'>Uno</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div>
                      <input name='radioButtonExample' id='dos' type='radio' value='Dos' />
                      <div className='input_radio__background'>
                        <div className='input_radio__background_outer'></div>
                        <div className='input_radio__background_inner'></div>
                      </div>
                    </div>
                    <label for='dos'>Dos</label>
                  </div>
                </li>
                <li>
                  <div className='input__radio_checkbox_wrapper flex'>
                    <div>
                      <input name='radioButtonExample' id='tres' type='radio' value='Tres' />
                      <div className='input_radio__background'>
                        <div className='input_radio__background_outer'></div>
                        <div className='input_radio__background_inner'></div>
                      </div>
                    </div>
                    <label for='tres'>Tres</label>
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
        </section>
      </form>

      <button className='btn-primary px-2 py-1 mr-2'>btn-primary</button>
      <button className='btn-secondary px-2 py-1 mr-2'>btn-secondary</button>
    </div>
  </ModuleWrapper>
)

export { Template }
