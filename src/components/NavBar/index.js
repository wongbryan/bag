import React from "react";
import { Link } from "react-router-dom";
import { store } from "../../reducers/store";
import { connect } from "react-redux";

const linkStyling = { textDecoration: "none", display: "block" };

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="sentinel-primary black navbar-logo">
          <Link className="black" to="/">
            Papyrus
          </Link>
        </div>
        {store.getState().user.loggedIn ? (
          <div className="navbar-links">
            <Link to="/accounts" style={linkStyling}>
              <div className="untitled-primary lightgray navbar-link">
                Account Details
              </div>
            </Link>
            <Link to="/budget" style={linkStyling}>
              <div className="untitled-primary lightgray navbar-link">
                Budget
              </div>
            </Link>
            <Link to="/spending" style={linkStyling}>
              <div className="untitled-primary lightgray navbar-link">
                Transaction History
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(NavBar);
