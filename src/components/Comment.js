import React from 'react';
import s from '../styles/community.style';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      content: this.props.item.comment,
      avatar: this.props.item.avatar,
      name: this.props.item.name
    }
  }



  render() {
    return(
      <div>
      <ListItem
        style={{marginLeft:'18px'}}
        leftAvatar={<Avatar src={this.state.avatar} />}
        primaryText={this.state.name}
        secondaryText={this.state.content}
        disabled={true}
      />
      </div>
    )
  }
}
