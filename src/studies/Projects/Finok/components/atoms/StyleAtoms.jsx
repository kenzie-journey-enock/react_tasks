import styled from 'styled-components';

export const Logo = styled.div`
  width: 5rem;
  margin-left: 6rem;

  img {
    width: 100%;
  }
`;

export const SocialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;

  a {
    display: flex;
    width: 2rem;
    border-radius: 6px;
    background-color: var(--grey-0);
    padding: 0.3rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--grey-3);
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Btn = styled.button`
  width: 100%;
  padding: 1rem;
  border: 6px;
  background-color: var(--color-primary);
  color: var(--grey-0);
  transition: background-color 0.3s ease;

  font-weight: 900;
  &:hover {
    background-color: var(--grey-3);
  }
`;

export const BtnDelete = styled.button`
  width: 100%;
  background-color: var(--grey-matte);
  color: var(--grey-4);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary-2);
    color: var(--grey-0);
  }
`;

export const InputLabel = styled.div`
  div {
    display: flex;
    flex-direction: column;

    input, select {
      border-radius: 8px;
      border: 2x solid var(--grey-4);
      padding: 0 1rem;
      height: 3rem;
      cursor: pointer;
     
    }
    input:hover, select:hover{

      background-color: var(--grey-1);
    }
  }
`;

export const SelectStyled = styled.select`
  appearance: none;
  outline: none;
  option {
    background: var(--grey-0);
    color: var(--color-quaternary);
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid var(--grey-2);
    transition: all 0.3s ease-in-out;
    outline: none;
  }

  option:hover,
  option:checked {
    background: var(--color-primary);
    color: var(--grey-0);
    border: 2px solid var(--color-primary-2);
  }

`;

export const LabelText = styled.label`
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 22px;
`;

export const TxtTitle1 = styled.h1`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 47.5px;
`;

export const TxtTitle2 = styled.h2`
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 34px;
`;

export const TxtTitle3 = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 30px;
`;

export const TxtTitle4 = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  line-height: 23.4px;
`;

export const TxtHeadline = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 28px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.7s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const TxtBody = styled.p`
  font-weight: 600;
  font-size: 0.87rem;
  line-height: 21px;
`;

export const TxtCaption = styled.span`
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 18px;
`;

export const TxtCaptionBold = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 22px;
`;

export const TxtDetail = styled.span`
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 20px;
  color: var(--grey-0);
`;

export const MePixelArt = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 43%;
    left: 74%;

    img {
      width: 30%;
      height: 60%;
    }
  }
`;

export const SocialCardResponsive = styled(SocialCard)`
  @media (min-width: 768px) {
    justify-content: space-around;
    align-items: center;
    width: 20%;
  }
`;
