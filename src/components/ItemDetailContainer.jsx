import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(Data);
      const data = await response.json();
      setData(bikes);
    }
    fetchData();
  }, []);

  const bikeFilter = Data.filter((bike) => bike.id == id);

  return <ItemDetail bikes={Data} />;
};

export default ItemDetailContainer;
