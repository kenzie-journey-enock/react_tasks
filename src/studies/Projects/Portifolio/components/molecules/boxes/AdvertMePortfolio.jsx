import PropTypes from 'prop-types'
import parse from "html-react-parser";

import style from './style.module.css'

import AvatarPortfolio from '../../atoms/AvatarPortfolio';
import TitlePortfolio from '../../atoms/TitlePortfolio'
import TextPortfolio from '../../atoms/TextPortfolio'
import BtnPortifolio from '../../atoms/BtnPortfolio';

export default function AdvertMePortfolio({ data }) {
  return (
    <div className={style.advertme_container}>
      <AvatarPortfolio name={data.name} src='https://picsum.photos/536/354' />
      <TitlePortfolio styleToken='title1' styleMKT={style.underline_effect}>{parse(data.advert_me.call)}</TitlePortfolio>
      <TextPortfolio styleToken='headline'>{data.advert_me.action}</TextPortfolio>
      <div className={style.btn_projects} >
        <BtnPortifolio styleToken='primary'>Projects</BtnPortifolio>
      </div>
      <div className={style.btn_github}>
        <BtnPortifolio styleToken='icon' colorBg='var(--grey-4)' hoverColorBg='var(--grey-0)'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91c.575.101.79-.244.79-.546c0-.273-.014-1.178-.014-2.142c-2.889.532-3.636-.704-3.866-1.35c-.13-.331-.69-1.352-1.18-1.625c-.402-.216-.977-.748-.014-.762c.906-.014 1.553.834 1.769 1.179c1.035 1.74 2.688 1.25 3.349.948c.1-.747.402-1.25.733-1.538c-2.559-.287-5.232-1.279-5.232-5.678c0-1.25.445-2.285 1.178-3.09c-.115-.288-.517-1.467.115-3.048c0 0 .963-.302 3.163 1.179c.92-.259 1.897-.388 2.875-.388c.977 0 1.955.13 2.875.388c2.2-1.495 3.162-1.179 3.162-1.179c.633 1.581.23 2.76.115 3.048c.733.805 1.179 1.825 1.179 3.09c0 4.413-2.688 5.39-5.247 5.678c.417.36.776 1.05.776 2.128c0 1.538-.014 2.774-.014 3.162c0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25C24 5.896 18.854.75 12.5.75" /></svg>
        </BtnPortifolio>
      </div>
      <div className={style.icons_hard_skills}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M1 1v30h30V1zm16.326 23.398c0 2.92-1.712 4.248-4.21 4.248c-2.254 0-3.563-1.168-4.228-2.576l2.296-1.39c.443.776.846 1.44 1.812 1.44c.926 0 1.51-.353 1.51-1.77v-9.58h2.82zm6.666 4.248c-2.618 0-4.31-1.248-5.135-2.88l2.295-1.327c.604.978 1.39 1.71 2.78 1.71c1.167 0 1.903-.584 1.903-1.396c0-.966-.766-1.31-2.054-1.865l-.7-.31c-2.034-.865-3.383-1.953-3.383-4.25c0-2.113 1.604-3.725 4.128-3.725c1.792 0 3.08.625 4.008 2.254l-2.19 1.405c-.48-.86-1.006-1.21-1.812-1.21c-.824 0-1.352.522-1.352 1.21c0 .852.52 1.188 1.73 1.71l.703.31c2.397 1.02 3.747 2.07 3.747 4.43c.007 2.544-1.986 3.93-4.665 3.93z" /></svg>
      </div>
    </div>
  )
}

AdvertMePortfolio.propTypes = {
  data: PropTypes.object
}