import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export function checkEmailValidation(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    toast.error("Oops! Please Enter A Valid Email");
    return false;
  }
}
export function checkGenderValidation(sex) {
  console.log(sex);
  if (sex === "male" || sex === "female") {
    return true;
  } else {
    toast.error("Oops! Please Enter A Valid Sex");
    return false;
  }
}

export function checkPasswordValidation(password) {
  if (password === "" || password === " ") {
    toast.error("Oops! Please Enter A Valid Password");
    return false;
  } else {
    return true;
  }
}

export function checkAgeValidation(password) {
  if (password === "" || password === " ") {
    toast.error("Oops! Please Enter A Valid Age");
    return false;
  } else {
    return true;
  }
}
export function checkNameValidation(name) {
  if (name === "" || name === " ") {
    toast.error("Oops! Please Enter A Valid Name");
    return false;
  } else {
    return true;
  }
}

export function validPassAndConfirmPass(password, conirmPassword) {
  if (password !== conirmPassword || password === " " || password == "") {
    toast.error("Password and Confirm Password Should Be Matching");
    return false;
  } else {
    return true;
  }
}

//this is validation
