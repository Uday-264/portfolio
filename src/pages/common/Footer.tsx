import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container maxW={"container.xl"}>
      <Stack
        minH={"20vh"}
        w={"full"}
        align={"center"}
        justify={"center"}
        direction={"column"}
      >
        <BrandedDivider />
        <Text fontWeight={"bold"}>Made with ❤️ by Udaykumar</Text>
        <Text>
          All rights reserved © Udaykumar Bethi {new Date().getFullYear()}
        </Text>
      </Stack>
    </Container>
  );
};

const BrandedDivider = () => {
  const borderColor = useColorModeValue("brand.200", "brand.700");
  return (
    <Stack
      direction={"row"}
      w={"full"}
      align={"center"}
      justify={"center"}
      spacing={4}
      py={4}
    >
      <Box w={"full"} h={"1px"} bg={borderColor} />
      
      <Box w={"full"} h={"1px"} bg={borderColor} />
    </Stack>
  );
};

export default Footer;
