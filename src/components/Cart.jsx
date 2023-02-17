import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      <h3>Productos en carrito</h3>
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
