import styled from "styled-components";

export const ContainerHeaderNockBurguerStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`

export const CardNockBurguerStyle = styled.li`

  display: flex;
  flex-direction:column;
  /* justify-content: space-between; */

  width: 15rem;
  height: 20rem;

  flex-shrink: 0;


  border: 2px solid var(--color-primary);

  transition: all 0.2s ease;

  &:hover {
    width: 15.5rem;
    height: 20.5rem;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--grey-3);
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }
 

`

export const ImgCardProductNockBurguerStyle = styled.div`
  img {
    padding: 0 2rem;
    width: 100%;
    height: 100%;
  }

  height: 45%;

  background-color: var(--grey-0);
`

export const InfoCardProductNockBurguerStyle = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  height: 100%;
  margin: 1rem;
`