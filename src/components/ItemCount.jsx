import { useState } from "react";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubstract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <IconButton icon={<MinusIcon />} isDisabled />
        ) : (
          <IconButton icon={<MinusIcon />} onClick={onSubstract} />
        )}

        <Button>Buy {count}</Button>

        {count <= 4 ? (
          <IconButton icon={<AddIcon />} onClick={onAdd} />
        ) : (
          <IconButton icon={<AddIcon />} isDisabled />
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
