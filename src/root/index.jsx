import React from "react";
import { Login } from "../components/Login";
import { Verification } from "../components/Verification";
import { Reset } from "../components/Reset";
import { NewPassword } from "../components/NewPassword";

export const Root = () => {
  return (
    <>
      <Login/>
      <Verification/>
      <Reset/>
      <NewPassword/>
    </>
  );
};
