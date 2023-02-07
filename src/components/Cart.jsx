import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  return (
    <Container className="cart-container">
      <FormControl>
        <Box>
          <FormLabel>Your name</FormLabel>
          <Input type="text" />
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </Box>
        <FormLabel>What do you want to tell us?</FormLabel>
        <Textarea></Textarea>
        <Box className="btn-send">
          <Button colorScheme="teal" variant="outline">
            Send information
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Cart;
