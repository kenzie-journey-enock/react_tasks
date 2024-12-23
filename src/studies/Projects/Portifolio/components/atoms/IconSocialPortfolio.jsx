import style from './style.module.css'
import PropTypes from 'prop-types'

import iconInstagram from '../../assets/instagram_icon.svg'
import iconTwitch from '../../assets/twitch_icon.svg'
import iconLinkedin from '../../assets/linkedin_icon.svg'

const IconInstagram = () => <img src={iconInstagram} alt="Instagram bernardoenock" />
const IconTwitch = () => <img src={iconTwitch} alt="Twitch bernardoenock" />
const IconLinkedin = () => <img src={iconLinkedin} alt="Linkedin bernardoenock" />

export default function IconSocialPortfolio({ name }) {
  console.log(name)
  switch (name) {
    case 'instagram':

      return (
        <div className={style.icon_wrapper}>
          <IconInstagram />
        </div>
      )

    case 'twitch':

      return (
        <div className={style.icon_wrapper}>
          <IconTwitch />
        </div>
      )

    default:
      return (
        <div className={style.icon_wrapper}>
          <IconLinkedin />
        </div>
      )
  }
}

IconSocialPortfolio.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}
