import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";
import { Button } from "@chakra-ui/button";
import { useLogoutMutation } from "../generated/graphql";
import isServer from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(), // *  Permet de ne pas appeler cette query lorsque c'est un serverSideRendering mais seulement dans le navigateur
  });
  let body = null;

  // console.log("Data : ", data);

  if (fetching) {
    // * Data's loading
  } else if (!data?.me) {
    //* user not logged in
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={2}>
            {" "}
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
  } else {
    // * user logged in
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          isLoading={logoutFetching}
          variant="link"
          onClick={() => logout()}
        >
          {" "}
          logout{" "}
        </Button>
      </Flex>
    );
  }

  return (
    <Box bg="tomato" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Box>
  );
};
