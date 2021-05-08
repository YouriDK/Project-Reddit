import { Box } from "@chakra-ui/layout";
import React from "react";

/*
 * Dans l'interfance on met les props qui permet de mieux configurer le wrapper
 *  le wrapper va donner une forme homogène dans nos pages
 *
 */
interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px "}
      w="100%"
      mt="8"
      mx="auto"
    >
      {children}
    </Box>
  );
};
