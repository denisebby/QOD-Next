import React from 'react'

import PropTypes from 'prop-types'

const NavbarInteractive = (props) => {
  return (
    <>
      <div className={`navbar-interactive-container ${props.rootClassName} `}>
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-interactive-image"
          />
          <span className="navbar-interactive-text">{props.text}</span>
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive-desktop-menu"
          >
            <div className="navbar-interactive-buttons">
              <button className="navbar-interactive-register Content button">
                {props.Register}
              </button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <div className="navbar-interactive-nav">
              <div className="navbar-interactive-top">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="navbar-interactive-image1"
                />
                <span className="navbar-interactive-text1">{props.text1}</span>
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon2"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="navbar-interactive-mobilenavoptions">
              <div className="navbar-interactive-container1">
                <span>{props.text2}</span>
              </div>
              <div className="navbar-interactive-container2">
                <span>{props.text21}</span>
              </div>
              <div className="navbar-interactive-container3">
                <span>{props.text211}</span>
              </div>
              <div className="navbar-interactive-container4">
                <span>{props.text212}</span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-container {
            display: flex;
            position: relative;
          }
          .navbar-interactive-navbar-interactive {
            width: 100%;
            height: 100%;
            display: flex;
            box-shadow: 0px 1px 3px 0px #36454f;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            border-bottom: 1px solid my-blue;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-primary-my-blue);
          }
          .navbar-interactive-image {
            width: auto;
            object-fit: cover;
          }
          .navbar-interactive-text {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: 1.15;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-desktop-menu {
            flex: 1;
            display: flex;
            align-self: center;
            justify-content: flex-end;
          }
          .navbar-interactive-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-register {
            align-self: center;
          }
          .navbar-interactive-burger-menu {
            display: none;
          }
          .navbar-interactive-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-interactive-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-image1 {
            width: auto;
            object-fit: cover;
          }
          .navbar-interactive-text1 {
            font-size: 32px;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar-interactive-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-mobilenavoptions {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .navbar-interactive-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .navbar-interactive-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .navbar-interactive-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .navbar-interactive-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .navbar-interactive-root-class-name {
            width: 100%;
            height: var(--dl-size-size-small);
            margin: 0px;
            align-self: flex-start;
          }
          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-interactive-image {
              height: auto;
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-interactive-mobile-menu {
              height: auto;
              background-color: var(--dl-color-primary-my-blue);
            }
            .navbar-interactive-nav {
              height: 20%;
            }
            .navbar-interactive-text1 {
              color: #ffffff;
            }
            .navbar-interactive-mobilenavoptions {
              height: 80%;
              align-items: center;
              padding-top: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-interactive-container1 {
              width: 40%;
              height: auto;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              margin-bottom: var(--dl-space-space-unit);
              justify-content: center;
              background-color: var(--dl-color-primary-my-blue);
            }
            .navbar-interactive-container2 {
              width: 40%;
              height: auto;
              padding: var(--dl-space-space-halfunit);
              margin-top: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              margin-bottom: var(--dl-space-space-unit);
              background-color: #ffffff;
            }
            .navbar-interactive-container3 {
              width: 40%;
              height: auto;
              padding: var(--dl-space-space-halfunit);
              margin-top: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              margin-bottom: var(--dl-space-space-unit);
              background-color: #ffffff;
            }
            .navbar-interactive-container4 {
              width: 40%;
              height: auto;
              padding: var(--dl-space-space-halfunit);
              margin-top: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              margin-bottom: var(--dl-space-space-unit);
              background-color: #ffffff;
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
              height: var(--dl-size-size-medium);
              padding: var(--dl-space-space-unit);
            }
            .navbar-interactive-text {
              font-size: 16px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-interactive-mobile-menu {
              padding: 16px;
            }
            .navbar-interactive-text1 {
              color: #ffffff;
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  image_alt1: 'image',
  text1: 'Data Pro Daily',
  rootClassName: '',
  text212: 'Sign Out',
  Login: 'Sign in',
  image_alt: 'image',
  text211: 'Leaderboard',
  Register: 'Sign In',
  text: 'Data Pro Daily',
  text2: 'Text',
  image_src: '/external/icons8-hyena-64%20(2)-300h.png',
  image_src1: '/external/icons8-hyena-64%20(2)-300h.png',
  text21: 'Welcome!',
}

NavbarInteractive.propTypes = {
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text212: PropTypes.string,
  Login: PropTypes.string,
  image_alt: PropTypes.string,
  text211: PropTypes.string,
  Register: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  text21: PropTypes.string,
}

export default NavbarInteractive
