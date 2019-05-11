import React from 'react';
import { Button } from 'semantic-ui-react';

class SubmitButton extends React.Component {
  render() {
    return (
      <div>
        <Button animated="fade" color="teal">
          <Button.Content visible>Submit Goodie Points</Button.Content>
          <Button.Content hidden> Click to See Results!</Button.Content>
        </Button>
      </div>
    );
  }
}

export default SubmitButton;
