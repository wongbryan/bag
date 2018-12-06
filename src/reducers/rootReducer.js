import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  reducers as applications,
  selectors as applicationsSelectors
} from "./applications";

// track actions
const action = (state = {}, action) => action;

const balances = (
  state = { checkings: 0, savings: 0, investment: 0 },
  action
) => {
  switch (action.type) {
    case "updateBalances":
      return action.payload;
    default:
      return state;
  }
};

const user = (state = { loggedIn: false, username: "" }, action) => {
  switch (action.type) {
    case "login":
      return {
        loggedIn: true,
        username: action.payload.username
      };
    case "logout":
      return {
        loggedIn: false,
        username: ""
      };
    default:
      return state;
  }
};

const goals = (state = [], action) => {
  switch (action.type) {
    case "addGoal": {
      const newState = [...state];
      if (newState.indexOf(action.payload) == -1) {
        newState.push(action.payload);
      }
      return newState;
    }
    case "addGoals": {
      const newState = [...state];
      action.payload.forEach(goal => {
        if (newState.indexOf(goal) == -1) {
          newState.push(goal);
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

const budget = (
  state = { food: 25, gas: 25, travel: 25, clothing: 25 },
  action
) => {
  switch (action.type) {
    case "updateBudget":
      return action.payload;
    default:
      return state;
  }
};

const spending = (state = {}, action) => {
  switch (action.type) {
    case "updateSpendingHistory":
      return action.payload;
    default:
      return state;
  }
};

const accountNumber = (state = {}, action) => {
  switch (action.type) {
    case "updateAccountNumber":
      return action.payload;
    default:
      return state;
  }
};

const routingNumber = (state = {}, action) => {
  switch (action.type) {
    case "updateRoutingNumber":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  router: routerReducer, // react-router-redux
  action,
  applications,
  balances,
  user,
  budget,
  goals,
  spending,
  accountNumber,
  routingNumber
});

const actionSelector = state => ({
  getAction: () => state,
  getActionType: () => (state ? state.type : null)
});

export const selectors = {
  action: state => actionSelector(state.actionSelector),
  applications: state => applicationsSelectors(state.applications)
};
