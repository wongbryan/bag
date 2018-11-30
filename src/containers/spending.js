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
      <div>
        <SpendingContainer className="landing-container">
          {this.state.spending.map(transaction => {
            return (
              <Row
                key={transaction.left}
                background="lightblue-bg"
                fixed
                transaction
                right={transaction.right}
              >
                {transaction.left}
              </Row>
            );
          })}
        </SpendingContainer>
        <div id="detailsModal" class="modal">
          <div className="modal-content">
            <span className="close" id="closeModal">
              &times;
            </span>
            <h2>Transaction details</h2>
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
)(Spending);
