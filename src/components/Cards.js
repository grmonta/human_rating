import React from 'react';
import { Card } from 'semantic-ui-react';
import Achievement from './Achievement';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card.Group centered>
        <Achievement
          header="Treat Everybody Like You Would Like To Be Treated?"
          meta="10"
          src="https://images.unsplash.com/photo-1450977894548-1b13203524f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
          description="Ahhh...the good old golden rule. Most of us should have learned this in kindergarden either from some variation of some kids song that you probably have stuck inside your head right now. If you didn't learn it in school you may have noticed it's in pretty much every single relgion.  So believer or not, you know this, we all know this, but did you practice it today? "
        />

        <Achievement
          header="Help Somebody In Need?"
          meta="15"
          src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=856&q=80"
          description="This one is pretty self-explanatory, did you help somebody who needed it, in anyway, big or small?"
        />

        <Achievement
          header="Practice Being Grateful?"
          meta="15"
          src="https://images.unsplash.com/photo-1503610594381-aed30c818b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
          description="I mean technically it still counts if you do it right now....just think of 3 things you are grateful for, big or small. Or don't, I mean it's not like it's free or anything and known to make you feel better and lead a more statisfying life.  The decision is totally up to you."
        />

        <Achievement
          header="Help the Planet?"
          meta="20"
          src="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          description="The planet is sort of in a little trouble...just a little bit.  Just do your part and do a little more each day. Did you do your part today? Did you recycle?Did you replace your plastic water bottle habit with a resuable container? There's a millions of little things we can all do. "
        />
      </Card.Group>
    );
  }
}
export default Cards;
