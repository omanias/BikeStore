import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();

  const [bikes, setBikes] = useState([]);
  console.log(bikes);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(Data);
      const data = await response.json();
      setData(bikes);
    }
    fetchData();
  }, []);

  const catFilter = Data.filter((bike) => bike.category === category);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Bikes by Category
        </Heading>
      </Center>
      {category ? <ItemList bikes={catFilter} /> : <ItemList bikes={Data} />}
    </div>
  );
};

export default ItemListContainer;
