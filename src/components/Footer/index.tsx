import React from "react";
import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Footer: React.FC<FlexProps> = (props: FlexProps) => (
  <Flex
    as="footer"
    w={"full"}
    borderTopWidth={1}
    borderStyle={"solid"}
    borderColor={useColorModeValue("gray.200", "gray.700")}
    mt={6}
    px={"auto"}
    justifyContent={"center"}
    alignItems={"center"}
    py={4}
    {...props}
  />
);
