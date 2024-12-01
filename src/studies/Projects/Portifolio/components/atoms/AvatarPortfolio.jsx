import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from './TextPortfolio'

import rocketIcon from '../../assets/rocket_icon.png'

export default function AvatarPortfolio({ name, src }) {

  return (
    <div className={style.avatar_wrapper}>
      <div className={style.avatar_element}>
        <img alt={`Avatar de ${name}`} src={src} />
      </div>
      <TextPortfolio styleToken='body' moreClassStyled={style.avatar_text}>Hay my name is {name}</TextPortfolio>
      <div className={style.avatar_icon_rocket}>
        <img alt={`Icon of a rocket`} src={rocketIcon} />
      </div>
    </div>
  )
}

AvatarPortfolio.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}