import ItemDetail from "./ItemDetail";
import Data from "../data.json";
const ItemDetailContainer = () => {
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
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
      <ItemDetail bikes={Data} />
    </>
  );
};

export default ItemDetailContainer;
