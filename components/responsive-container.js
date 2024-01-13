import React from 'react'

import PropTypes from 'prop-types'

const ResponsiveContainer = (props) => {
  return (
    <>
      <div
        className={`responsive-container-responsive-container ${props.rootClassName} `}
      >
        <div className="responsive-container-container">
          <span className="Content">{props.Text}</span>
        </div>
        <div className="responsive-container-container1">
          <span className="Content">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .responsive-container-responsive-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .responsive-container-container {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .responsive-container-container1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .responsive-container-root-class-name {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 767px) {
            .responsive-container-container {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .responsive-container-container1 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

ResponsiveContainer.defaultProps = {
  text: 'Responsive Container 2',
  rootClassName: '',
  Text: 'Responsive Container 1',
}

ResponsiveContainer.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  Text: PropTypes.string,
}

export default ResponsiveContainer
