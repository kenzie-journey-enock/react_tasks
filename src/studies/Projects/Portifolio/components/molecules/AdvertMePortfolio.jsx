import PropTypes from 'prop-types'
import parse from "html-react-parser";

import TextPortfolio from '../atoms/TextPortfolio'
import style from './style.module.css'

import TitlePortfolio from '../atoms/TitlePortfolio'
import BtnPortifolio from '../atoms/BtnPortfolio';

export default function AdvertMePortfolio({data}){
  return (
    <div className={style.advertme_container}>
      <TitlePortfolio styleToken='title1'>{parse(data.advert_me.call)}</TitlePortfolio>
      <TextPortfolio styleToken='headline'>{data.advert_me.action}</TextPortfolio>
      <div className={style.btn_projects}>
        <BtnPortifolio styleToken='primary'>Projects</BtnPortifolio>
      </div>
    </div>
  )
}

AdvertMePortfolio.propTypes = {
  data: PropTypes.object
}