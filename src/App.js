import React, { Component } from "react";
import Section from "./components/sections";
import FeedbackOptions from "./components/button";
import ListStatistics from "./components/statistic-list";
import Notification from "./components/notification";
import Statistics from "./components/statistics";

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = (e) => {
    const dataName = e.target.dataset.name;
    this.setState((prevState, props) => {
      return {
        [dataName]: prevState[dataName] + 1,
      };
    });
  };

  countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good, total) {
    return Math.floor((good / total) * 100) + "%";
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positive = this.countPositiveFeedbackPercentage(good, total);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        <Statistics title="Statistic">
          {total > 0 ? (
            <ListStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Statistics>
      </Section>
    );
  }
}

export default App;
