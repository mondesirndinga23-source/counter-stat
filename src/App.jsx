import { Component } from "react";
import Counter from "./components/Counter.jsx";
import Navigation from "./components/Navigation.jsx";
import Profile from "./components/Profile.jsx";
import profileImage from "./assets/profile.jpg";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Mondesir Ndinga",
      bio: "I am a software engineer",
      imgSrc: profileImage,
      profession: "Software Engineer",
    },
    showCounter: true,
    showProfile: true,
  };

  toggleCounter = () => {
    this.setState(({ showCounter }) => ({ showCounter: !showCounter }));
  };

  toggleProfile = () => {
    this.setState(({ showProfile }) => ({ showProfile: !showProfile }));
  };

  render() {
    const { person, showCounter, showProfile } = this.state;

    return (
      <>
        <Navigation />
        <main className="app">
          <h1 className="page-title">Profile React-State</h1>
          <div className="visibility-controls">
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={this.toggleCounter}
              aria-expanded={showCounter}
              aria-controls="counter-section"
            >
              {showCounter ? "Hide Counter" : "Show Counter"}
            </button>
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={this.toggleProfile}
              aria-expanded={showProfile}
              aria-controls="profile-section"
            >
              {showProfile ? "Hide Profile" : "Show Profile"}
            </button>
          </div>

          {showCounter && (
            <div id="counter-section" className="counter-section">
              <Counter />
            </div>
          )}

          {showProfile && (
            <div id="profile-section" className="profile-section">
              <Profile person={person} />
            </div>
          )}
        </main>
      </>
    );
  }
}

export default App;
