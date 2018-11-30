import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Row from "../components/Row";
import Input from "../components/Input";
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
      accounts: [],
      accountNumber: "",
      routingNumber: ""
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

    const routingNumber = store.getState().routingNumber;
    console.log(routingNumber);
    const accountNumber = store.getState().accountNumber;
    this.setState({
      accountNumber,
      routingNumber
    });
  }

  render() {
    return (
      <div>
        <AccountsContainer className="landing-container">
          {this.state.accounts.map(transaction => {
            return (
              <Row
                key={transaction.left}
                background="lightblue-bg"
                fixed
                large
                right={transaction.right}
              >
                {transaction.left}
              </Row>
            );
          })}
        </AccountsContainer>
        <div id="accountsModal" className="modal">
          <div className="modal-content">
            <span className="close" id="closeModalAccounts">
              &times;
            </span>
            <h2>Manage your account</h2>
            <h3>Routing Number</h3>
            <p>{this.state.routingNumber}</p>
            <h3>Account Number</h3>
            <p>{this.state.accountNumber}</p>
          </div>
        </div>
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
)(Accounts);
