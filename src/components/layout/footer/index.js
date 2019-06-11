import React from 'react'
import ENV from '../../../../env'

const Footer = () => {
  return (
    <footer>
      <div className="line-hide--desktop"> 

      </div>
      <div className='menu__dropdown hide-desktop'>
        <div className='menu__dropdown--item'>
          <div className='container'>
            <a className='menu__dropdown--header'>
              SEGUROS
              <i className='icon-arrow-down' />
            </a>
            <div className='menu__dropdown--body'>
              <a href='https://www.rimac.com.pe/#seguros'>Para personas</a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.rimac.com.pe/empresas'
              >
                Para empresas
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.rimac.com.pe/corredores/'
              >
                Corredores
              </a>
            </div>
          </div>
        </div>
        <div className='menu__dropdown--item'>
          <div className='container'>
            <a className='menu__dropdown--header'>
              NOSOTROS
              <i className='icon-arrow-down' />
            </a>
            <div className='menu__dropdown--body'>
              <a href='https://www.rimac.com.pe/nosotros'>Sobre RIMAC</a>
              <a href='https://www.rimac.com.pe/contacto#atencion'>
                Atención al cliente
              </a>
              <a href='/sostenibilidad/'>Sostenibilidad</a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://rimacestarbien.com/'
              >
                Estar Bien
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.yomecuido.com.pe/'
              >
                Yo me cuido
              </a>
            </div>
          </div>
        </div>
        <div className='menu__dropdown--item'>
          <div className='container'>
            <a className='menu__dropdown--header'>
              Accesos rápidos
              <i className='icon-arrow-down' />
            </a>
            <div className='menu__dropdown--body'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.rimac.com.pe/promocard/#/'
              >
                Descuento Repsol
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.rimac.com.pe/wps/portal/rimac/inicio/seguros/login-fact-electronica/!ut/p/c5/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gfAwNnSydDRwN3Jw8LA0czx2CjIG9TYwsfQ30_j_zcVP2CbEdFADlkk4Q!/dl3/d3/L2dBISEvZ0FBIS9nQSEh/'
              >
                Factura electrónica
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.rimac.com.pe/contacto#reclamos'
              >
                Libro de reclamaciones
              </a>
            </div>
          </div>
        </div>
        <div className='menu__dropdown--item'>
          <div className='container'>
            <a className='menu__dropdown--header'>
              avisos legales
              <i className='icon-arrow-down' />
            </a>
            <div className='menu__dropdown--body'>
              <a className='btn-modal' href='#'>
                Términos y condiciones
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.rimac.com.pe/vehiculos-siniestrados'
              >
                Venta de vehículos siniestrados
              </a>
              <a
                target='_blank'
                href='/uploads/Ley29733_proteccion_de_datos_personales.pdf'
              >
                Protección de Datos Personales
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.sbs.gob.pe/usuarios'
              >
                SBS
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.smv.gob.pe/Frm_VerArticulo.aspx?data=10322E29C4FDE5CE771085A5A711CC3D6F8F16BB4AC268F3E19C34050517A540F40BE46E91AA1ABD'
              >
                SMV
              </a>
              <a href='#' className='comunicadobtn'>
                +Vida Seguro Accidentes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col contact'>
            <div className='title'>
              <h4 className='title__section'>CONTÁCTANOS</h4>
            </div>
            <div className='col contact__phone'>
              <p>Lima</p>
              <h4>01 411-1111</h4>
            </div>
            <div className='col contact__phone'>
              <p>Provincia</p>
              <h4>0800-41111</h4>
            </div>
            <div className='col social-media'>
              <p>Nuestras redes</p>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://es-la.facebook.com/segurosrimac'
              >
                <i
                  className='icon-facebook-fix'
                  style={{
                    backgroundImage: `url(${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/facebook.png)`
                  }}
                />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/company/rimac-seguros'
              >
                <i
                  className='icon-linkedin-fix'
                  style={{
                    backgroundImage: `url(${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/linkedin.png)`
                  }}
                />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.youtube.com/user/SegurosRimac'
              >
                <i
                  className='icon-youtube-fix'
                  style={{
                    backgroundImage: `url(${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/youtube.png)`
                  }}
                />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/rimacseguros'
              >
                <i
                  className='icon-twitter-fix'
                  style={{
                    backgroundImage: `url(${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/twitter.png)`
                  }}
                />
              </a>
            </div>
          </div>
          <div className='col list hide-tablet-on-down'>
            <div className='col list__insurance'>
              <div className='title'>
                <h4 className='title__section'>SEGUROS</h4>
              </div>
              <ul>
                <li>
                  <a href='https://www.rimac.com.pe/#seguros'>Para personas</a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.rimac.com.pe/empresas'
                  >
                    Para empresas
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://www.rimac.com.pe/corredores/'
                  >
                    Corredores
                  </a>
                </li>
              </ul>
            </div>
            <div className='col list__us'>
              <div className='title'>
                <h4 className='title__section'>NOSOTROS</h4>
              </div>
              <ul>
                <li>
                  <a href='https://www.rimac.com.pe/nosotros'>Sobre RIMAC</a>
                </li>
                <li>
                  <a href='https://www.rimac.com.pe/contacto#atencion'>
                    Atención al cliente
                  </a>
                </li>
                <li>
                  <a href='/sostenibilidad/'>Sostenibilidad</a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://rimacestarbien.com/'
                  >
                    Estar Bien
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://www.yomecuido.com.pe/'
                  >
                    Yo me cuido
                  </a>
                </li>
              </ul>
            </div>
            <div className='col list__access'>
              <div className='title'>
                <h4 className='title__section'>ACCESOS RÁPIDOS</h4>
              </div>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.rimac.com.pe/promocard/#/'
                  >
                    Descuento Repsol
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.rimac.com.pe/vehiculos-siniestrados'
                  >
                    Venta de vehículos siniestrados
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://www.rimac.com.pe/wps/portal/rimac/inicio/seguros/login-fact-electronica/!ut/p/c5/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gfAwNnSydDRwN3Jw8LA0czx2CjIG9TYwsfQ30_j_zcVP2CbEdFADlkk4Q!/dl3/d3/L2dBISEvZ0FBIS9nQSEh/'
                  >
                    Factura electrónica
                  </a>
                </li>
                <li>
                  <a href='https://www.rimac.com.pe/contacto#reclamos'>
                    Libro de reclamaciones
                  </a>
                </li>
              </ul>
            </div>
            <div className='col list__aviso'>
              <div className='title'>
                <h4 className='title__section'>AVISOS LEGALES</h4>
              </div>
              <ul>
                <li>
                  <a className='btn-modal' href='#'>
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='/uploads/Ley29733_proteccion_de_datos_personales.pdf'
                  >
                    Protección de Datos Personales
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://www.sbs.gob.pe/usuarios'
                  >
                    SBS
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='http://www.smv.gob.pe/Frm_VerArticulo.aspx?data=10322E29C4FDE5CE771085A5A711CC3D6F8F16BB4AC268F3E19C34050517A540F40BE46E91AA1ABD'
                  >
                    SMV
                  </a>
                </li>
                <li>
                  <a href='#' className='comunicadobtn'>
                    +Vida Seguro Accidentes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row app-rimac'>
          <div className='col app-rimac__text' style={{ marginTop: '0px' }}>
            <p>Descarga nuestra App</p>
          </div>
          <div className='col app-rimac__links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://itunes.apple.com/pe/app/rimac-app/id602975058?mt=8'
            >
              <i
                className='icon-apple-fix'
                style={{ backgroundImage: `url(${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/apple.png)` }}
              />
              PARA iOS
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://play.google.com/store/apps/details?id=com.rimac.rimac_surrogas&amp;hl=es'
            >
              <i
                className='icon-google-fix'
                style={{ backgroundImage: `url(${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/play.png)` }}
              />
              PARA ANDROID
            </a>
          </div>
        </div>
        <div className='row copy-right'>
          <div className='col copy-right__logo'>
            <img
              src={`${ENV[process.env.NODE_ENV].ASSETS_FOLDER}images/logo-rimac-red.png`}
              alt='Logo RIMAC Seguros'
            />
          </div>
          <div className='col copy-right__text'>
            <p>
              RIMAC Seguros y Reaseguros - 2018. Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
