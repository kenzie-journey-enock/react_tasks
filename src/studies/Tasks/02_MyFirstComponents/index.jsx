import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import PropTypes from 'react';

export default function MyFirstComponents({ children }) {
  return (
    <>
      <Header/>
      <AboutSection />
        {children}
      <Footer/>
    </>
  )
}

MyFirstComponents.propTypes = {
  children: PropTypes.node,
};