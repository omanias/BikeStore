import ItemCount from "./ItemCount";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ItemDetail = () => {
  return (
    <>
      <div>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={""} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{"nombre del producto"}</Heading>
                <Text>{"description"}</Text>
                <Text color="blue.800" fontSize="l">
                  Category: {"category"}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  US$ {"price"}
                </Text>
                <Text color="red.600" fontSize="xl">
                  stock: {"stock"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  Buy
                </Button>
              </Center>
              <ItemCount stock={"stock"} />
            </CardFooter>
          </Card>
        </Center>
      </div>
    </>
  );
};

export default ItemDetail;
