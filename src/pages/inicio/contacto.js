import React from 'react'
import ENV from '../../../env'

const Contacto = () => {
  return (
    <section id='contacto'>
      <div className='container'>
        <div className='row' style={{ marginBottom: '0px' }}>
          <div className='contacto__card'>
            <div className='contacto__personaje'>
              <img
                className='hide-tablet'
                src={`${
                  ENV[process.env.NODE_ENV].ASSETS_FOLDER
                }images/HablaconExperto.png`}
                alt=''
              />
            </div>
            <div className='contacto__texto'>
              <h2 className='title__principal'>
                Habla con un <span style={{ color: '#f0353b' }}>experto</span>
              </h2>
              <p className='hide-mobile'>
                Estamos dispuestos a ayudarte por si tienes algunas dudas.
                Llámanos al:
              </p>
              <div className='phoneCall'>
                <div className='phoneCall--icon' />
                <div className='phoneCall--number'>01 411 1111</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacto
