import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

class Achievement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.header}</Card.Header>

          <Card.Meta>{this.props.meta} points</Card.Meta>
          <Image src={this.props.src} />
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="2">
            <Button id="add-button">Add</Button>
            {/* add a disable state if add is not been done for this one */}
            <Button id="remove-button">Remove</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}

export default Achievement;
