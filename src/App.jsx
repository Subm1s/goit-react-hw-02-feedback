import { Component } from "react";
import "./App.css";
import FeedbackOptions from "./component/FeedbackOptions";
import Section from "./component/Section";
import Statistic from "./component/Statistic";
import Notification from "./component/Notification";

class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  handleIncrement = (e) => {
    const name = e.target.name;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    let totalFeedback = good + bad + neutral;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100);
    return positivePercentage;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <main>
        <Section title = "Please leave feedback">
        <FeedbackOptions 
          handleIncrement = {this.handleIncrement}
        />
        </Section>
        <Section title = "Statistic">
          {this.countTotalFeedback() < 1 ? <Notification message="There is no feedback" /> : 
        <Statistic 
        good = {good}
        bad = {bad}
        neutral = {neutral}
        totalFeedback = {this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}
        />
        }
        </Section>

      </main>
    );
  }
}

export default App;
