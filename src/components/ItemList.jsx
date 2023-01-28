import {
  Container,
  Text,
  Card,
  CardBody,
  Image,
  Heading,
  Button,
  Divider,
  Stack,
  CardFooter,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";

import bikeImg from "../assets/x-blaze.png";

const ItemList = () => {
  const bikes = [
    {
      id: 1,
      name: "Bike 1",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
    },
    {
      id: 2,
      name: "Bike 2",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
    },
    {
      id: 3,
      name: "Bike 3",
      price: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
    },
  ];

  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {bikes.map((bike) => {
          return (
            <div key={bike.id}>
              <Center p="1rem">
                <Card maxW="sm">
                  <CardBody>
                    <Image borderRadius="lg" src={bikeImg} />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{bike.name}</Heading>
                      <Text>{bike.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        US$ {bike.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Details
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        Buy
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Center>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default ItemList;
