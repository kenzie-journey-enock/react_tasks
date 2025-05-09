
import LogoNockBurguer from "../atoms/LogoNockBurguer"
import { ContactsLinkNockBurguerStyle, FooterNockBurguerStyle } from "./StyleOrganisms"

export default function FooterNockBurguer() {
  return (
    <FooterNockBurguerStyle>
      <LogoNockBurguer />
      <p>Made by Enock</p>
      <ContactsLinkNockBurguerStyle>
        <a
          href="https://br.linkedin.com/in/bernardoenock"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bernardoenock"
          target="_blank"
        >
          GitHub
        </a>
      </ContactsLinkNockBurguerStyle>
    </FooterNockBurguerStyle>
  )
}
