import React from 'react';
import { connect } from 'react-redux';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import './App.css';
import './css/hover.css';
import './css/hover-min.css';
import Footer from './components/footer';
import Header from './components/header';
import Info from './components/info';
import Intro from './components/intro';
import Skill from './components/skill';
import { Container } from 'react-bootstrap';
import { AnimateOnChange } from 'react-animation';

function App(props) {
  const { ingTabName } = props;
  React.useEffect(() => {

  })
  return (
    <>
      <Header />
      <Container className="content">
        <AnimateOnChange style={{ 'width': '100%' }}>
          {ingTabName === 'intro' &&
            <Intro />
          }
          {ingTabName === 'info' &&
            <Info />
          }
          {ingTabName === 'skill' &&
            <Skill />
          }
        </AnimateOnChange>
      </Container>
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    ingTabName: state.statusReducer.ingTabName,
  }
}
export default connect(mapStateToProps)(App);