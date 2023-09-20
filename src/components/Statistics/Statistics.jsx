import { render } from "@testing-library/react";
import React from "react";

export class Statistics extends React.Component {

	constructor(props) {
		super()
		this.state = {
			good: 0,
			neutral: 0,
			bad: 0,
			total: this.countTotalFeedback(),
			percentage: 0
		}
		this.increment = this.increment.bind(this);
		this.countTotalFeedback = this.countTotalFeedback.bind(this);
		this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
	}
	countTotalFeedback() {
		this.setState({ total: this.state.good + this.state.neutral + this.state.bad })
	}

	countPositiveFeedbackPercentage() {
		this.setState({ percentage: (this.state.good / this.state.total) * 100 })
	}

	increment(e) {
		if (e.target.innerText === "Good") {
			this.setState({
				good: this.state.good + 1,
			})
		}
		if (
			e.target.innerText === "Neutral") {
			this.setState({
				neutral: this.state.neutral + 1,
			})
		}
		if (e.target.innerText === "Bad") {
			this.setState({
				bad: this.state.bad + 1,
			})
		}

		this.countPositiveFeedbackPercentage()
		console.dir(this.state);

	}


	render() {
		return (
			<div>
				<h1>Please leave feedback</h1>
				<div onClick={this.increment}>
					<button>Good</button>
					<button>Neutral</button>
					<button>Bad</button>
				</div>
				<h2>Statistics</h2>
				<p>Good: {this.state.good} </p>
				<p>Neutral: {this.state.neutral}</p>
				<p>Bad: {this.state.bad}</p>
				<p>Total: {this.state.total}</p>
				<p>Positive feedback: {this.state.percentage}%</p>
			</div>
		)
	}
}

export default Statistics