import React from "react";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Box p="10" w="300px" h="100">
            <Heading size="md">CoderCommerce</Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <MenuItem>MTB</MenuItem>
                <MenuItem>Ruta</MenuItem>
                <MenuItem>BMX</MenuItem>
              </MenuList>
            </Menu>
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
