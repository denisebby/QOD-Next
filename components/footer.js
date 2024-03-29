import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-logo-and-credit">
          <div className="footer-container">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="footer-image"
            />
            <span className="footer-text">{props.text}</span>
          </div>
          <div className="footer-container1">
            <span className="footer-text1">{props.text1}</span>
          </div>
        </div>
        <div className="footer-socials">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image1"
          />
          <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: auto;
            justify-content: space-between;
          }
          .footer-logo-and-credit {
            flex: 0 0 auto;
            width: 40%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-container {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .footer-image {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
          }
          .footer-text {
            color: var(--dl-color-primary-my-blue);
            align-self: center;
            margin-left: var(--dl-space-space-unit);
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: flex-start;
          }
          .footer-text1 {
            margin-top: var(--dl-space-space-unit);
          }
          .footer-socials {
            width: var(--dl-size-size-medium);
            margin: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-image1 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_src1: '/external/icons8-hyena-64%20(2)-200h.png',
  image_alt: 'image',
  text: 'Data Pro Daily',
  text1: 'icons from Icons8',
  image_alt1: 'image',
  image_src: '/external/icons8-twitterx-60-200h.png',
}

Footer.propTypes = {
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Footer
