import Firebase from "./firebase";

function User(database, parent_domain) {
  const DOMAIN = parent_domain + "users/";

  function create(username, password) {
    console.log(username, password);
    database.ref(DOMAIN + username).set(
      {
        username: username,
        password: password
      },
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }

  // returns a promise
  function validate(username, password) {
    const userQuery = database.ref("users/" + username);
    const isValid = userQuery.once("value").then(function(snapshot) {
      if (!snapshot || !snapshot.val()) {
        return false;
      }
      return snapshot.val().password === password;
    });
    return isValid;
  }

  function addGoal(username, goal) {
    Firebase.ref("goals/" + username).push(goal, error => {
      if (error) {
        alert(
          "Something went when adding to firebase",
          JSON.stringify(error, null, 2)
        );
      }
    });
  }

  function getGoals(username) {
    const goals = [];
    return new Promise((resolve, reject) => {
      Firebase.ref("goals/" + username).once("value", snapshot => {
        snapshot.forEach(s => {
          goals.push(s.val());
        });
        resolve(goals);
      });
    });
  }

  function updateBalances(username, balances) {
    Firebase.ref("balances/" + username).set(balances, error => {
      if (error) {
        alert(
          "Something went when adding to firebase",
          JSON.stringify(error, null, 2)
        );
      }
    });
  }

  function getBalances(username) {
    return new Promise((resolve, reject) => {
      const balances = {};
      Firebase.ref("balances/" + username).once("value", snapshot => {
        snapshot.forEach(s => {
          balances[s.key] = s.val();
        });
        resolve(balances);
      });
    });
  }

  function updateBudget(username, budget) {
    Firebase.ref("budget/" + username).set(budget, error => {
      if (error) {
        alert(
          "Something went when adding to firebase",
          JSON.stringify(error, null, 2)
        );
      }
    });
  }

  function getBudget(username) {
    return new Promise((resolve, reject) => {
      const budget = {};
      Firebase.ref("budget/" + username).once("value", snapshot => {
        snapshot.forEach(s => {
          budget[s.key] = s.val();
        });
        resolve(budget);
      });
    });
  }

  function updateSpendingHistory(username, spendingHistory) {
    Firebase.ref("spendingHistory/" + username).set(spendingHistory, error => {
      if (error) {
        alert(
          "Something went when adding to firebase",
          JSON.stringify(error, null, 2)
        );
      }
    });
  }

  function getSpendingHistory(username) {
    return new Promise((resolve, reject) => {
      const spending = {};
      Firebase.ref("spendingHistory/" + username).once("value", snapshot => {
        snapshot.forEach(s => {
          spending[s.key] = s.val();
        });
        resolve(spending);
      });
    });
  }

  function updateDetails(username, accountNumber, routingNumber) {
    Firebase.ref("accountNumber/" + username).set(accountNumber, error => {
      if (error) {
        alert(
          "Something went when adding to firebase",
          JSON.stringify(error, null, 2)
        );
      }
    });
    Firebase.ref("routingNumber/" + username).set(routingNumber, error => {
      if (error) {
        alert(
          "Something went when adding to firebase",
          JSON.stringify(error, null, 2)
        );
      }
    });
  }

  function getAccountNumber(username) {
    return new Promise((resolve, reject) => {
      let accountNumber = "";
      Firebase.ref("accountNumber/" + username).once("value", snapshot => {
        accountNumber = snapshot.val();
        resolve(accountNumber);
      });
    });
  }

  function getRoutingNumber(username) {
    return new Promise((resolve, reject) => {
      let routingNumber = "";
      Firebase.ref("routingNumber/" + username).once("value", snapshot => {
        routingNumber = snapshot.val();
        resolve(routingNumber);
      });
    });
  }

  return {
    create,
    validate,
    updateBalances,
    getBalances,
    updateBudget,
    getBudget,
    updateSpendingHistory,
    getSpendingHistory,
    updateDetails,
    getAccountNumber,
    getRoutingNumber,
    addGoal,
    getGoals
  };
}

function FirebaseModule() {
  const user = User(Firebase, "");

  return {
    user
  };
}

export default FirebaseModule;
