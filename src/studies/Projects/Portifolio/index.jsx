// import BtnPortifolio from "./components/atoms/BtnPortfolio";
// import TextPortfolio from "./components/atoms/TextPortfolio";
import { useState } from 'react';

import HeaderPortifolio from "./components/organisms/HeaderPortfolio";

import data from './data_profile.json'

export default function Portifolio(){
  const [dataProfile] = useState(data);

  return (
    <>
      <HeaderPortifolio data={dataProfile} />
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