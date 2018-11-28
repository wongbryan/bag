import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Row from "../components/Row";

import styled from "@emotion/styled";

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
    this.setState({
      spending: [
        {
          left: "Gushi Korean Barbeque - Westwood, CA",
          right: "$10.00"
        },
        {
          left: "Subway - Westwood, CA",
          right: "$15.99"
        },
        {
          left: "Urban Outfitters - Westwood, CA",
          right: "$3.00"
        },
        {
          left: "Meatlove - Westwood, CA",
          right: "$2.73"
        },
        {
          left: "Whole Foods - Westwood, CA",
          right: "$1287.01"
        }
      ]
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
