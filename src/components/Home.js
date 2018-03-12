import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';
// data visualizer
import CircularProgress from 'material-ui/CircularProgress';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// dialog
import Dialog from 'material-ui/Dialog';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
      diff: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      started: false,
      submitText: 'start!',
      open: false
    };
    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleHourChange(event, value) {
    this.setState({hours: value});
  }

  handleMinuteChange(event, value) {
    this.setState({minutes: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.componentWillUnmount();
    let change = (this.state.hours * 60 + this.state.minutes);
    if (this.state.submitText == 'start!' && change != 0) {
      this.setState({started: true, submitText: 'give up!'});
      this.componentDidMount();
      change = 1 / change;
      change *= 100;
      this.setState({diff: change});
    }
    else {
      this.setState({started: false, submitText: 'start!', diff: 0, completed: 0});
      this.componentDidMount();
    }
  }

  handleOpen = () => {
    if (this.state.submitText == 'unlock!')
      this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(0), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100, minutes: 0, submitText: 'unlock!'});
      this.handleOpen();
    } else {
      this.setState({completed});
      let diff = this.state.diff;
      this.setState({completed});
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
      if (this.state.minutes > 0 && completed != 0)
        this.setState({minutes: this.state.minutes - 1});
      else if (this.state.hours > 0 && this.state.minutes == 0 && completed != 0)
        this.setState({hours: this.state.hours - 1, minutes: 60});
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Confirm"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div style={s.home}>
        <h1 style={s.title}>No distractions for:</h1>
        <h1 style={s.subtitle}>{this.state.hours} hr(s) {this.state.minutes} min(s)</h1>
        <div style={s.circular}>
          <CircularProgress
            mode="determinate"
            value={this.state.completed}
            size={250}
            thickness={12}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1>Hours:</h1>
          <Slider
          value={this.state.hours}
          onChange={this.handleHourChange}
          disabled={this.state.started}
          min={0}
          max={6}
          step={1}
          />
          <h1>Minutes:</h1>
          <Slider
          value={this.state.minutes}
          onChange={this.handleMinuteChange}
          disabled={this.state.started}
          min={0}
          max={60}
          step={1}
          />
          <RaisedButton style={s.circular}
            label={this.state.submitText}
            type="submit" />
        </form>
        <Dialog
        title="Congratulations"
        actions={actions}
        modal={false}
        contentStyle={s.dialog}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        You have completed this time session!
      </Dialog>
      </div>
    );
  }
}
