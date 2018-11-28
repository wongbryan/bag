import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Row from "../components/Row";

import styled from "@emotion/styled";
import FirebaseModule from "../platform";

import { store } from "../reducers/store";

const AccountsContainer = styled("div")`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }

  componentDidMount() {
    const { username } = store.getState().user;
    FirebaseModule()
      .user.getBalances(username)
      .then(balances => {
        console.log(balances);
        this.setState({
          accounts: [
            {
              left: "Checking",
              right: "$" + balances.checkings.toFixed(2).toString()
            },
            {
              left: "Savings",
              right: "$" + balances.savings.toFixed(2).toString()
            },
            {
              left: "Investment",
              right: "$" + balances.investments.toFixed(2).toString()
            }
          ]
        });
      });
  }

  render() {
    return (
      <AccountsContainer className="landing-container">
        <h2>Accounts</h2>
        {this.state.accounts.map(transaction => {
          return (
            <Row
              key={transaction.left}
              background="lightgray-bg"
              fixed
              large
              right={transaction.right}
            >
              {transaction.left}
            </Row>
          );
        })}
      </AccountsContainer>
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
)(Accounts);
