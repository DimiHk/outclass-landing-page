import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box width={"full"} height={"full"}>
      <Image
        width={"full"}
        src="background-image.webp"
        objectFit={"cover"}
        position={"absolute"}
        height={"320px"}
      />
      <Flex
        position={"absolute"}
        direction={"row"}
        width={"full"}
        justify={"space-between"}
        align={"center"}
        padding={1}
        zIndex={20}
      >
        <Box>
          <Image
            cursor={"pointer"}
            objectFit={"cover"}
            height={"64px"}
            src="outclass-logo-variant.gif"
            alt="Dan Abramov"
          />
        </Box>
        <Flex gap={12} justify={"space-evenly"} marginRight={12}>
          <Text
            cursor={"pointer"}
            fontWeight={"semibold"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
          >
            HOME
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"semibold"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.50", boxShadow: "sm" }}
          >
            DETAILING
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"semibold"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
          >
            PPF
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"semibold"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
          >
            ABOUT
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"semibold"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
          >
            VIP CLUB
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
