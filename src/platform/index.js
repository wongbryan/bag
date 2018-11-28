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

  return {
    create,
    validate,
    updateBalances,
    getBalances,
    updateBudget,
    getBudget
  };
}

function FirebaseModule() {
  const user = User(Firebase, "");

  return {
    user
  };
}

export default FirebaseModule;
