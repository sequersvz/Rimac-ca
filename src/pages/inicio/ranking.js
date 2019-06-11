import React, { useState, useEffect } from 'react'

const Ranking = ({ ranking }) => {
  return (
    <section id='ranking'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <h3 className='title__colors title-colors--regular'>Ranking de equipos</h3>
            <h2 className='title__principal'>
              ¡Ellos están más cerca de ir a Brasil!
            </h2>
            <div className='rankingContent' style={{ height: '365px' }}>
              {Object.keys(ranking).length > 0 &&
                ranking.data.map((e, i) => {
                  return (
                    <div
                      className={`rankingRow${
                        i === 0 ? ' rankingRow--active' : ''
                      }`}
                      key={i}
                    >
                      <div className='rankingRow--col rankingRow--col--number'>
                        {i + 1}
                      </div>
                      <div className='rankingRow--col'>{e.nombreequipo}</div>
                      <div className='rankingRow--col'>{e.goles} goles</div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className='col s12 m6'>
            <div className='bgHumanRanking' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ranking
