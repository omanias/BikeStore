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
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <h3>Productos seleccionados</h3>
      {cart.map((item) => {
        <h4>{item.title}</h4>;
      })}
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
    </>
  );
};

export default Cart;
