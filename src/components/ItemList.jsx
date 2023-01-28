import Item from "./Item";
import { Container } from "@chakra-ui/react";

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
    {
      id: 4,
      name: "Bike 4",
      price: 400,
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
              <Item
                id={bike.id}
                name={bike.name}
                price={bike.price}
                description={bike.description}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default ItemList;
