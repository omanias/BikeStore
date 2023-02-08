import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ bikes, cat }) => {
  console.log(bikes);
  console.log(cat);

  const catFilter = cat.filter((cat) => {
    return cat === "MTB";
  });

  console.log(catFilter);

  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {bikes.map((bike) => (
          <Item
            key={bike.id}
            id={bike.id}
            name={bike.name}
            description={bike.description}
            price={bike.price}
            stock={bike.stock}
            category={bike.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
