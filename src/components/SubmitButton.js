import React from 'react';
import { Button } from 'semantic-ui-react';

class SubmitButton extends React.Component {
  render() {
    return (
      <div>
        <Button animated="fade" color="teal">
          <Button.Content visible>How decent were you?</Button.Content>
          <Button.Content hidden> Here we go!</Button.Content>
        </Button>
      </div>
    );
  }
}

export default SubmitButton;
