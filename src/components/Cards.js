import React from 'react';
import { Card } from 'semantic-ui-react';
import Achievement from './Achievement';

class Cards extends React.Component {
  render() {
    return (
      <Card.Group centered>
        <Achievement />
        <Achievement />
        <Achievement />
      </Card.Group>
    );
  }
}
export default Cards;
