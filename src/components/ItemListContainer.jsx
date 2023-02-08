import ItemList from "./ItemList";
import bikes from "../data.json";
const ItemListContainer = () => {
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
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const cat = bikes.map((bike) => {
    return bike.category;
  });

  return (
    <>
      <ItemList bikes={bikes} cat={cat} />
    </>
  );
};

export default ItemListContainer;
