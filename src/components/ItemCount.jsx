import { useEffect, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    setCount(count + 1);
    setQty(qty + 1);
  };

  const onSubstract = () => {
    setCount(count - 1);
    setQty(qty - 1);
  };

  useEffect(() => {
    setQty(count);
    console.log(qty);
  }, [qty]);

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={onSubstract} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{count}</Text>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={onAdd} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
      <p>cantidad seleccionada: {qty}</p>
    </>
  );
};

export default ItemCount;
