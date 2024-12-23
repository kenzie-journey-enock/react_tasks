import style from './style.module.css'
import PropTypes from 'prop-types'

import TextPortfolio from "../../atoms/TextPortfolio";

export default function LogoTitlePortfolio({ data }) {
  if (!data || !data.name) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={style.logo_wrapper}>
      <TextPortfolio styleToken='title1' moreClassStyled={style.logo}>{data.name}</TextPortfolio>
      <TextPortfolio styleToken='title1' >code</TextPortfolio>
    </div>
  )
}

LogoTitlePortfolio.propTypes = {
  data: PropTypes.object
}