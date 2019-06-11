import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import ENV from '../../../env'

let form = {}

const url_dt = ENV[process.env.NODE_ENV].OBTENER_DT
const listar_convocados = ENV[process.env.NODE_ENV].LISTAR_CONVOCADOS
const registrar_convocados = ENV[process.env.NODE_ENV].REGISTRAR_CONVOCADOS
const url_persona = ENV[process.env.NODE_ENV].OBTENER_PERSONA
let intConvocados = true;
let tipoSubproducto = '';

const Referenciadores = ({ history }) => {
  const [datoUsuario, setData] = useState({})
  const [datoConvocados, setConvocados] = useState({})
  const [tipoDoc, setTipoDocumento] = useState('DNI')
  const [loading, setLoading] = useState(false)
  const [collapseForm, setCollapse] = useState(false)
  const [modalOpen, setOpenModal] = useState(false)
  const [modalOpenPolitica, setOpenModalPolitica] = useState(false)
  const [modalOpenPuntos, setOpenModalOpenPuntos] = useState(false)
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

  if (intConvocados) {
    digitalData.push({
      form: {
        channel: 'Copa America',
        name: 'Formulario Registrar Convocado',
      },
      event: 'trackFormView',
    })
    intConvocados = false
  }

  const getData = async () => {
    try {
      const body = JSON.stringify({
        tipodocumento: sessionStorage.getItem('tipodocumento'),
        nrodocumento: parseInt(sessionStorage.getItem('nrodocumento'), 10),
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
      setData(data)
    } catch (err) {
      console.error('Ups :( ', err)
    }
  }

  const getConvocados = async () => {
    try {
      const body = JSON.stringify({
        dt: parseInt(sessionStorage.getItem('nrodocumento'), 10),
      })
      const headers = {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      }
      const response = await fetch(listar_convocados, {
        crossDomain: true,
        method: 'POST',
        body,
        headers,
      })
      const data = await response.json()
      setConvocados(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error('Ups :( ', err)
    }
  }

  const setConvocar = async (params) => {
    setLoading(true)
    try {
      const body = JSON.stringify({
        iddt: params.iddt,
        origen: '',
        origenMedio: '',
        origenContenido: '',
        origenCamapania: '',
        nombre: params.nombre,
        apellidopaterno: params.apellidopaterno,
        apellidomaterno: params.apellidomaterno,
        tipodocumento: params.tipodocumento,
        nrodocumento: params.nrodocumento,
        nrocontacto: params.nrocontacto,
        correo: params.correo,
        subproducto: params.subproducto,
      })
      const headers = {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      }
      const response = await fetch(registrar_convocados, {
        crossDomain: true,
        method: 'POST',
        body,
        headers,
      })
      const data = await response.json()
      if (data.error === true) {
        setLoading(false)
        setOpenModal(true)
        return
      }
      digitalData.push({
        metadata: {
          key: 'LeadID',
          value: data.data.idlead,
        },
        event: 'trackMetadata',
      })
      tipoSubproducto = params.subproducto;
      console.log('subproducto.value=>',tipoSubproducto)
      if (
        tipoSubproducto === 'soat-digital' ||
        tipoSubproducto === 'seguro-viajes'
      ) {
        setOpenModalOpenPuntos(true)
      }
      getConvocados();
      document.getElementsByName('tipodocumento')[0].value = 'DNI'
      document.getElementsByName('nrodocumento')[0].value = ''
      document.getElementsByName('nombre')[0].value = ''
      document.getElementsByName('apellidopaterno')[0].value = ''
      document.getElementsByName('apellidomaterno')[0].value = ''
      document.getElementsByName('numerocontacto')[0].value = ''
      document.getElementsByName('correo')[0].value = ''
      document.getElementsByName('subproducto')[0].value = ''
      digitalData.push({
        form: {
          channel: 'Copa America',
          name: 'Formulario Registrar Convocado',
        },
        event: 'trackFormSubmit',
      });
      digitalData.push({
        metadata: {
          key: 'Producto Seleccionado',
          value: params.labelsubproducto,
        },
        event: 'trackMetadata',
      });
      
    } catch (err) {
      console.error('Ups :( ', err)
    }
  }

  useEffect(() => {
    getData()
    getConvocados()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      tipodocumento,
      nrodocumento,
      nombre,
      apellidopaterno,
      apellidomaterno,
      numerocontacto,
      subproducto,
      correo,
    } = form
    const json = {
      iddt: sessionStorage.getItem('iddt'),
      origen: '',
      origenMedio: '',
      origenContenido: '',
      origenCamapania: '',
      nombre: nombre.value,
      apellidopaterno: apellidopaterno.value,
      apellidomaterno: apellidomaterno.value,
      tipodocumento: tipodocumento.value,
      nrodocumento: nrodocumento.value,
      nrocontacto: numerocontacto.value,
      correo: correo.value,
      subproducto: subproducto.value,
      labelsubproducto: subproducto.options[subproducto.selectedIndex].text,
    }
    console.log('json', numerocontacto.value)
    console.log('json-antes', json)

    setConvocar(json)
  }
  const setDocumento = () => {
    const { tipodocumento } = form
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
      value.length === 8
    ) {
      const body = JSON.stringify({
        numeroDocumento: parseInt(value),
      })
      const headers = {
        Authorization: sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      }
      try {
        setLoading(true);
        const response = await fetch(url_persona, {
          crossDomain: true,
          method: 'POST',
          body,
          headers,
        })
        const data = await response.json()
        if (data.error === true) {
          setLoading(false);
          return
        }
        nombre.value = data.data.nombres
        apellidopaterno.value = data.data.apellidoPaterno
        apellidomaterno.value = data.data.apellidoMaterno
        setLoading(false)
      } catch (err) {
        setLoading(false)
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
    setOpenModalOpenPuntos(false)
  }

  const onClick = async (val) => {
    let tipoRedSocial = ''
    if (val === 'whatsapp') {
      tipoRedSocial = 'Redes Sociales - Whatsapp'
      window.open(
        'https://wa.me/?text=https://www.rimac.com.pe/goleadores',
        '_blank'
      )
    } else if (val === 'facebook') {
      tipoRedSocial = 'Redes Sociales - Facebook'
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=https://www.rimac.com.pe/goleadores',
        'facebook-popup',
        'height=350,width=600',
        '_blank'
      )
    }

    if (tipoRedSocial != '') {
      digitalData.push({
        action: {
          group: 'interaction',
          category: 'Página de Convocados',
          event: 'click',
          label: tipoRedSocial,
        },
        event: 'trackAction',
      })
    }
  }
  const getModalLink = () => {
    const seleccionado = tipoSubproducto;
    console.log('seleccionado',seleccionado)
    switch (seleccionado) {
      case 'soat-digital':
        return (
          <a href='https://www.rimac.com.pe/SOATDIGITAL/' target='_blank'>
            https://www.rimac.com.pe/SOATDIGITAL/
          </a>
        )
      case 'seguro-viajes':
        return (
          <a
            href='https://www.rimac.com.pe/segurodeviaje/'
            target='_blank'
            className='linkBlue'
          >
            https://www.rimac.com.pe/segurodeviaje/
          </a>
        )
      case 'accidentes-ninios-jovenes':
        return (
          <a
            href='https://www.rimac.com.pe/accidentes/cotizacion/'
            target='_blank'
            className='linkBlue'
          >
            https://www.rimac.com.pe/accidentes/cotizacion/
          </a>
        )
      default:
        return 'null'
    }
  }
  return (
    <div>
      <section id='referenciador'>
        <div
          className='referenciador__header'
          style={{
            backgroundImage: `url(${
              ENV[process.env.NODE_ENV].ASSETS_FOLDER
            }images/Convocados_Background.png)`,
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col s2 link'>
                <div
                  onClick={() => history.goBack()}
                  id='btnBack'
                  className='link-back'
                  style={{ color: '#ffffff', cursor: 'pointer' }}
                >
                  <i className='icon-left-open' />
                  <span>Volver</span>
                </div>
              </div>
              <div className='col s2 img_dt_xd pc' />
              <div className='col s5 css_movil_5'>
                {Object.keys(datoUsuario).length > 0 && (
                  <React.Fragment>
                    <div className='camp_tituloDT'>
                      <div>
                        Hola {datoUsuario.nombre} {datoUsuario.apellidopaterno}{' '}
                        {datoUsuario.apellidomaterno}, eres DT del equipo{' '}
                        <span style={{ color: '#F0353B' }}>
                          {datoUsuario.nombreequipo}
                        </span>{' '}
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
              <div className='col s3'>
                <div className='seccion_comparte'>
                  Comparte tu convocatoria:
                  <div
                    className='seccion_comparte_redes'
                    style={{ marginTop: '5px' }}
                  >
                    <a onClick={() => onClick('whatsapp')}>
                      <img
                        src={`${
                          ENV[process.env.NODE_ENV].ASSETS_FOLDER
                        }images/whatsapp.png`}
                        style={{ width: '25px', cursor: 'pointer' }}
                      />
                    </a>
                    <a onClick={() => onClick('facebook')}>
                      <img
                        src={`${
                          ENV[process.env.NODE_ENV].ASSETS_FOLDER
                        }images/feisbuk.png`}
                        style={{
                          marginLeft: '10px',
                          width: '25px',
                          cursor: 'pointer',
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container espacio'>
          <div className='row'>
            <div className='col s12 m6 l4 form-container'>
              <div className='renderTabOption'>
                <div className='seccion_convocar'>
                  {collapseForm
                    ? 'QUIERO SEGUIR CONVOCANDO'
                    : 'QUIERO CONVOCAR A:'}
                </div>
                <div
                  className='collapseForm'
                  onClick={() => setCollapse(!collapseForm)}
                />
                <form
                  className={collapseForm ? 'hide' : 'show'}
                  onSubmit={handleSubmit}
                  ref={(e) => {
                    form = e
                  }}
                >
                  <div className='renderTabOption--row renderTabOption--row--twoCols form_width'>
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
                      pattern='\d*'
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
                  <div>
                    <div className='renderTabOption--row'>
                      <input
                        required
                        className='customBorder'
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
                        required
                        className='customBorder'
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
                        required
                        className='customBorder'
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
                        className='customBorder'
                        type='text'
                        name='numerocontacto'
                        minLength='9'
                        maxLength='9'
                        pattern='\d*'
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
                        required
                        className='customBorder'
                        type='email'
                        name='correo'
                        placeholder='correo'
                        onChange={(e) => onChangeValue(e)}
                      />
                    </div>
                    <div className='renderTabOption--row'>
                      <select
                        className='customBorder'
                        name='subproducto'
                        required
                      >
                        <option selected value=''>
                          ¿Qué seguro desea?
                        </option>
                        <option value='cotizador-vehicular'>
                          Seguro Vehicular (5 goles)
                        </option>
                        <option value='cotizador-salud'>
                          Seguro de Salud Particular (5 goles)
                        </option>
                        <option value='seguro-viajes'>
                          Seguro de Viajes (3 goles)
                        </option>
                        <option value='seguro-oncologico'>
                          Seguro Oncológico (3 goles)
                        </option>
                        <option value='accidentes-ninios-jovenes'>
                          Seguro Accidentes, Niños y Jóvenes (3 goles)
                        </option>
                        <option value='seguro-domiciliario'>
                          Seguro de Hogar (3 goles)
                        </option>
                        <option value='pymes'>Socio Seguro (3 goles)</option>
                        <option value='soat-digital'>SOAT (1 gol)</option>
                        <option value='vida-con-devolucion'>
                          Vida con Devolución (1 gol)
                        </option>
                        <option value='sepelio'>
                          Seguro de Sepelio (1 gol)
                        </option>
                      </select>
                    </div>
                    <div className='groupCheckbox' />
                  </div>
                  <button
                    className={`buttonDT${loading ? ' btn--loading' : ''}`}
                    type='submit'
                  >
                    CONVOCAR
                  </button>
                </form>
                <div className={collapseForm ? 'hide' : 'show texto_inferior'}>
                  Recuerda avisar a tu convocado que nos contactaremos con
                  él/ella. Una vez que haya adquirido un seguro con nosotros,
                  vas sumando goles.
                </div>
              </div>
            </div>
            <div className='col s12 m6 l8'>
              {Object.keys(datoConvocados).length > 0 && (
                <div className='referidos'>
                  {datoConvocados.data.length > 0 ? (
                    <React.Fragment>
                      <div className='row'>
                        <div className='referidos__header list'>
                          <h4 className='col s12 l7 list__title titulo_convocados'>
                            Tus convocados ({datoConvocados.data.length})
                          </h4>
                        </div>
                      </div>
                      <div className='row referidos__body list row_complete'>
                        <div className='col s12 list__full tablaInvocados__wrap'>
                          <table className='tablaInvocados'>
                            <thead className='title-container titulo_lista'>
                              <tr>
                                <th>NOMBRE</th>
                                <th>PRODUCTO</th>
                                <th>ESTADO</th>
                                <th>GOLES</th>
                              </tr>
                            </thead>
                            <tbody className='title-container'>
                              {datoConvocados.data.map((e) => {
                                return (
                                  <tr className='dev_linea'>
                                    <td>{e.nombres}</td>
                                    <td>{e.producto}</td>
                                    <td>{e.estado}</td>
                                    <td>{e.goles}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                        <div className='col s12 list__full margin_top45' />
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className='canchaVacia'>
                        <div className='canchaVacia__img'>
                          <img
                            src={`${
                              ENV[process.env.NODE_ENV].ASSETS_FOLDER
                            }images/cancha.png`}
                          />
                        </div>
                        <div className='canchaVacia__text'>
                          Aún la cancha está vacía.
                          <br />
                          ¡Empieza a convocar!
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='showResponsivesocial'>
          <div className='showResponsivesocial__title'>
            Comparte tu convocatoria:
          </div>
          <a onClick={() => onClick('whatsapp')}>
            <img
              src={`${
                ENV[process.env.NODE_ENV].ASSETS_FOLDER
              }images/whatsapp.png`}
              style={{ width: '25px', cursor: 'pointer' }}
            />
          </a>
          <a onClick={() => onClick('facebook')}>
            <img
              src={`${
                ENV[process.env.NODE_ENV].ASSETS_FOLDER
              }images/feisbuk.png`}
              style={{
                marginLeft: '10px',
                width: '25px',
                cursor: 'pointer',
              }}
            />
          </a>
        </div>
      </section>
      <Modal
        isOpen={modalOpenPuntos}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='wrapModalRimac'>
          <div className='wrapModalRimac--close' onClick={() => closeModal()} />
          <div className='wrapModalRimac__title' />
          <div className='wrapModalRimac__content'>
            Si tu convocado adquiere este seguro por el Chatbot Tobi, duplicas tus goles!
            <br />
            Compártele el siguiente link: {getModalLink()}
            <br/>
            *Máximo 1 seguro por convocado
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='wrapModalRimac'>
          <div className='wrapModalRimac--close' onClick={() => closeModal()} />
          <div className='wrapModalRimac__title'>
            Tu convocado no puede entrar a la cancha
          </div>
          <div className='wrapModalRimac__content'>
            Como en el fútbol, un jugador solo tiene un equipo. La persona que
            estás convocando ya está jugando en otro equipo, por favor ingresa
            otro.
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalOpenPolitica}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='wrapModalRimac'>
          <div className='wrapModalRimac--close' onClick={() => closeModal()} />
          <div className='wrapModalRimac__title'>
            Política de envío de comunicaciones
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
    </div>
  )
}

export default Referenciadores
