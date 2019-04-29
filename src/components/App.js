import React from 'react';
import { Container } from 'semantic-ui-react';
import SubmitButton from './SubmitButton';
import Cards from './Cards';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <h2>Decent Human Caculator</h2>
          <br />

          <p>
            Scroll down click add to all the things you did today. When you're
            done, submit you're points and you'll see how well of a human you
            were today.
          </p>
          <br />
          <h4 className="count">Goodie Points: 0 </h4>

          <SubmitButton className="" />

          <br />
          <Cards />
        </Container>
      </div>
    );
  }
}

export default App;
