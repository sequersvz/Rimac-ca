import React from 'react'
import Slider from 'react-slick'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const ComoMetesMasGoles = () => {
  return (
    <div>
      <section id='comoMetesGoles'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m10 offset-m1 title center'>
              <h3 className='title__colors '>
                ¿Cómo metes <span className="title-colors--regular">más goles?</span>
              </h3>
              <h2 className='title__principal'>
                Entérate cuales son nuestros productos que dan más goles
              </h2>
            </div>
          </div>
          <div className='show-sm'>
            <Slider {...settings}>
              <div className='boxMeteGoles'>
                <div className='boxMeteGoles__pelota boxMeteGoles__pelota--cinco' />
                <div className='boxMeteGoles__description'>
                  <p>
                    Cada uno de estos productos valen 5 goles.
                    <a href='#'>SEGURO VEHICULAR.</a>
                    <a href='#'>SEGURO DE SALUD PARTICULAR.</a>
                  </p>
                </div>
              </div>
              <div className='boxMeteGoles'>
                <div className='boxMeteGoles__pelota boxMeteGoles__pelota--tres' />
                <div className='boxMeteGoles__description'>
                  <p>
                    Cada uno de estos productos valen 3 goles
                    <a href='#'>SEGURO DE VIAJES</a>
                    <a href='#'>SEGURO ONCOLÓGICO</a>
                    <a href='#'>SEGURO ACCIDENTES, NIÑOS Y JÓVENES*</a>
                    <a href='#'>SEGURO DOMICILIARIO*</a>
                    <a href='https://www.rimac.com.pe/socioseguro/home' target='_blank' >SOCIO SEGURO</a>
                    <span>*Solo pago anual</span>
                  </p>
                </div>
              </div>
              <div className='boxMeteGoles'>
                <div className='boxMeteGoles__pelota boxMeteGoles__pelota--uno' />
                <div className='boxMeteGoles__description'>
                  <p>
                    Cada uno de estos productos valen 1 gol.
                    <a href='#'>SOAT.</a>
                    <a href='#'>VIDA CON DEVOLUCIÓN.</a>
                    <a href='#'>SEPELIO.</a>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div className='row item hide-sm'>
            <div className='col m4'>
              <div className='boxMeteGoles'>
                <div className='boxMeteGoles__pelota boxMeteGoles__pelota--cinco' />
                <div className='boxMeteGoles__description'>
                  <p>
                    Cada uno de estos productos valen 5 goles.
                    <a href='#'>SEGURO VEHICULAR</a>
                    <a href='#'>SEGURO DE SALUD PARTICULAR</a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col m4'>
              <div className='boxMeteGoles'>
                <div className='boxMeteGoles__pelota boxMeteGoles__pelota--tres' />
                <div className='boxMeteGoles__description'>
                  <p>
                    Cada uno de estos productos valen 3 goles.
                    <a href='#'>SEGURO DE VIAJES</a>
                    <a href='#'>SEGURO ONCOLÓGICO</a>
                    <a href='#'>SEGURO ACCIDENTES, NIÑOS Y JÓVENES*</a>
                    <a href='#'>SEGURO DOMICILIARIO*</a>
                    <a href='https://www.rimac.com.pe/socioseguro/home' target='_blank' >SOCIO SEGURO</a>
                    <span>*Solo pago anual</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col m4'>
              <div className='boxMeteGoles'>
                <div className='boxMeteGoles__pelota boxMeteGoles__pelota--uno' />
                <div className='boxMeteGoles__description'>
                  <p>
                    Cada uno de estos productos valen 1 gol.
                    <a href='#'>SOAT</a>
                    <a href='#'>VIDA CON DEVOLUCIÓN</a>
                    <a href='#'>SEPELIO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComoMetesMasGoles
