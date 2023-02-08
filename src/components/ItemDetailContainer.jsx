import ItemDetail from "./ItemDetail";
import bikes from "../data.json";
const ItemDetailContainer = () => {
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
  return (
    <>
      <ItemDetail bikes={bikes} />
    </>
  );
};

export default ItemDetailContainer;
