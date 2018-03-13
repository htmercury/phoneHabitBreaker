import React from 'react';
import s from '../styles/community.style';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Comment from './Comment';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: this.props.item.title,
      body: this.props.item.body,
      avatar: this.props.item.avatar,
      name: this.props.item.name,
      // a comment consists of {'content', 'id'}
      commentArray: this.props.item.comments,
      commentInput: '',
      commentError: '',
      commentCount: this.props.item.id
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({commentInput: event.target.value});
  }

  commentNow = () => {
    if (this.state.commentInput == "") {
      this.setState({commentError: 'This field is required'});
    }
    else {
      let currCommentArray = this.state.commentArray;
      let comment = {
        comment: this.state.commentInput,
        id: this.state.commentCount,
        avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang6.jpg?raw=true',
        name: 'Hang Wu'
      };
      currCommentArray.push(comment);
      this.setState({commentInput: '', commentError: '', commentCount: this.state.commentCount+3, commentArray: currCommentArray});
    }
  }

  _renderComments() {
    return this.state.commentArray.map(el => <Comment item={el} key={el.id} />,);
  }


  render() {
    return(
      <ListItem
        leftAvatar={<Avatar src={this.state.avatar} />}
        primaryText={this.state.title}
        secondaryText={
        <p>
          <span style={{color: darkBlack}}>{this.state.name}</span> --
          {this.state.body}
        </p>
        }
        secondaryTextLines={2}
        primaryTogglesNestedList={true}
        nestedItems={[
          <div>
            {this._renderComments()}
          </div>,
          <ListItem
            key={'comment'}
            disabled={true}
            primaryText={
              <div style={s.commentContainer}>
                <TextField
                  hintText="Comment"
                  value={this.state.commentInput}
                  errorText={this.state.commentError}
                  onChange={this.handleChange}
                  style={s.commentText}
                />
                <IconButton iconClassName="fas fa-pencil-alt" onClick={this.commentNow}/>
              </div>}
            style={s.comment}
          />
        ]}
      />
    )
  }
}
