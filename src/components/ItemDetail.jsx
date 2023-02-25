import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
// import bikeImage from "../assets/x-blaze.png";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ bikes }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "bicicletas", `${id}`);

    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const bikeFilter = bikes.filter((bike) => bike.id == id);

  return (
    <>
      {bikeFilter.map((bike) => (
        <div key={bike.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={bike.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{bike.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Description: {bike.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Category: {bike.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {bike.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: U$D {bike.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={bike.stock}
                  id={bike.id}
                  price={bike.price}
                  name={bike.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
