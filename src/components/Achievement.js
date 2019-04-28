import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

class Achievement extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Help Somebody In Need? </Card.Header>
          <Card.Meta>14 points</Card.Meta>
          <Image src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=856&q=80 " />
          <Card.Description>
            It's pretty explanatory, did you help somebody who needed it?
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="2">
            <Button color="purple">Add</Button>
            {/* add a disable state if add is not been done for this one */}
            <Button color="grey">Remove</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}

export default Achievement;
