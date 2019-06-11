import React, { useState } from 'react'

const Rules =  () => {
  const [isActive, setActive] = useState({
    first: false,
    second: false,
    third: false,
    four: false
  });
  let labelDigData = '';
  if(isActive.first){
    labelDigData = "Las reglas del juego - Sobre el Director Técnico";
  }else if(isActive.second){
    labelDigData = "Las reglas del juego - Sobre el Convocado";
  }else if(isActive.third){
    labelDigData = "Las reglas del juego - Sobre los Goles";
  }else if(isActive.four){
    labelDigData = "Las reglas del juego - Terminos y condiciones";
  }

  if(labelDigData != ''){
    digitalData.push ({
      "action":{
      "group":" interaction",
      "category":"Home",
      "event":"click",
      "label":labelDigData
      },
      "event":"trackAction"
    });
  }
  

  return (
    <div id='rules'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m8 offset-m2 title center'>
            <h3 className='title__colors'>
              <span className="title-colors--regular">Las reglas</span> del juego
            </h3>
            <h2 className='title__principal'>¡Joga bonito!</h2>
          </div>
          <div className='col s12 m10 offset-m1'>
            <ul className='collapsible' data-collapsible='accordion'>
              <li>
                <div
                  className='collapsible-header'
                  onClick={() =>
                    setActive({
                      first: true,
                      second: false,
                      third: false,
                      four: false
                    })
                  }
                >
                  Sobre el Director Técnico
                  <span className='badge'>
                    <i className='material-icons'>keyboard_arrow_down</i>
                  </span>
                </div>
                <ul
                  className='collapsible-body'
                  style={{ display: isActive.first ? 'block' : 'none' }}
                >
                  <li>
                    <span>
                      El DT puede convocar a quien quiera, sólo debe asegurarse
                      que sus datos de contacto sean los correctos.
                    </span>
                  </li>
                  <li>
                    <span>
                      No puede convocar a la misma persona más de una vez.
                    </span>
                  </li>
                  <li>
                    <span>
                      Los productos que compre o haya comprado el DT no suman a
                      los goles del equipo.
                    </span>
                  </li>
                  <li>
                    <span>
                      El DT puede ser convocado en algún otro equipo, como
                      jugador.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className='collapsible-header'
                  onClick={() =>
                    setActive({
                      first: false,
                      second: true,
                      third: false,
                      four: false
                    })
                  }
                >
                  Sobre el Convocado
                  <span className='badge'>
                    <i className='material-icons'>keyboard_arrow_down</i>
                  </span>
                </div>
                <ul
                  className='collapsible-body'
                  style={{ display: isActive.second ? 'block' : 'none' }}
                >
                  <li>
                    <span>
                      Puede comprar los productos que desee, no hay límite.
                    </span>
                  </li>
                  <li>
                    <span>
                      El convocado no puede pertenecer a más de un equipo al
                      mismo tiempo.
                    </span>
                  </li>
                  <li>
                    <span>
                      Tu convocado puede adquirir cualquier producto Rimac de la
                      lista y a través del mismo canal, no importa si
                      seleccionaste algún otro producto de interés.
                    </span>
                  </li>
                  <li>
                    <span>
                      Un gol es válido al momento que tu convocado hace el pago
                      de su primera cuota o pago total.
                    </span>
                  </li>
                  <li>
                    <span>
                      Conforme acumules goles puedes acceder a premios
                      inmediatos, de acuerdo a la lista de premios.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className='collapsible-header'
                  onClick={() =>
                    setActive({
                      first: false,
                      second: false,
                      third: true,
                      four: false
                    })
                  }
                >
                  Sobre los Goles
                  <span className='badge'>
                    <i className='material-icons'>keyboard_arrow_down</i>
                  </span>
                </div>
                <ul
                  className='collapsible-body'
                  style={{ display: isActive.third ? 'block' : 'none' }}
                >
                  <li>
                    <span>
                      Cada producto tienen un peso de goles, según está
                      indicado:
                    </span>
                    <li>5 goles: Vehicular y Salud Particular</li>
                    <li>
                      3 goles: Viajes, Oncológico, Accidentes Niños y Jóvenes*,
                      Domiciliario/Hogar*,Socio Seguro
                    </li>
                    <li>1 gol: SOAT, Sepelio, Vida con devolución</li>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className='collapsible-header'
                  onClick={() =>
                    setActive({
                      first: false,
                      second: false,
                      third: false,
                      four: true
                    })
                  }
                >
                  Terminos y condiciones
                  <span className='badge'>
                    <i className='material-icons'>keyboard_arrow_down</i>
                  </span>
                </div>
                <ul
                  className='collapsible-body'
                  style={{ display: isActive.four ? 'block' : 'none' }}
                >
                  <li>
                    <span>
                      Descarga los términos y condiciones de la campaña{' '}
                      <a
                        href='https://www.rimac.com.pe/goleadores/terminos-y-condiciones-del-la-campania-copa-america.pdf'
                        target='_blank'
                      >
                        aquí
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules
