import GlobalStyle from './styles/globalStyles';

import {
  FooterFinok,
  HeaderFinok,
  MainFinok
} from "./components/organisms";

export default function Finok() {

  return (
    <>
      <GlobalStyle />
      <HeaderFinok />
      <MainFinok />
      <FooterFinok />
    </>
  )
}
