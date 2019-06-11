import React from 'react'
import ENV from '../../../env'

const ComoFunciona = () => {
  return (
    <div>
      <section id='comoFunciona'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m10 offset-m1 title center'>
              <h3 className='title__colors'>
                ¿Cómo <span>funciona?</span>
              </h3>
              <h2 className='title__principal'>
                Convoca a tu equipo, haz goles y gana
              </h2>
            </div>
          </div>
          <div className='row item'>
            <div className='col m3 item__text center itemBox'>
              <div className='col s5 m12 img'>
                <img
                  src={`${
                    ENV[process.env.NODE_ENV].ASSETS_FOLDER
                  }images/Icono1.png`}
                  alt='Paso 1 para referenciar'
                />
              </div>
              <div className='col s7 m12'>
                <p>Regístrate y convoca a tus amigos a tu equipo.</p>
              </div>
            </div>
            <div className='col m3 item__text center itemBox'>
              <div className='col s5 m12 img'>
                <img
                  src={`${
                    ENV[process.env.NODE_ENV].ASSETS_FOLDER
                  }images/Icono2.png`}
                  alt='Paso 2 para referenciar'
                />
              </div>
              <div className='col s7 m12'>
                <p>
                  Indica qué producto RIMAC le puede interesar.
                </p>
              </div>
            </div>
            <div className='col m3 item__text center itemBox'>
              <div className='col s5 m12 img'>
                <img
                  src={`${
                    ENV[process.env.NODE_ENV].ASSETS_FOLDER
                  }images/Icono3.png`}
                  alt='Paso 3 para referenciar'
                />
              </div>
              <div className='col s7 m12'>
                <p>
                  Cada Convocado que compre un seguro, suma goles para tu
                  equipo.
                </p>
              </div>
            </div>
            <div className='col m3 item__text center itemBox'>
              <div className='col s5 m12 img'>
                <img
                  src={`${
                    ENV[process.env.NODE_ENV].ASSETS_FOLDER
                  }images/Icono4.png`}
                  alt='Paso 4 para referenciar'
                />
              </div>
              <div className='col s7 m12'>
                <p>
                  Si eres el DT con más goles hasta el{' '}
                  <strong>24/05/2019</strong> <span>¡ganas sin sorteos!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComoFunciona
