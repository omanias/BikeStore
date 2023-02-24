import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const bikesCollection = collection(db, "bicicletas");
    getDocs(bikesCollection).then((querySnapshot) => {
      const bikes = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(bikes);
    });
  }, []);

  return <ItemDetail bikes={Data} />;
};

export default ItemDetailContainer;
