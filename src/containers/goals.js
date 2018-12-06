import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Row from "../components/Row";

import Button from "../components/Button";
import FirebaseModule from "../platform";
import styled from "@emotion/styled";
import { store } from "../reducers/store";

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalAdded: false
    };
    this.addGoal = this.addGoal.bind(this);
  }

  componentDidMount() {}

  addGoal(type) {
    store.dispatch({
      type: "addGoal",
      payload: type
    });
    FirebaseModule().user.addGoal(store.getState().user.username, type);
    this.setState({ goalAdded: true });
  }

  render() {
    return this.state.goalAdded ? (
      <div className="abs-center">Goal added. View it on the budget page.</div>
    ) : (
      <div className="abs-center">
        <Button
          color="primary"
          label="Save on clothing"
          style={{ color: "black" }}
          onClick={() => this.addGoal("clothing")}
        />
        <Button
          color="primary"
          label="Save on food"
          style={{ color: "black" }}
          onClick={() => this.addGoal("food")}
        />
        <Button
          color="primary"
          label="Save on travel"
          style={{ color: "black" }}
          onClick={() => this.addGoal("travel")}
        />
        <Button
          color="primary"
          label="Save on gas"
          style={{ color: "black" }}
          onClick={() => this.addGoal("gas")}
        />
      </div>
    );
  }
}

export default Goals;
