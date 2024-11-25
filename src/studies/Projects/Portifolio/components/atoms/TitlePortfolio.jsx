import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from "./TextPortfolio";

export default function TitlePortfolio({ children }) {
  return (
    <TextPortfolio styleToken={'title1'} moreClassStyled={style.title_brand} >{children}</TextPortfolio>
  )
}

TitlePortfolio.propTypes = {
  children: PropTypes.node
}
