import React from 'react';
import Interactive from 'react-interactive';
import s from '../styles/usage.style';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {LineChart} from 'react-easy-chart';
import MonthlyData from '../data/monthlyUsage.csv';
import DailyData from '../data/weekly.csv';


export default class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      month: 1,
      monthlyInfo: '',
      dailyInfo: '',
      displayDaily: '',
      displayMonthly: ''
    }
    //this.updateMonth = this.updateMonth.bind(this);
  }

  componentWillMount() {
    let monthly = MonthlyData.filter(entry => entry.x.substring(0, 2) == 1);
    let daily = DailyData.slice(0,23);
    this.setState({monthlyInfo: MonthlyData});
    this.setState({dailyInfo: DailyData});
    this.setState({displayMonthly: monthly});
    this.setState({displayDaily: daily});
  }

  updateMonth(month) {
    let monthly = MonthlyData.filter(entry => entry.x.substring(0, 2) == month);
    this.setState({displayMonthly: monthly});
  }

  updateDay(day) {
    let daily = DailyData.slice(day * 23 , (day + 1) * 23 );
    this.setState({displayDaily: daily});
  }

  handleDailyChange = (event, index, value) => {
    this.setState({day:value});
    this.updateDay(value);
  }

  handleMonthlyChange = (event, index, value) => {
    this.setState({month:value});
    this.updateMonth(value);
  }

  render() {
    const repoReadmeLink = text => (
      <Interactive
        as="a"
        {...s.link}
        href="https://github.com/rafrex/spa-github-pages#readme"
      >{text}</Interactive>
    );


    return (
      <div>
        <h1 style={s.title}>Daily Cellphone Usage</h1>
        <div>
          <DropDownMenu value={this.state.day} onChange={this.handleDailyChange}>
            <MenuItem value={0} primaryText="Monday" />
            <MenuItem value={1} primaryText="Tuesday" />
            <MenuItem value={2} primaryText="Wednesday" />
            <MenuItem value={3} primaryText="Thursday" />
            <MenuItem value={4} primaryText="Friday" />
            <MenuItem value={5} primaryText="Saturday" />
            <MenuItem value={6} primaryText="Sunday" />
          </DropDownMenu>
        </div>
        <LineChart
          axes
          height={220}
          width={380}
          xTicks={6}
          yTicks={4}
          xType={'time'}
          datePattern={'%u %H'}
          interpolate={'cardinal'}
          data={
            [
              this.state.displayDaily
            ]
          }
        />
        <div>
          <DropDownMenu value={this.state.month} onChange={this.handleMonthlyChange}>
            <MenuItem value={1} primaryText="January" />
            <MenuItem value={2} primaryText="Februrary" />
            <MenuItem value={3} primaryText="March" />
            <MenuItem value={4} primaryText="April" />
            <MenuItem value={5} primaryText="May" />
            <MenuItem value={6} primaryText="June" />
            <MenuItem value={7} primaryText="July" />
          </DropDownMenu>
        </div>
        <LineChart
          axes
          height={220}
          width={380}
          xTicks={6}
          yTicks={4}
          xType={'time'}
          datePattern={'%m/%d/%y'}
          interpolate={'cardinal'}
          data={
            [
              this.state.displayMonthly
            ]
          }
        />
      </div>
    );
  }
}
