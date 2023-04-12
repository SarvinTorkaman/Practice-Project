import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import  ReactDOM  from "react-dom";

const Backdrop = ( props )=> {

  return <div className={classes.backdrop} onClick={props.onClick} />
}
const ErrorModalOverlay = (props) => {
  return(<Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      {" "}
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      {" "}
      <Button onClick={props.onClick}>Okay</Button>
    </footer>
  </Card>)
}


const ErrorModal = (props) => {
//   const errorButtonClickHandler = () => {
//     props.onClick();
//   };




  return (
    <React.Fragment >

      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("back-drop"))}
      {ReactDOM.createPortal( <ErrorModalOverlay title={props.title} message={props.message} onClick={props.onClick}/>, document.getElementById('modal-overlay'))}

    </React.Fragment>
  );
};

export default ErrorModal;
