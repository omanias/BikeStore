import ItemList from "./ItemList";
import { Center, Heading } from "@chakra-ui/react";
const ItemListContainer = () => {
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Bikes Catalogue
        </Heading>
      </Center>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
