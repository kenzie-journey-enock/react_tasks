import styled from "styled-components";

export const HeaderNockBurguerStyle = styled.header`

  background-color: var(--grey-100);

  display: flex;
  justify-content: center;

  height: 13%;

`

export const MainNockBurguerStyle = styled.main`
  /* background-color: blue; */
  width: 100%;
  height: 80%;
`

export const ListProductsStyle = styled.ul`
  display: flex;
  height: 100%;
  margin: 1rem;
  overflow-x: auto;
  gap: 1rem;

  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: unset;
    overflow-y: scroll;
    justify-content: center;
    margin: 0;
    padding: 2rem;
  }

`

export const FooterNockBurguerStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-100);
  text-align: center;
  font-size: 1rem;
  height: 7%;

  padding: 0 2rem;


  p {
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--grey-3);
  }

  @media (min-width: 768px) {
    padding: 0 5rem;
  }

 

`

export const ContactsLinkNockBurguerStyle = styled.div`
  display: flex;

  a {
    color: var(--color-primary-2);
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.3s ease;
    font-size: 0.8rem;

    &:hover {
      color: var(--color-primary);
    }
  }

`