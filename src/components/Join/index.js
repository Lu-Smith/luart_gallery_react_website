import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Form,
  FormH1,
  Text,
} from "./JoinElements";

const JoinPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">LuArt Gallery</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Join us</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default JoinPage;
