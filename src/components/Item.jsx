import React from "react";
import bike from "../assets/x-blaze.png";
import ItemCount from "./ItemCount";
import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const Item = ({ id, name, description, price, stock }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={bike} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>{description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  US$ {price}
                </Text>
                <Text color="red.600" fontSize="xl">
                  stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  Details
                </Button>
              </Center>
              <ItemCount stock={stock} />
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
