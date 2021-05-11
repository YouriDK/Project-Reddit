import { Box, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg="tomato" p={4}>
      <Box ml="auto">
        <NextLink href="/login">
          <Link color="white" mr={2}>
            {" "}
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </Box>
    </Box>
  );
};
