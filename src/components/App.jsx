import {Component} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from './Section/Section';
import Notification from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  }

  countPositiveFeedbackPercentage = () => (Math.round(this.state.good / this.countTotalFeedback() * 100));

  onFeedbackHandle = (e) => {
    const stateName = e.currentTarget.name;
    this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
  }
  btns = () => Object.keys(this.state);
  
  render() {
    const {good, neutral, bad} = this.state
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.btns()} onLeaveFeedback={this.onFeedbackHandle}/>
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage} /> :
              <Notification message="There is no feedback"/> }
        </Section>
      </div>
    );
  }
}