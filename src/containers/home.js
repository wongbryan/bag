import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
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
    this.logout = this.logout.bind(this);
    this.generateAccountNumber = this.generateAccountNumber.bind(this);
    this.generateRoutingNumber = this.generateRoutingNumber.bind(this);
  }

  generateRoutingNumber() {
    return Math.random()
      .toString()
      .slice(2, 11);
  }

  generateAccountNumber() {
    return Math.random()
      .toString()
      .slice(2, 15);
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
        const inc = Math.random() * percent + 20;
        percent = inc < 0 ? 0 : percent - inc;
        percentages[key] = inc;
      });
      return percentages;
    })();
    const locations = [
      "Gushi Korean Barbeque - Westwood, CA",
      "Subway - Westwood, CA",
      "Urban Outfitters - Westwood, CA",
      "Meatlove - Westwood, CA",
      "Whole Foods - Westwood, CA",
      "Flame Broiler - Westwood, CA",
      "The Spot - Berkeley, CA",
      "Kingpin Donuts - Berkeley, CA",
      "Thai Noodle - Berkeley, CA",
      "Asha Tea House - Berkeley, CA",
      "Waba Grill - Walnut, CA",
      "Bangkok BBQ - Walnut, CA",
      "Bed Bath and Beyond - Walnut, CA",
      "Cluck2Go - Walnut, CA",
      "Man Chan Cuisine - Walnut, CA",
      "Panda Express - Walnut, CA",
      "Berkeley Bowl - Berkeley, CA",
      "Steve's KBBQ - Berkeley, CA",
      "Shandong Noodle - Oakland, CA",
      "Dessert Time - Oakland, CA",
      "YuGiOh Cafe - Oakland, CA",
      "Hello Kitty cafe - Oakland, CA",
      "Starbucks - Oakland, CA",
      "Class 302 - Rowland Heights, CA",
      "Yoshinoya - Rowland Heights, CA",
      "Tea Bar - Rowland Heights, CA",
      "Tastea - Rowland Heights, CA",
      "Burger King - Rowland Heights, CA",
      "McDonalds - Rowland Heights, CA"
    ];
    const spendingHistory = {};
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(locations.length * Math.random());
      const location = locations[index];
      if (location != undefined) {
        spendingHistory[location] = Math.floor(Math.random() * 50).toFixed(2);
        locations.splice(index);
      }
    }
    FirebaseModule().user.updateSpendingHistory(username, spendingHistory);
    FirebaseModule().user.updateBalances(username, balances);
    FirebaseModule().user.updateBudget(username, budget);
    store.dispatch({ type: "updateSpendingHistory", payload: spendingHistory });
    store.dispatch({ type: "updateBalances", payload: balances });
    store.dispatch({ type: "updateBudget", payload: budget });
    this.attemptToNavigate(true);
  }

  generateRoutingNumber() {}

  generateAccountNumber() {}
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
      const spendingHistory = await FirebaseModule().user.getSpendingHistory(
        username
      );
      store.dispatch({
        type: "updateSpendingHistory",
        payload: spendingHistory
      });
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

  logout() {
    store.dispatch({
      type: "logout"
    });
    this.forceUpdate();
  }

  render() {
    const { error } = this.state;
    const { loggedIn } = store.getState().user;
    return loggedIn ? (
      <div>
        <Title className="sentinel-primary black">You are logged in.</Title>
        <Button label="Log out" color="primary" onClick={this.logout} />
      </div>
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
