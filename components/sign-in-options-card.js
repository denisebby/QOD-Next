import React from 'react'

import PropTypes from 'prop-types'

const SignInOptionsCard = (props) => {
  return (
    <>
      <div className="sign-in-options-card-container">
        <div className="sign-in-options-card-container1">
          <div className="sign-in-options-card-container2">
            <span className="sign-in-options-card-text">{props.text2}</span>
            <svg viewBox="0 0 1024 1024" className="sign-in-options-card-icon">
              <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
              <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
            </svg>
          </div>
          <div className="sign-in-options-card-googlebutton">
            <div className="sign-in-options-card-container3"></div>
            <div className="sign-in-options-card-container4">
              <span>{props.text1}</span>
            </div>
          </div>
          <div className="sign-in-options-card-githubbutton">
            <div className="sign-in-options-card-container5"></div>
            <div className="sign-in-options-card-container6">
              <span className="sign-in-options-card-text2">{props.text11}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-in-options-card-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-options-card-container1 {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-my-blue);
          }
          .sign-in-options-card-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .sign-in-options-card-text {
            color: var(--dl-color-gray-white);
          }
          .sign-in-options-card-icon {
            top: 11px;
            fill: #d9d9d9;
            right: 16px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .sign-in-options-card-googlebutton {
            flex: 0 0 auto;
            width: 60%;
            height: var(--dl-size-size-small);
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            border-radius: 20px;
            margin-bottom: 0px;
            background-color: #ffffff;
          }
          .sign-in-options-card-container3 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-options-card-container4 {
            flex: 0 0 auto;
            width: 80%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-options-card-githubbutton {
            flex: 0 0 auto;
            width: 60%;
            height: var(--dl-size-size-small);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #000000;
          }
          .sign-in-options-card-container5 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in-options-card-container6 {
            flex: 0 0 auto;
            width: 80%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in-options-card-text2 {
            color: var(--dl-color-gray-white);
          }
          @media (max-width: 767px) {
            .sign-in-options-card-container1 {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .sign-in-options-card-container1 {
              width: 70%;
            }
          }
        `}
      </style>
    </>
  )
}

SignInOptionsCard.defaultProps = {
  text1: 'Google',
  text: 'Text',
  text11: 'Github',
  text2: 'Sign in with',
}

SignInOptionsCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
}

export default SignInOptionsCard
