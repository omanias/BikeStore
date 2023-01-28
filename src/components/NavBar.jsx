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
  Avatar,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="https://mejorconsalud.as.com/fitness/wp-content/uploads/2021/10/mujer-ciclista-entrena-competencia-1024x683.jpg"
          />
          <Box p="10" w="300px" h="100">
            <Heading size="md">BikeStore</Heading>
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
