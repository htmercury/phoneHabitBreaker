import React from 'react';
import Interactive from 'react-interactive';
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

export default class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
        onClick={this.handleClose}
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
          <TextField
            hintText="Enter title text"
            floatingLabelText="Title"
            fullWidth={true}
            multiLine={true}
            rows={1}
          />
          <TextField
            hintText="Enter body text"
            floatingLabelText="Body"
            fullWidth={true}
            multiLine={true}
            rows={2}
          />
        </Dialog>
        <div style={s.container}>
          <List>
                  <Subheader>Threads</Subheader>
                  <ListItem
                    key={1}
                    leftAvatar={<Avatar src="https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang2.jpg?raw=true" />}
                    primaryText="Best tip i have so far"
                    secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Brendan Lim</span> --
                      Pro tip: sleep enough.
                    </p>
                    }
                    secondaryTextLines={2}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                        key={'a'}
                        leftAvatar={<Avatar src="https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang3.jpg?raw=true" />}
                        primaryText="Kevin Zheng"
                        secondaryText="Yeah boi"
                        disabled={true}
                      />,
                      <ListItem
                        key={'comment'}
                        disabled={true}
                        primaryText={
                          <div style={s.commentContainer}>
                            <TextField
                              hintText="Comment"
                              style={s.commentText}
                            />
                            <IconButton iconClassName="fas fa-pencil-alt" />
                          </div>}
                        style={s.comment}
                        open={this.state.open}
                      />,
                    ]}
                  />
                  <ListItem
                    key={2}
                    leftAvatar={<Avatar src="https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang1.jpg?raw=true" />}
                    primaryText="What I accomplished"
                    secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Huaiyu Wang</span> --
                      I was able to not procrastinate today!
                    </p>
                    }
                    secondaryTextLines={2}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                        key={'a'}
                        leftAvatar={<Avatar src="https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang3.jpg?raw=true" />}
                        primaryText="Kevin Zheng"
                        secondaryText="Amazing dude. Keep up the good work mah man."
                        disabled={true}
                      />,
                      <ListItem
                        key={'b'}
                        leftAvatar={<Avatar src="https://github.com/htmercury/phoneHabitBreaker/blob/master/docs/images/touxiang2.jpg?raw=true" />}
                        primaryText="Brendan Lim"
                        secondaryText="Good Job"
                        disabled={true}
                      />,
                      <ListItem
                        key={'comment'}
                        disabled={true}
                        primaryText={
                          <div style={s.commentContainer}>
                            <TextField
                              hintText="Comment"
                              style={s.commentText}
                            />
                            <IconButton iconClassName="fas fa-pencil-alt" />
                          </div>}
                        style={s.comment}
                        open={this.state.open}
                      />,
                    ]}
                  />
            </List>
        </div>
      </div>
    );
  }
}
