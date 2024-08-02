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

export const NewPassword = () => {
  return (
    <Container>
      <Wrapper>
        <Main>New Password</Main>
        <Description>
          Set up a new password to protect your account.
        </Description>
        <Label>New password</Label>
        <Input placeholder="Enter new password" type="password" />
        <Label>Confirm password</Label>
        <Input placeholder="Enter your new password again" type="password" />
        <Label>Weak password. Must contain at least</Label>
        <Label>At least 1 uppercase</Label>
        <Label>At least 1 number</Label>
        <Label>At least 8 characters</Label>
        <Button>Continue</Button>
      </Wrapper>
    </Container>
  );
};
