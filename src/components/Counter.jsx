import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    elapsedSeconds: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState(({ elapsedSeconds }) => ({
        elapsedSeconds: elapsedSeconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count, elapsedSeconds } = this.state;

    return (
      <>
        <section className="counter-card" aria-label="Counter">
          <p className="counter-value" aria-live="polite">
            {count}
          </p>
          <div className="counter-controls">
            <button
              className="counter-button increment-button"
              type="button"
              onClick={this.increment}
              aria-label="Increase counter"
            >
              +
            </button>
            <button
              className="counter-button decrement-button"
              type="button"
              onClick={this.decrement}
              aria-label="Decrease counter"
            >
              -
            </button>
          </div>
          <button className="reset-button" type="button" onClick={this.reset}>
            reset
          </button>
          <p className="counter-message">hello world</p>
        </section>
        <p className="counter-time">Time: {elapsedSeconds} sec...</p>
      </>
    );
  }
}

export default Counter;
