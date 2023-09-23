import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./SectionTitle/Section";
import { AppWraper } from "./AppStyle";
import { SiBuymeacoffee } from 'react-icons/si';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.round((good * 100) / this.countTotalFeedback(this.state)) || 0;
  };

  render() {
    return (
      <AppWraper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
            />) :
            <Notification message="There is no feedback" />}
        </Section>
        <SiBuymeacoffee style={{
          fontSize: "180px",
          position: "absolute",
          top: "43%",
          left: "-3%",
          rotate: "30deg"
        }} />
      </AppWraper>
    );
  };
}