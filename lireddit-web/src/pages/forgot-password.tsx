import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import router from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import createUrqlClient from "../utils/createUrqlClient";
import toErrorMap from "../utils/toErrorMap";
import login from "./login";

export const ForgotPassword: React.FC<{}> = ({}) => {
  const [] = useChangePasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            // * Avec le ? on va pouvoir gérer le fait que response puisse être undefined
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            // * Worked
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="email"
              placeholder="email"
              label="Email"
              type="email"
            ></InputField>

            <Button
              mt={4}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              FORGOT PASSWORD
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
