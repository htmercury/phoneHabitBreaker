import React from 'react';
import s from '../styles/community.style';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: this.props.item.title,
      body: this.props.item.body
    }
  }

  componentWillMount() {
  }

  render() {
    return(
      <ListItem
        leftAvatar={<Avatar src="https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang2.jpg?raw=true" />}
        primaryText={this.state.title}
        secondaryText={
        <p>
          <span style={{color: darkBlack}}>Brendan Lim</span> --
          {this.state.body}
        </p>
        }
        secondaryTextLines={2}
        primaryTogglesNestedList={true}
        nestedItems={[

        ]}
      />
    )
  }
}
