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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(userName);
    console.log(userEmail);
    alert("Formulario enviado");
  };

  const deleteId = cart.map((item) => {
    return item.id;
  });

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container
            key={item.id}
            maxW="container.sm"
            className="main-catalogue"
          >
            <Card maxW="sm" m="3rem">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Price: U$D {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                  Delete from cart
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <Container className="cart-container">
        <FormControl onSubmit={handleSubmit}>
          <Box>
            <FormLabel>Your name</FormLabel>
            <Input type="text" onChange={(e) => setUserName(e.target.value)} />
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </Box>
          <FormLabel>What do you want to tell us?</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button type="submit" colorScheme="teal" variant="outline">
              Send information
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Cart;
