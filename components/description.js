import React from 'react'

import PropTypes from 'prop-types'

const Description = (props) => {
  return (
    <>
      <div className={`description-description ${props.rootClassName} `}>
        <span className="Content">{props.Text}</span>
      </div>
      <style jsx>
        {`
          .description-description {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .description-root-class-name {
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 767px) {
            .description-description {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .description-description {
              margin-top: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

Description.defaultProps = {
  rootClassName: '',
  Text: 'Description',
}

Description.propTypes = {
  rootClassName: PropTypes.string,
  Text: PropTypes.string,
}

export default Description
