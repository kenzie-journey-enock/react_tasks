import './styles/globalStyles.css'

import { useState } from 'react';

import data from './data_profile.json'

import {
  HeaderPortifolio,
  MainPortfolio
} from "./components/organisms";

export default function Portifolio() {
  const [dataProfile] = useState(data);

  return (
    <>
      <HeaderPortifolio data={dataProfile} />
      <MainPortfolio data={dataProfile} />
    </>
  )
}



//  {/* <BtnPortifolio styleToken='primary' >TESTANDO BTN</BtnPortifolio>
//       <BtnPortifolio styleToken='secoundary' >TESTANDO BTN 2</BtnPortifolio>

//       <TextPortfolio styleToken='title1' >Title1</TextPortfolio>
//       <TextPortfolio styleToken='title2' >Title2</TextPortfolio>
//       <TextPortfolio styleToken='title3' >Title3</TextPortfolio>
//       <TextPortfolio styleToken='title4' >Title4</TextPortfolio>

//       <TextPortfolio styleToken='headline' >headline</TextPortfolio>
//       <TextPortfolio styleToken='body' >body</TextPortfolio>
//       <TextPortfolio styleToken='caption' >caption</TextPortfolio>
//       <TextPortfolio styleToken='caption_bold' >caption_bold</TextPortfolio>
//       <TextPortfolio styleToken='detail' >detail</TextPortfolio> */}