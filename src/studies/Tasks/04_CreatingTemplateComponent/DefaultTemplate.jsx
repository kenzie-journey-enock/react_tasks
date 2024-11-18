import PropTypes from 'react';
import { Header } from '../02_MyFirstComponents/Header';
import { Footer } from '../02_MyFirstComponents/Footer';

export default function DefaultTemplate({children}){
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

DefaultTemplate.propTypes = {
  children: PropTypes.node,
};