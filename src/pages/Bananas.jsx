import { Container, Image, VStack } from "@chakra-ui/react";

const Bananas = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/banana.png" alt="Banana" boxSize={{ base: "80%", md: "50%" }} objectFit="contain" />
      </VStack>
    </Container>
  );
};

export default Bananas;