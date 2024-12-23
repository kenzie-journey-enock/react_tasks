import style from './style.module.css'
import PropTypes from 'prop-types'

import AvatarIconPortfolio from './AvatarIconPortfolio'
import TextPortfolio from './TextPortfolio'
import IconSocialPortfolio from './IconSocialPortfolio'

export default function AvatarThanksPortfolio({ name, src }) {
  return (
    <div className={style.avatar_thanks}>
      <AvatarIconPortfolio name={name} src={src} />
      <div className={style.avatar_thanks_text}>
        <TextPortfolio styleToken='title3'>Thank You!</TextPortfolio>
        <TextPortfolio styleToken='body'>Follow me on <a href="#contacts" target="_blank" rel="noopener noreferrer"> my social networks </a>and let's talk</TextPortfolio>
      </div>
      <div className={style.avatar_thanks_social_icons}>
        <IconSocialPortfolio name='instagram' />
        <IconSocialPortfolio name='twitch' />
        <IconSocialPortfolio />
      </div>
    </div>
  )
}

AvatarThanksPortfolio.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}
