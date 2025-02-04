import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 14vh;
  background-color: var(--grey-3);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 10vh;
  }

  @media (min-width: 1840px) {
    height: 14vh;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 74vh;

  @media (min-width: 768px) {
    width: 90%;
    align-items: flex-start;
    margin-top: 2rem;
    height: 74.5vh;
  }

  @media (min-width: 1024px) {
    height: 74vh;
  }

  @media (min-width: 1840px) {
    height: 80vh;
  }
`;

export const FinForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1.5rem;
  margin: 2rem 1rem 1rem 1rem;
  border: 1px solid var(--grey-matte);

  @media (min-width: 768px) {
    width: 40%;
    height: 80%;
    margin: 2rem 0 0 0;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

  @media (min-width: 1840px) {
    height: 60%;
  }
`;

export const FinSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem;

  @media (min-width: 768px) {
    width: 50%;
    height: 80%;
    margin: 2rem 0 0 0;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;
