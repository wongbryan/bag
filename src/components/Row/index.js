import React from "react";
import Button from "../Button";

const Row = props => {
  const classNames = ["row"];
  let rowMsg = 'Manage'

  if (props.background) {
    classNames.push(props.background);
  }
  if (props.fixed) {
    classNames.push("fixed");
  }
  if (props.large) {
    classNames.push("large");
  }
  if (props.transaction) {
    rowMsg = 'View details >'
  }

  let openDetails = () => {
    console.log("click");
    let detailsModal = document.getElementById('detailsModal');
    detailsModal.style.display = "block";

    document.getElementById('closeModal').onclick = function() {
      detailsModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == detailsModal) {
          detailsModal.style.display = "none";
      }
    }
  }

  let openDetailsAccounts = () => {
    console.log("click");
    let accountsModal = document.getElementById('accountsModal');
    accountsModal.style.display = "block";

    document.getElementById('closeModalAccounts').onclick = function() {
      accountsModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == accountsModal) {
          accountsModal.style.display = "none";
      }
    }
  }

  return (
    <div className={classNames.join(" ")}>
      <div className="left">{props.children}</div>
      <div className="right">{props.right}</div>
      <button className="details" color="black" onClick={props.transaction? openDetails : openDetailsAccounts}>{rowMsg}</button>
    </div>
  );
};

export default Row;
