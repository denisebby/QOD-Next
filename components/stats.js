import React from 'react'

import PropTypes from 'prop-types'

const Stats = (props) => {
  return (
    <>
      <div className={`stats-stats ${props.rootClassName} `}>
        <span className="Content">{props.text}</span>
      </div>
      <style jsx>
        {`
          .stats-stats {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .stats-root-class-name {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

Stats.defaultProps = {
  text: 'Stats',
  rootClassName: '',
}

Stats.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Stats
