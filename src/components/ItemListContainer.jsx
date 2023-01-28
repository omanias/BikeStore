import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="clack">
        Bikes Catalogue
      </Center>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
