import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const ItemListContainer = () => {
  const [bikes, setBikes] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const bikesCollection = collection(db, "bicicletas");
    getDocs(bikesCollection).then((querySnapshot) => {
      const bikes = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBikes(bikes);
    });
  }, []);

  const catFilter = bikes.filter((bike) => bike.category === category);
  return (
    <div>
      {category ? <ItemList bikes={catFilter} /> : <ItemList bikes={bikes} />}
    </div>
  );
};

export default ItemListContainer;
