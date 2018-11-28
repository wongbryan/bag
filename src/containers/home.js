import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { withRouter } from "react-router-dom";

import FirebaseModule from "../platform";
import { store } from "../reducers/store";

// emotion styles
const Div = styled("div")`
  text-align: center;
`;

const Title = styled("h1")`
  font-size: 1.25rem;
  padding: 5px;
`;

const ApplyDiv = styled("div")`
  font-size: 1rem;
  position: relative;
  padding: 0;
  transform-origin: left;
  display: inline-block;
  margin: 4px;

  &::before {
    content: "";
    height: 1px;
    background-color: $lightgray;
    width: 100%;
    transform: scaleX(0);
    transition: all 0.25s ease;
    position: absolute;
    bottom: 0;
    transform-origin: left;
  }

  &:hover {
    cursor: pointer;
    color: $black;
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: $black;
  }
`;

// end of styles

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      isLoggedIn: false
    };

    this.updatePassword = this.updatePassword.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.login = this.login.bind(this);
    this.createUser = this.createUser.bind(this);
    this.attemptToNavigate = this.attemptToNavigate.bind(this);
  }

  createUser() {
    const { username, password } = this.state;
    FirebaseModule().user.create(username, password);
    store.dispatch({
      type: "login",
      payload: {
        username
      }
    });
    // initialize dummy account balances
    const balances = {
      checkings: Math.random() * 1000 + 50,
      savings: Math.random() * 10000 + 200,
      investments: Math.random() * 5000
    };
    const budget = (() => {
      let percent = 100;
      const percentages = {};
      const categories = ["food", "gas", "travel", "clothing"];
      categories.forEach(key => {
        const inc = Math.random() * percent;
        percent = inc < 0 ? 0 : percent - inc;
        percentages[key] = inc;
      });
      return percentages;
    })();
    FirebaseModule().user.updateBalances(username, balances);
    FirebaseModule().user.updateBudget(username, budget);
    store.dispatch({ type: "updateBalances", payload: balances });
    store.dispatch({ type: "updateBudget", payload: budget });
    this.attemptToNavigate(true);
  }

  async login() {
    const { username, password } = this.state;
    const isValid = await FirebaseModule().user.validate(username, password);

    if (!isValid) {
      this.setState({
        error: "User not found"
      });
    }

    this.setState({
      isLoggedIn: isValid
    });

    if (isValid) {
      const budget = await FirebaseModule().user.getBudget(username);
      const balances = await FirebaseModule().user.getBalances(username);
      store.dispatch({
        type: "updateBalances",
        payload: balances
      });
      store.dispatch({
        type: "updateBudget",
        payload: budget
      });
      store.dispatch({
        type: "login",
        payload: {
          username
        }
      });
    }

    this.attemptToNavigate(isValid);

    return isValid;
  }

  attemptToNavigate(isValid) {
    if (isValid) {
      this.props.history.push("/budget");
    }
  }

  updateUsername(username) {
    this.setState({
      username: username
    });
  }

  updatePassword(password) {
    this.setState({
      password: password
    });
  }

  render() {
    const { error } = this.state;
    const { loggedIn } = store.getState().user;
    return loggedIn ? (
      <Title className="sentinel-primary black">You are logged in.</Title>
    ) : (
      <Div className="landing-container">
        <Title className="sentinel-primary black">
          Sign into your banking account.
        </Title>
        <Input value="username" onChange={this.updateUsername} />
        <Input value="password" onChange={this.updatePassword} />
        <ApplyDiv
          className="untitled-primary gray navbar-link"
          onClick={this.login}
        >
          Sign In
        </ApplyDiv>
        <ApplyDiv
          className="untitled-primary gray navbar-link"
          onClick={this.createUser}
        >
          Create User
        </ApplyDiv>
        {error && <p>{error}</p>}
      </Div>
    );
  }
}

export default withRouter(Home);