import PropTypes from 'prop-types'
import parse from "html-react-parser";

import style from './style.module.css'

import AvatarPortfolio from '../atoms/AvatarPortfolio';
import TitlePortfolio from '../atoms/TitlePortfolio'
import TextPortfolio from '../atoms/TextPortfolio'
import BtnPortifolio from '../atoms/BtnPortfolio';

export default function AdvertMePortfolio({ data }) {
  return (
    <div className={style.advertme_container}>
      <AvatarPortfolio name={data.name} src='https://picsum.photos/536/354' />
      <TitlePortfolio styleToken='title1' styleMKT={style.underline_effect}>{parse(data.advert_me.call)}</TitlePortfolio>
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