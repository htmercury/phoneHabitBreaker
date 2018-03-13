import React from 'react';
import s from '../styles/community.style';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Thread from './Thread';

export default class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      titleInput: '',
      bodyInput: '',
      commentInput: '',
      titleError: '',
      bodyError: '',
      threadCount: 3,
      // a thread consists of {title:[], body:[], id:[], avatar:[]}
      threadArray: [],
      commentCount: 0,
      commentArray: []
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  commentNow = () => {
    console.log('tap');
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handlePost = () => {
    if (this.state.titleInput != "" && this.state.bodyInput != "") {
      let thread = {
        title: this.state.titleInput,
        body: this.state.bodyInput,
        id: this.state.threadCount,
        avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang6.jpg?raw=true',
        name: 'Hang Wu',
        comments: ['']
      };
      let currThreadArray = this.state.threadArray;
      currThreadArray.push(thread);
      this.setState({open: false, titleInput: '', bodyInput: '', threadCount: this.state.threadCount+100, threadArray: currThreadArray});
    }
    else if (this.state.titleInput == "")
      this.setState({titleError: 'This field is required'})
    else if (this.state.bodyInput == "")
      this.setState({bodyError: 'This field is required'})
    else {
      this.setState({open: false, titleInput: '', bodyInput: ''});
    }
  }

  handleTitle(event) {
    this.setState({titleInput: event.target.value});
  }

  handleBody(event) {
    this.setState({bodyInput: event.target.value});
  }

  _renderThreads() {
    return this.state.threadArray.map(el => <Thread item={el} key={el.id} />);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handlePost}
      />,
    ];

    return (
      <div>
        <h1 style={s.title}>Community</h1>
        <RaisedButton
          style={s.startThread}
          label="Start a thread"
          onClick={this.handleOpen}
          icon={<FontIcon className="fas fa-pencil-alt" />}
        />
        <Divider />
        <Dialog
          title="What's on your mind?"
          actions={actions}
          modal={false}
          contentStyle={s.dialog}
          titleStyle={{textAlign: 'center'}}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Your thread:
          <form>
            <TextField onSubmit={this.handlePost}
              floatingLabelText="Title"
              value={this.state.titleInput}
              onChange={this.handleTitle}
              fullWidth={true}
              multiLine={true}
              errorText={this.state.titleError}
              rows={1}
            />
            <TextField
              floatingLabelText="Body"
              value={this.state.bodyInput}
              onChange={this.handleBody}
              fullWidth={true}
              multiLine={true}
              errorText={this.state.bodyError}
              rows={2}
            />
          </form>
        </Dialog>
        <div style={s.container}>
        <Subheader>Threads</Subheader>
          <List>
            <Thread
            item={{
              title: 'Best tip i have so far',
              body: 'Pro tip: sleep enough.',
              id: 0,
              avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang2.jpg?raw=true',
              name: 'Brendan Lim',
              comments: [{comment: 'yeah boi', id: 100, avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang3.jpg?raw=true', name: 'Kevin Zheng'}]
            }}
            />
            <Thread
            item={{
              title: 'What I accomplished',
              body: 'I was able to not procrastinate today!',
              id: 1000,
              avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang1.jpg?raw=true',
              name: 'Huaiyu Wang',
              comments: [
                {comment: 'Amazing dude, keep up the good work mah man.', id: 200, avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang3.jpg?raw=true', name: 'Kevin Zheng'},
                {comment: 'Good Job', id: 300, avatar: 'https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang2.jpg?raw=true', name: 'Brendan Lim'}
              ]
            }}
            />
                  {this._renderThreads()}
            </List>
        </div>
      </div>
    );
  }
}
