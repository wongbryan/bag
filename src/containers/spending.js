import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Row from "../components/Row";

import styled from "@emotion/styled";
import { store } from "../reducers/store";

const SpendingContainer = styled("div")`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

class Spending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spending: []
    };
  }

  componentDidMount() {
    const history = store.getState().spending;
    const data = Object.keys(history).map(key => {
      return {
        left: key,
        right: "$" + history[key].toString()
      };
    });
    this.setState({
      spending: data
    });
  }

  render() {
    return (
      <SpendingContainer className="landing-container">
        <h2>Transaction History</h2>
        {this.state.spending.map(transaction => {
          return (
            <Row
              key={transaction.left}
              background="lightgray-bg"
              fixed
              right={transaction.right}
            >
              {transaction.left}
            </Row>
          );
        })}
      </SpendingContainer>
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
)(Spending);
