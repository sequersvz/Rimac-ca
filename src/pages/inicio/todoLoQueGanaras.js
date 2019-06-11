import React from 'react'
import ENV from '../../../env'

const TodoLoQueGanaras = () => {
  const onClick = async (e) => {
    e.preventDefault()
    window.open('https://www.rimac.com.pe/goleadores/terminos-y-condiciones-del-la-campania-copa-america.pdf', '_blank');
    digitalData.push ({
      "action":{
          "group":"interaction",
          "category":"Home",
          "event":"click",
          "label":"Términos y Condiciones"
      },
          "event":"trackAction"
    });
  }
  return (
    <div>
      <div id='programa'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m7 center-align hide-sm'>
              <img
                className='responsive-img fixIMGganaras'
                src={`${
                  ENV[process.env.NODE_ENV].ASSETS_FOLDER
                }images/Premios.png`}
                alt='Programa de goleadores'
              />
            </div>
            <div className='col s12 m5 title'>
              <div className='title fixGanarasTitle'>
                <h3 className='title__colors'>
                  ¿Qué podré <span>ganar?</span>
                </h3>
                <h2 className='title__principal'>
                  Gana la gloria eterna, y estos premios también
                </h2>
              </div>
              <div className='listGanaras'>
                <div className='listGanaras--title'>PRIMER PUESTO:</div>
                <ul>
                  <li>- Paquete doble para ver la final.</li>
                  <li>
                    - 5D/4N en Brasil, Hotel 3 Estrellas en Rio de Janeiro.
                  </li>
                  <li>- Seguro de Viaje para ti y tu acompañante.</li>
                </ul>
              </div>
              <div className='listGanaras'>
                <div className='listGanaras--title'>PREMIOS INMEDIATOS:</div>
                <ul>
                  <li>
                    - <strong>20 goles</strong> te llevas 1 TV de 43 pulgadas.
                  </li>
                  <li>
                    - <strong>15 goles</strong> te llevas 1 camiseta de la
                    selección.
                  </li>
                  <li>
                    - <strong>9 goles</strong> te llevas 1 vale de S/100 en
                    Sodexo.
                  </li>
                  <li>
                    - <strong>6 goles</strong> te llevas entradas dobles al
                    cine.
                  </li>
                </ul>
              </div>
              <div className='programaTerminos'>
                Conoce los <a onClick={onClick} style={{textDecoration: 'underline'}} href='https://www.rimac.com.pe/goleadores/terminos-y-condiciones-legal.pdf'>Término y Condiciones</a> de la campaña.
              </div>
            </div>
            <div className='col s12 m7 left-align show-sm'>
              <img
                className='responsive-img fixIMGganaras'
                src={`${
                  ENV[process.env.NODE_ENV].ASSETS_FOLDER
                }images/Premios.png`}
                alt='Programa de goleadores'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoLoQueGanaras
