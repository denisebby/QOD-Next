import React from 'react'

import PropTypes from 'prop-types'

const AnswerChoices = (props) => {
  return (
    <>
      <div className={`answer-choices-answer-choices ${props.rootClassName} `}>
        <span className="Content">{props.text}</span>
      </div>
      <style jsx>
        {`
          .answer-choices-answer-choices {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .answer-choices-root-class-name {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

AnswerChoices.defaultProps = {
  text: 'Answer Choices',
  rootClassName: '',
}

AnswerChoices.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AnswerChoices
