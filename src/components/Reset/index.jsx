import React from "react";
import {
  Button,
  Container,
  Input,
  Label,
  Main,
  Description,
  Wrapper,
} from "../Login/style";

export const Reset = () => {
  return (
    <Container>
      <Wrapper>
        <Main>Reset Password</Main>
        <Description>Enter your email to reset your password.</Description>
        <Label>Phone</Label>
        <Input placeholder="+998 90 000 00 00" />
        <Button>Reset Password</Button>
      </Wrapper>
    </Container>
  );
};
