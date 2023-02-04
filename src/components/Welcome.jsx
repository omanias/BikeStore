import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://mambabikes.com.ar/wp-content/uploads/2020/06/slider-mountain-5.png"
            alt="bike"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
