import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --color-primary: #27AE60;
    --color-primary-2: #EB5757;
    --color-secondary: #03B898;
    --color-secondary-50: #E5F8F0;
    --color-tertiary: #FF577F;
    --color-tertiary-50: #311E75;
    --color-quaternary: #506CCF;
    --color-quaternary-50: #E5E9F8;

    --light: #FFFFFF;

    --grey-0: #F5F5F5;
    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #828282;
    --grey-4: #212529;

    --grey-100: #E0E0E0;

    --grey-matte: #cbcccd;

    --social-media-instagram: #CF50AC;
    --social-media-linkedin: #0E76A8;
    --social-media-facebook: #364FC7;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 800;
    line-height: 28px;
    color: var(--grey-4);
    max-height: 100vh;
    /* background-color: #03B898; */
    overflow-x: hidden;
    
    @media (min-width: 768px) {
      overflow: hidden;
    }
  }

  div#root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* width: 100vw; */
    height: 100vh;
  }

  section {
    /* height: 90vh; */
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--grey-1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-2);
  }
`;

export default GlobalStyle;
