import React from "react";
import {
  Button,
  Container,
  Label,
  Main,
  Description,
  Wrapper,
} from "../Login/style";
import { Input } from "./style";

export const Verification = () => {
  return (
    <Container>
      <Wrapper>
        <Main>Enter Verification Code</Main>
        <Description>We’ve sent a code to +998 90 000 00 00</Description>
        <>
          <Input />
          <Input />
          <Input />
          <Input />
        </>
        <Button>Reset Password</Button>
        <Description>Experiencing issues receiving the code?</Description>
      </Wrapper>
    </Container>
  );
};
