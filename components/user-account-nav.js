import React from 'react'

import PropTypes from 'prop-types'

const UserAccountNav = (props) => {
  return (
    <>
      <div className="user-account-nav-container">
        <div
          data-thq="thq-dropdown"
          className="user-account-nav-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="user-account-nav-dropdown-toggle"
          >
            <span className="user-account-nav-text">Menu Item</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="user-account-nav-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="user-account-nav-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="user-account-nav-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="user-account-nav-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="user-account-nav-dropdown-toggle1"
              >
                <span className="user-account-nav-text1">Welcome! </span>
                <span className="user-account-nav-text2">{props.text}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="user-account-nav-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="user-account-nav-dropdown-toggle2"
              >
                <span className="user-account-nav-text3">Leaderboard</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="user-account-nav-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="user-account-nav-dropdown-toggle3"
              >
                <span className="user-account-nav-text4">Sign Out</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .user-account-nav-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-account-nav-thq-dropdown {
            color: white;
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius2);
            background-color: var(--dl-color-primary-my-blue);
          }
          .user-account-nav-dropdown-toggle {
            fill: #595959;
            color: var(--dl-color-gray-white);
            width: 100%;
            height: auto;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .user-account-nav-text {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .user-account-nav-dropdown-arrow {
            transition: 0.3s;
          }
          .user-account-nav-icon {
            color: white;
            width: 18px;
            height: 18px;
            transform: rotate(90deg);
            transition: 0.3s;
          }
          .user-account-nav-dropdown-list {
            left: 0%;
            color: white;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-primary-my-blue);
            list-style-position: inside;
          }
          .user-account-nav-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .user-account-nav-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .user-account-nav-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .user-account-nav-text1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            justify-content: flex-start;
          }
          .user-account-nav-text2 {
            color: #ffffff;
          }
          .user-account-nav-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .user-account-nav-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .user-account-nav-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .user-account-nav-text3 {
            color: var(--dl-color-gray-white);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .user-account-nav-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .user-account-nav-dropdown-toggle3 {
            fill: #595959;
            color: var(--dl-color-primary-my-blue);
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #ffffff;
          }
          .user-account-nav-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .user-account-nav-text4 {
            color: var(--dl-color-primary-my-blue);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

UserAccountNav.defaultProps = {
  text: 'Text',
}

UserAccountNav.propTypes = {
  text: PropTypes.string,
}

export default UserAccountNav
