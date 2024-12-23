import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from './TextPortfolio'

import rocketIcon from '../../assets/rocket_icon.png'

export default function TextHelloPortfolio({ name }) {
  return (
    <>
      <TextPortfolio styleToken='body' moreClassStyled={style.avatar_text}>Hay my name is {name}</TextPortfolio>
      <div className={style.avatar_icon_rocket}>
        <img alt='Icon of a rocket' src={rocketIcon} />
      </div>
    </>

  )
}

TextHelloPortfolio.propTypes = {
  name: PropTypes.string,
}
