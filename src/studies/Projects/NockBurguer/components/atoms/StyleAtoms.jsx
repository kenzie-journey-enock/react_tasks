import styled from "styled-components";

export const LogoNockBurguerStyle = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 8.2rem;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    letter-spacing: 0%;
  }

  h2 {
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;

    color: var(--color-primary-2);
  }

`

export const BtnAddNockBurguerStyle = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;

  color: var(--light);

  width: 8rem;
  height: 3rem;

  border-radius: 8px;
  border-width: 2px;

  padding: 0 1rem;

  background-color: var(--color-primary);

  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--color-primary-2);
  }
`

export const IconCartNockBurguerStyle = styled.div`
  position: relative;
  width: fit-content;

  cursor: pointer;

  .cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 8px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    z-index: 1;
  }
`;