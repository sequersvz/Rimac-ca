import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Modal from 'react-modal'
import ENV from '../../../env'

let form = {}
const url_registrar = ENV[process.env.NODE_ENV].REGISTRAR_DT
const url_dt = ENV[process.env.NODE_ENV].OBTENER_DT
const url_persona = ENV[process.env.NODE_ENV].OBTENER_PERSONA
let initBanner = true;

const saveDT = async (history, setLoading, setOpenModal) => {
  setLoading(true)
  const {
    tipodocumento,
    nrodocumento,
    nombre,
    apellidopaterno,
    apellidomaterno,
    numerocontacto,
    nombreequipo,
    email,
  } = form
  const body = JSON.stringify({
    tipodocumento: tipodocumento.value,
    nrodocumento: nrodocumento.value,
    nombre: nombre.value,
    apellidopaterno: apellidopaterno.value,
    apellidomaterno: apellidomaterno.value,
    numerocontacto: numerocontacto.value,
    nombreequipo: nombreequipo.value,
    email: email.value,
    goles: 0,
  })
  const headers = {
    Authorization: sessionStorage.getItem('token'),
    'Content-Type': 'application/json',
  }
  try {
    const response = await fetch(url_registrar, {
      crossDomain: true,
      method: 'POST',
      body,
      headers,
    })
    const data = await response.json()
    if (data.error === true) {
      setLoading(false)
      setOpenModal(true)
      digitalData.push({
        form: {
          channel: 'Copa America',
          name: 'Formulario Registrar DT',
        },
        event: 'trackFormError',
      })
      return
    }
    digitalData.push({
      form: {
        channel: 'Copa America',
        name: 'Formulario Registrar DT',
      },
      event: 'trackFormSubmit',
    })
    digitalData.push({
      metadata: {
        key: 'CoachID',
        value: data.data.iddt,
      },
      event: 'trackMetadata',
    })
    sessionStorage.setItem('tipodocumento', tipodocumento.value)
    sessionStorage.setItem('nrodocumento', nrodocumento.value)
    sessionStorage.setItem('apellidomaterno', data.data.apellidomaterno)
    sessionStorage.setItem('apellidopaterno', data.data.apellidopaterno)
    sessionStorage.setItem('goles', data.data.goles)
    sessionStorage.setItem('iddt', data.data.iddt)
    sessionStorage.setItem('nombre', data.data.nombre)
    sessionStorage.setItem('nombreequipo', data.data.nombreequipo)
    initBanner = true
    history.push('/goleadores/convocados')
  } catch (err) {
    console.error('Ups :( ', err)
  }
}

const getData = async (tipo, nro, setLoading, history) => {
  setLoading(true)
  try {
    const body = JSON.stringify({
      tipodocumento: tipo,
      nrodocumento: parseInt(nro, 10),
    })
    const headers = {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    }
    const response = await fetch(url_dt, {
      crossDomain: true,
      method: 'POST',
      body,
      headers,
    })
    const data = await response.json()
    if (data.error === true) {
      setLoading(false)
      let link = document.getElementById('registrar-tab')
      link.click()
      const {
        tipodocumento,
        nrodocumento,
        nombre,
        apellidopaterno,
        apellidomaterno,
      } = form

      const value = nrodocumento.value

      if (tipodocumento.value === 'DNI' && value.length === 8) {
        const body = JSON.stringify({ numeroDocumento: parseInt(value) })
        const headers = {
          Authorization: sessionStorage.getItem('token'),
          'Content-Type': 'application/json',
        }
        try {
          const response = await fetch(url_persona, {
            crossDomain: true,
            method: 'POST',
            body,
            headers,
          })
          const data = await response.json()
          if (data.error === true) {
            setLoading(false)
            return
          }

          nombre.value = data.data.nombres
          apellidopaterno.value = data.data.apellidoPaterno
          apellidomaterno.value = data.data.apellidoMaterno
        } catch (err) {
          console.error('Ups :( ', err)
        }
      }
      digitalData.push({
        form: {
          channel: 'Copa America',
          name: 'Formulario Login',
        },
        event: 'trackFormError',
      })
      return
    }
    console.log('post-login')
    digitalData.push({
      form: {
        channel: 'Copa America',
        name: 'Formulario Login',
      },
      event: 'trackFormSubmit',
    })
    digitalData.push({
      metadata: {
        key: 'CoachID',
        value: data.iddt,
      },
      event: 'trackMetadata',
    })
    sessionStorage.setItem('tipodocumento', tipo)
    sessionStorage.setItem('nrodocumento', nro)
    sessionStorage.setItem('apellidomaterno', data.apellidomaterno)
    sessionStorage.setItem('apellidopaterno', data.apellidopaterno)
    sessionStorage.setItem('goles', data.goles)
    sessionStorage.setItem('iddt', data.iddt)
    sessionStorage.setItem('nombre', data.nombre)
    sessionStorage.setItem('nombreequipo', data.nombreequipo)
    initBanner = true
    history.push('/goleadores/convocados')
  } catch (err) {
    console.error('Ups :( ', err)
  }
}

const Banner = ({ history, errors }) => {
  const [checkPolitica, setCheckPolitica] = useState(true)
  const [checkTerminos, setCheckTerminos] = useState(true)
  const [option, setOption] = useState('equipo')
  const [loading, setLoading] = useState(false)
  const [tipoDoc, setTipoDocumento] = useState('DNI')
  const [modalOpen, setOpenModal] = useState(false)
  const [modalOpenPolitica, setOpenModalPolitica] = useState(false)
  const [modalOpenComunicaciones, setOpenComunicaciones] = useState(false)
  const [validations, setValidation] = useState({
    nrodocumento: {
      error: false,
    },
    nombre: {
      error: false,
    },
    apellidopaterno: {
      error: false,
    },
    apellidomaterno: {
      error: false,
    },
    numerocontacto: {
      error: false,
    },
    nombreequipo: {
      error: false,
    },
    email: {
      error: false,
    },
  })

  if (option === 'equipo' && initBanner) {
    console.log('entro', initBanner)
    digitalData.push({
      form: {
        channel: 'Copa America',
        name: 'Formulario Login',
      },
      event: 'trackFormView',
    })
    initBanner = false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (option === 'registrar') {
      saveDT(history, setLoading, setOpenModal)
    } else {
      const { tipodocumento, nrodocumento } = form
      getData(tipodocumento.value, nrodocumento.value, setLoading, history)
    }
  }

  const setDocumento = () => {
    const { tipodocumento } = form
    document.getElementsByName('nrodocumento')[0].value = ''
    setTipoDocumento(tipodocumento.value)
  }
  const onChangeValue = async (evt) => {
    evt.preventDefault()
    const {
      tipodocumento,
      nrodocumento,
      nombre,
      apellidopaterno,
      apellidomaterno,
      numerocontacto,
      nombreequipo,
    } = form

    const name = evt.target.name
    const value = evt.target.value
    const newValidation = { ...validations }

    const hasLetter = /^[a-zA-ZñÑ]+$/
    const isNumber = /^\d+$/
    const hasCE = /^[0-9a-zA-Z]+$/

    if (
      name === 'nrodocumento' &&
      tipodocumento.value === 'DNI' &&
      value.length === 8 &&
      option === 'registrar'
    ) {
      const body = JSON.stringify({ numeroDocumento: parseInt(value) })
      const headers = {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      }
      try {
        const response = await fetch(url_persona, {
          crossDomain: true,
          method: 'POST',
          body,
          headers,
        })
        const data = await response.json()
        if (data.error === true) {
          setLoading(false)
          return
        }

        nombre.value = data.data.nombres
        apellidopaterno.value = data.data.apellidoPaterno
        apellidomaterno.value = data.data.apellidoMaterno
      } catch (err) {
        console.error('Ups :( ', err)
      }
    }

    switch (name) {
      case 'nrodocumento':
        if (tipodocumento.value === 'CARNET') {
          if (!hasCE.test(value)) {
            newValidation.nrodocumento.error = true
          } else {
            newValidation.nrodocumento.error = false
          }
          setValidation(newValidation)
          break
        } else {
          if (!isNumber.test(value)) {
            newValidation.nrodocumento.error = true
          } else {
            newValidation.nrodocumento.error = false
          }
          setValidation(newValidation)
          break
        }
      case 'nombre':
        if (!hasLetter.test(value)) {
          newValidation.nombre.error = true
        } else {
          newValidation.nombre.error = false
        }
        setValidation(newValidation)
        break
      case 'apellidopaterno':
        if (!hasLetter.test(value)) {
          newValidation.apellidopaterno.error = true
        } else {
          newValidation.apellidopaterno.error = false
        }
        setValidation(newValidation)
        break
      case 'apellidomaterno':
        if (!hasLetter.test(value)) {
          newValidation.apellidomaterno.error = true
        } else {
          newValidation.apellidomaterno.error = false
        }
        setValidation(newValidation)
        break
      case 'numerocontacto':
        if (!isNumber.test(value)) {
          newValidation.numerocontacto.error = true
        } else {
          newValidation.numerocontacto.error = false
        }
        setValidation(newValidation)
        break
      default:
        return null
    }
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  const closeModal = () => {
    setOpenModal(false)
    setOpenModalPolitica(false)
    setOpenComunicaciones(false)
  }

  let [bannerImg, setbannerImg] = useState(1);

  const onChange = async (value) => {
    if (value === 'registrar') {
      digitalData.push({
        form: {
          channel: 'Copa America',
          name: 'Formulario Registrar DT',
        },
        event: 'trackFormView',
      })
      setOption('registrar')

      setbannerImg(false);

    } else if (value === 'equipo') {
      digitalData.push({
        form: {
          channel: 'Copa America',
          name: 'Formulario Login',
        },
        event: 'trackFormView',
      })
      setOption('equipo')

      setbannerImg(true);
    }
  }

  return (
    <React.Fragment>
      <section id='banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-banner-l'>
              <div className='title'>
                <h3 className='title__colors title-size--3em'>
                  Viaja a la final de la copa<span> en Brasil</span>

                </h3>
                <h2 className='title__principal fixMainTitleBanner title-size--2em'>
                  ¡Conviértete en DT y gana un paquete doble!
                </h2>
              </div>
              <div className='formContentBrasil'>
                <div className='rowTabsOption'>
                  <div
                    id='login-tab'
                    onClick={() => onChange('equipo')}
                    className={`rowTabsOption--tab ${
                      option === 'equipo' ? ' rowTabsOption--tab--active' : ''
                    }`}
                  >
                    YA TENGO MI EQUIPO
                  </div>
                  <div
                    id='registrar-tab'
                    onClick={() => onChange('registrar')}
                    className={`rowTabsOption--tab ${
                      option === 'registrar'
                        ? ' rowTabsOption--tab--active'
                        : ''
                    }`}
                  >
                    REGÍSTRATE
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  ref={(e) => {
                    form = e
                  }}
                >
                  <div className='renderTabOption'>
                    <div className='renderTabOption--row renderTabOption--row--twoCols'>
                      <select
                        name='tipodocumento'
                        required
                        onChange={() => setDocumento()}
                      >
                        <option value='DNI'>DNI</option>
                        <option value='CARNET'>C.E.</option>
                      </select>
                      <input
                        required
                        minLength={tipoDoc === 'CARNET' ? '1' : '8'}
                        maxLength={tipoDoc === 'CARNET' ? '12' : '8'}
                        placeholder='Nro. de Documento'
                        name='nrodocumento'
                        type='text'
                        onChange={(e) => onChangeValue(e)}
                      />
                      {validations.nrodocumento.error && (
                        <div
                          className='customBorder--errorText'
                          style={{ top: '34px' }}
                        >
                          Debe ingresar un documento válido.
                        </div>
                      )}
                    </div>
                    {option === 'registrar' && (
                      <div>
                        <div className='renderTabOption--row'>
                          <input
                            id='nombre'
                            required
                            className={
                              validations.nombre.error
                                ? 'customBorder customBorder--error'
                                : 'customBorder'
                            }
                            type={tipoDoc === 'CARNET' ? 'text' : 'hidden'}
                            name='nombre'
                            placeholder='Nombres'
                            onChange={(e) => onChangeValue(e)}
                          />
                          {validations.nombre.error && (
                            <div className='customBorder--errorText'>
                              Debe ingresar un nombre válido.
                            </div>
                          )}
                        </div>
                        <div className='renderTabOption--row'>
                          <input
                            id='apellidopaterno'
                            required
                            className={
                              validations.apellidopaterno.error
                                ? 'customBorder customBorder--error'
                                : 'customBorder'
                            }
                            type={tipoDoc === 'CARNET' ? 'text' : 'hidden'}
                            name='apellidopaterno'
                            placeholder='Apellido paterno'
                            onChange={(e) => onChangeValue(e)}
                          />
                          {validations.apellidopaterno.error && (
                            <div className='customBorder--errorText'>
                              Debe ingresar un apellido paterno válido.
                            </div>
                          )}
                        </div>
                        <div className='renderTabOption--row'>
                          <input
                            id='apellidomaterno'
                            required
                            className={
                              validations.apellidomaterno.error
                                ? 'customBorder customBorder--error'
                                : 'customBorder'
                            }
                            type={tipoDoc === 'CARNET' ? 'text' : 'hidden'}
                            name='apellidomaterno'
                            placeholder='Apellido materno'
                            onChange={(e) => onChangeValue(e)}
                          />
                          {validations.apellidomaterno.error && (
                            <div className='customBorder--errorText'>
                              Debe ingresar un apellido materno válido.
                            </div>
                          )}
                        </div>
                        <div className='renderTabOption--row'>
                          <input
                            required
                            className={
                              validations.numerocontacto.error
                                ? 'customBorder customBorder--error'
                                : 'customBorder'
                            }
                            name='numerocontacto'
                            minLength='9'
                            maxLength='9'
                            pattern='\d*'
                            type='text'
                            placeholder='Número de contacto'
                            onChange={(e) => onChangeValue(e)}
                          />
                          {validations.numerocontacto.error && (
                            <div className='customBorder--errorText'>
                              Debe ingresar un número válido.
                            </div>
                          )}
                        </div>
                        <div className='renderTabOption--row'>
                          <input
                            type='email'
                            required
                            className='customBorder'
                            name='email'
                            placeholder='Email'
                            onChange={(e) => onChangeValue(e)}
                          />
                        </div>
                        <div className='renderTabOption--row'>
                          <input
                            required
                            className='customBorder'
                            type='text'
                            name='nombreequipo'
                            placeholder='Nombre de tu equipo'
                            onChange={(e) => onChangeValue(e)}
                          />
                        </div>
                        <div className='groupCheckbox'>
                          <label className='groupCheckbox--checkbox'>
                            Acepto las{' '}
                            <span
                              className='linkBlue'
                              style={{ display: 'contents', cursor: 'pointer' }}
                              onClick={() => setOpenComunicaciones(true)}
                            >
                              políticas de envío de comunicaciones comerciales
                            </span>
                          </label>
                          <input
                            type='checkbox'
                            required
                            checked={checkPolitica}
                          />
                          <div
                            className='groupCheckbox__indicator'
                            onClick={() => setCheckPolitica(!checkPolitica)}
                          />
                        </div>
                        <div className='groupCheckbox'>
                          <label className='groupCheckbox--checkbox'>
                            Acepto la{' '}
                            <span
                              className='linkBlue'
                              style={{ display: 'contents', cursor: 'pointer' }}
                              onClick={() => setOpenModalPolitica(true)}
                            >
                              Pólitica de Protección de Datos Personales
                            </span>{' '}
                            y los{' '}
                            <a
                              href='https://www.rimac.com.pe/goleadores/terminos-y-condiciones-legal.pdf'
                              target='_blank'
                              style={{ display: 'contents', cursor: 'pointer' }}
                            >
                              Términos y Condiciones de la web
                            </a>
                          </label>
                          <input
                            type='checkbox'
                            required
                            checked={checkTerminos}
                          />
                          <div
                            className='groupCheckbox__indicator'
                            onClick={() => setCheckTerminos(!checkTerminos)}
                          />
                        </div>
                      </div>
                    )}
                    <button
                      className={`buttonDT${loading ? ' btn--loading' : ''}`}
                      type='submit'
                    >
                      {option === 'registrar' ? 'LISTO PARA SER DT' : 'VAMOS'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-banner-r image-container' />
          </div>
        </div>

        {bannerImg ? (
          <div
          className='bgHomeBanner'
          style={{
            backgroundImage: `url(${
              ENV[process.env.NODE_ENV].ASSETS_FOLDER
            }images/BannerPrincipal.png)`,
          }}
        />
        ) : (
          <div
          className='bgHomeBanner top-banner'
          style={{
            backgroundImage: `url(${
              ENV[process.env.NODE_ENV].ASSETS_FOLDER
            }images/BannerPrincipal.png)`,
          }}
        />
        )}

        <div 
          className='bgHomeBanner-mobile'
          style={{
            backgroundImage: `url(${
              ENV[process.env.NODE_ENV].ASSETS_FOLDER
            }images/BannerPrincipal.png)`,
          }}
        />
      </section>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='wrapModalRimac'>
          <div className='wrapModalRimac--close' onClick={() => closeModal()} />
          <div className='wrapModalRimac__title'>
            ¡Ya eres DT o el nombre de tu equipo existe!
          </div>
          <div className='wrapModalRimac__content'>
            Para ingresar y convocar a tus jugadores, ingresa a la sección "Ya
            tengo mi equipo".
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalOpenPolitica}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='wrapModalRimacProteccionDatos'>
          <div className='wrapModalRimac--close' onClick={() => closeModal()} />
          <div className='wrapModalRimac__title'>
            POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES
          </div>
          <div className='wrapModalRimac__content'>
            Conforme a lo establecido en la Ley N° 29733 - Ley de Protección de
            Datos Personales (la “Ley”) y en el Decreto Supremo 003-2013/JUS -
            Reglamento de la Ley (el “Reglamento”), doy mi consentimiento libre,
            previo, informado, expreso e inequívoco, para que Rimac Seguros y
            Reaseguros (en adelante, RIMAC) realice el tratamiento de los datos
            personales que le proporcione de forma física o digital (los “Datos
            Personales”), con la finalidad de ejecutar cualquier relación
            contractual que mantengo y/o mantendré con la misma, así como para
            fines estadísticos y/o analíticos, y/o de comportamiento del cliente
            y/o para que evalúen la calidad del producto o servicio brindado.
            Declaro conocer mi derecho a revocar este consentimiento en
            cualquier momento. Autorizo para los fines señalados, que RIMAC
            pueda realizar un tratamiento por encargo a terceros de mis Datos
            Personales, pudiendo transferirlos a nivel nacional y/o
            internacional a las empresas subsidiarias, filiales, asociadas,
            afiliadas o miembros del Grupo Económico al cual pertenece RIMAC,
            además de otras empresas cuyo listado completo se encuentra en la
            página web www.rimac.com.pe, sujetándose a las mismas obligaciones y
            medidas de seguridad, técnicas y legales. Declaro haber sido
            informado que conforme a la Ley y el Reglamento, mientras dure mi
            relación contractual con RIMAC y hasta por 10 años de culminada la
            misma, mis Datos Personales se almacenarán en el banco de datos de
            Clientes de titularidad de RIMAC, con domicilio en Av. Paseo de la
            República 3505 Piso 11 – San Isidro, Lima, estando además inscritos
            en el Registro Nacional de Protección de Datos Personales con la
            denominación “Clientes” con código RNPDP-PJP N° 1637. Declaro
            conocer mi derecho a solicitar el acceso a mis Datos Personales y
            conocer su tratamiento, así como a solicitar su actualización,
            inclusión, rectificación, cancelación y supresión, pudiendo oponerme
            a su uso o divulgación, a través de cualquiera de las Plataformas de
            Atención de RIMAC. Teniendo a salvo además el ejercicio de la tutela
            de mis derechos ante la Autoridad Nacional de Protección de Datos
            Personales en vía de reclamación o al Poder Judicial para la acción
            de hábeas data.
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalOpenComunicaciones}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='wrapModalRimac'>
          <div className='wrapModalRimac--close' onClick={() => closeModal()} />
          <div className='wrapModalRimac__title'>
            POLÍTICA DE ENVÍO DE COMUNICACIONES COMERCIALES
          </div>
          <div className='wrapModalRimac__content'>
            Autorizo a RIMAC a utilizar mis Datos Personales y que los mismos
            sean tratados por terceros, para que me sean ofrecidos beneficios,
            productos y servicios de RIMAC, a través de cualquier medio de
            comunicación. Declaro conocer que el no conceder esta autorización
            no afectará la prestación del servicio contratado.
          </div>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default Banner
