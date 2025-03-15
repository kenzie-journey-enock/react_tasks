import styled from "styled-components";


export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 14vh;

  @media (min-width: 768px) {
    height: 10vh;
  }

  @media (min-width: 1840px) {
    height: 14vh;
  }
`;


export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 14vh;
  background-color: var(--grey-3);
  margin-top: 1rem;
  padding-top: 1rem;
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  /* background-color: aquamarine; */

  @media (min-width: 768px) {
    flex-direction: row;
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

export const ContainerOrganize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: aquamarine; */
  width: 90%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-right: 1rem;
  }

`

export const FinForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1.5rem;
  margin: 1rem 0rem 2rem 0rem;
  border: 1px solid var(--grey-matte);

  @media (min-width: 768px) {
    /* width: 100%; */
    height: 70%;
    margin: 0rem 0 1rem 0;
  }

  @media (min-width: 1024px) {
    /* width: 30%; */
  }

  @media (min-width: 1840px) {
    height: 60%;
  }
`;

export const FinTotal = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 2rem;
  /* margin: 1rem 0 0 0; */
  /* margin: 2rem 1rem 1rem 1rem; */
  border: 1px solid var(--grey-matte);

  @media (min-width: 768px) {
    /* width: 40%; */
    height: 20%;
    margin: 0;
  }

  @media (min-width: 1024px) {
    /* width: 30%; */
  }

  @media (min-width: 1840px) {
  }
`;

export const FinSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem;
  /* background-color: blueviolet; */

  @media (min-width: 768px) {
    width: 50%;
    /* height: 80%; */
    /* margin: 2rem 0 0 0;: */
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const FinContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100rem; */
  margin: 1rem;
  max-height: 25rem;
  overflow-y: auto;
  /* background-color: burlywood; */

  @media (min-width: 768px) {
    /* width: 50%; */
    height: 80%;
    margin: 2rem 0 0 0;
  }

  @media (min-width: 1024px) {
    /* width: 60%; */
  }

`;

export const FinTextItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const FinDeleteItemsBtn = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: aquamarine; */
  @media (min-width: 768px) {
    width: 20%;
    align-items: center;
    span {
      margin-bottom: 0.5rem;
    }
    
    margin-right: 1rem;
    
    
  }
`

export const FinItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-left: 5px solid
    ${({ type }) => (type === "Won" ? "var(--color-secondary)" : "var(--grey-2)")};

  margin-bottom: 1rem;
  border-radius: 6px;
  padding: 1rem 0 1rem 1rem;
  p, span {
    margin-top: 0.5rem;
  }
  
  @media (min-width: 888px) {
    flex-direction: row;
  }
`;