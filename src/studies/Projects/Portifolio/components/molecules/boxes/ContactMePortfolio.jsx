import style from './style.module.css'
import PropTypes from 'prop-types'
import parse from "html-react-parser"

import TitlePortfolio from '../../atoms/TitlePortfolio'
import TextPortfolio from '../../atoms/TextPortfolio'
import BtnPortifolio from '../../atoms/BtnPortfolio';
import InputEmailPortfolio from '../../atoms/InputEmailPortfolio'

export default function ContactMePortfolio({ data }) {
  return (
    <div className={style.contact_me}>
      <div className={style.info_contact_me}>
        <TitlePortfolio styleToken='title2' styleMKT={style.underline_effect}>{parse(data.call_me.call)}</TitlePortfolio>
        <TextPortfolio styleToken='headline'>{data.call_me.action}</TextPortfolio>
      </div>
      <form>
        <InputEmailPortfolio />
        <BtnPortifolio type='submit' styleToken='primary'>Send Now</BtnPortifolio>
      </form>
    </div>
  )
}

ContactMePortfolio.propTypes = {
  data: PropTypes.object
}
