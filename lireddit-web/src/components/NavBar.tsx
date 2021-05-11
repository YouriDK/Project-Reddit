import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";
import { Button } from "@chakra-ui/button";
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
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
        <Button variant="link"> logout </Button>
      </Flex>
    );
  }

  return (
    <Box bg="tomato" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Box>
  );
};
