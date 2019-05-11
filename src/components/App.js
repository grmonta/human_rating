import React from 'react';
import '../App.css';
import { Container } from 'semantic-ui-react';
import SubmitButton from './SubmitButton';

import Cards from './Cards';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <div id="intro-container">
            <h1>Decent Human Caculator</h1>
            <br />
            <div id="intro">
              <p>
                Most of us remember using a certain caculator on the internet to
                see how well we would match with a crush, now let's see how if
                you were a decent human being today.
              </p>
              <p>
                Scroll down click add to all the things you did today. When
                you're done, submit your points and you'll see how well of a
                human you were today. Remember this is a fun gentle reminder to
                be a better person than you were yesterday.
              </p>
            </div>

            <br />
            <h2 className="count"> Points: 0 </h2>

            <SubmitButton className="" />
          </div>
          <br />
          <Cards />
        </Container>
      </div>
    );
  }
}

export default App;
