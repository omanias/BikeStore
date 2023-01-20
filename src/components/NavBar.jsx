import React from "react";
import CartWidget from "./CartWidget";
import { Flex, Box, Spacer, Heading, Container } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Box p="10" w="300px" h="100">
            <Heading size="md">CoderCommerce</Heading>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
