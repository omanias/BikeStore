import ItemList from "./ItemList";
import { Center, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import bikes from "../data.json";

const ItemListContainer = () => {
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (bikes.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(bikes);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      // console.log(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  if (category === undefined) {
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Bikes Catalogue
          </Heading>
        </Center>
        <ItemList bikes={bikes} />
      </div>
    );
  } else {
    const catFilter = bikes.filter((bike) => bike.category === category);

    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Bikes Catalogue
          </Heading>
        </Center>
        {catFilter ? (
          <ItemList dataBikes={catFilter} />
        ) : (
          <ItemList dataBikes={catFilter} bikes={bikes} />
        )}
      </div>
    );
  }
};

export default ItemListContainer;
