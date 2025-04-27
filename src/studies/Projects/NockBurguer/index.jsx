import GlobalStyle from './styles/globalStyles';

import {
  FooterNockBurguer,
  HeaderNockBurguer,
  MainNockBurguer
} from "./components/organisms";

export default function NockBurguer() {

  return (
    <>
      <GlobalStyle />
      <HeaderNockBurguer />
      <MainNockBurguer />
      <FooterNockBurguer />
    </>
  )
}
