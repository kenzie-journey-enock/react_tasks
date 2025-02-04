import { Logo } from './StyleAtoms';
import logo from '../../assets/finok_logo.png';

export default function LogoFinok() {
  return (
    <Logo>
      <img src={logo} alt="Logo Finok" />
    </Logo>
  );
}