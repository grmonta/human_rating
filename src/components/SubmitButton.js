import React from 'react';
import { Button } from 'semantic-ui-react';

class SubmitButton extends React.Component {
  render() {
    return (
      <div>
        <Button animated="fade" color="teal">
          <Button.Content visible>Submit Your Goodie Points</Button.Content>
          <Button.Content hidden> Click if you're ready</Button.Content>
        </Button>
      </div>
    );
  }
}

export default SubmitButton;
