import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
const ItemDetailContainer = () => {
  // const { id } = useParams();

  // const [bikes, setBikes] = useState([]);

  /*   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setBikes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); */

  // const bikeFilter = Data.filter((bike) => bike.id == id);

  return <ItemDetail bikes={Data} />;
};

export default ItemDetailContainer;
