import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Banner from './banner'
import TodoLoQueGanaras from './todoLoQueGanaras'
import ComoFunciona from './comoFunciona'
import ComoMetesMasGoles from './comoMetesMasGoles'
import Ranking from './ranking'
import Rules from './rules'
import Contacto from './contacto'
import ENV from '../../../env'

const urlToken = ENV[process.env.NODE_ENV].TOKEN
const url_ranking = ENV[process.env.NODE_ENV].LISTAR_RANKING

const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
}

const getRanking = async (setRanking) => {
  try {
    const body = JSON.stringify({})
    const headers = {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    }

    const response = await fetch(url_ranking, {
      crossDomain:true,
      method: 'POST',
      body,
      headers
    })
    const data = await response.json()
    setRanking(data)
  } catch (err) {
    console.error('Ups :( ', err)
  }
}

const getToken = async (setRanking) => {
  try {
    const body = {}
    const response = await fetch(urlToken, { method: 'POST', body, headers })
    const data = await response.json()
    sessionStorage.setItem('token', data.access_token)
    getRanking(setRanking)
  } catch (err) {
    console.error('Ups :( ', err)
  }
}


const Dashboard = (props) => {
  const [ranking, setRanking] = useState({})
  useEffect(() => {
    getToken(setRanking)
  }, [])
  return (
    <React.Fragment>
      <Banner {...props} />
      <TodoLoQueGanaras />
      <ComoFunciona />
      <ComoMetesMasGoles />
      <Ranking ranking={ranking} />
      <Rules />
      <Contacto />
    </React.Fragment>
  )
}

export default Dashboard
