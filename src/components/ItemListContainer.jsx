import ItemList from "./ItemList";
import { Center, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);
  const bikes = [
    {
      id: 1,
      name: "Bike 1",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
      stock: 3,
      category: "MTB",
    },
    {
      id: 2,
      name: "Bike 2",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
      stock: 8,
      category: "Route",
    },
    {
      id: 3,
      name: "Bike 3",
      price: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
      stock: 3,
      category: "BMX",
    },
    {
      id: 4,
      name: "Bike 4",
      price: 400,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti aut dignissimos explicabo ab, cumque eligendi ducimus numquam quibusdam minima.",
      stock: 5,
      category: "MTB",
    },
  ];

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
    console.log(catFilter);

    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Bikes Catalogue
          </Heading>
        </Center>
        {catFilter ? (
          <ItemList bikes={catFilter} />
        ) : (
          <ItemList bikes={bikes} />
        )}
      </div>
    );
  }
};

export default ItemListContainer;
