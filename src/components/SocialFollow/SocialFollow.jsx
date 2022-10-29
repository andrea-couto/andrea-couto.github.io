import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css'

const SocialFollow = () => {
  return (
    <div>
      <p className="social-container">
        <a
        href="https://www.linkedin.com/in/andrea-couto-0154835a/"
        className="linkedin social"
        >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
        href="https://github.com/andrea-couto"
        className="github social"
        >
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/ios_andyx" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
  )
}

export default SocialFollow
