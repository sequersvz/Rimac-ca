import React from 'react'
import ENV from '../../../../env'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <div className='row'>
            <div className='nav-wrapper'>
              <a href='https://www.rimac.com.pe/' className='brand-logo'>
                <img
                  src={`${
                    ENV[process.env.NODE_ENV].ASSETS_FOLDER
                  }images/logo.png`}
                  alt='Logo Rimac Seguros'
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
