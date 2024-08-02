import React from "react";
import {
  Button,
  Container,
  Input,
  Main,
  Description,
  Label,
  Wrapper,
} from "./style";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Main>Login to your account</Main>
        <Description>Enter your details to login.</Description>
        <Label>Email address</Label>
        <Input placeholder="Enter your email address" />
        <Label>Password</Label>
        <Input placeholder="Enter your Password" type="password" />
        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};
