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
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
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
      <SendOrder />
    </>
  );
};

export default Cart;
