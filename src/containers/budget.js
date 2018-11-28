import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { PieChart } from "react-easy-chart";
import { store } from "../reducers/store";

const Circle = styled("div")`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  margin: 24px;
`;

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const linkStyling = {
      textDecoration: "none",
      display: "block",
      textAlign: "center"
    };
    const data = store.getState().budget;
    return (
      <div className="landing-container">
        <h2>Budget</h2>
        <PieChart
          labels={true}
          data={[
            {
              key: "Food " + data.food.toString(),
              value: data.food,
              color: "#FFD154"
            },
            {
              key: "Travel " + data.travel.toString(),
              value: data.travel,
              color: "#FFA987"
            },
            {
              key: "Gas " + data.gas.toString(),
              value: data.gas,
              color: "#87D0F2"
            },
            {
              key: "Clothing " + data.clothing.toString(),
              value: data.clothing,
              color: "#FFD3F2"
            }
          ]}
          styles={{
            ".chart_text": {
              fontSize: "1.25rem",
              color: "white"
            }
          }}
        />
        <p style={{ textAlign: "center" }}>
          Insights: You spent {data.food.toString()} of your monthly income on
          food.
        </p>
        <Link to="/spending" style={linkStyling}>
          <h3 className="navbar-link blue" style={{ textAlign: "center" }}>
            View Transaction History
          </h3>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      navigate: link => push(link)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);
