import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/pro-regular-svg-icons";
import {
  faArrowRight,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    setTimeout(() => {
      if (videoRef!) {
        videoRef.current.muted = true;
        videoRef.current.play();
      }
    }, 1000);
  }, []);

  return (
    <Box width={"full"} height={"full"} backgroundColor={"blackAlpha.900"}>
      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: "55%",
          objectFit: "cover",
          aspectRatio: "auto",
        }}
        ref={videoRef}
        src="video.mp4"
        autoPlay
        loop
      />
      <Flex
        padding={2}
        position={"relative"}
        backgroundColor={"blackAlpha.500"}
        align={"center"}
        justify={"center"}
        gap={8}
        shadow={"md"}
      >
        <Flex align={"center"} justify={"center"} gap={2}>
          <FontAwesomeIcon icon={faWhatsapp} color="white" size="xl" />
          <Text
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontSize={"xs"}
          >
            (+351) 962 199 831
          </Text>
        </Flex>
        <Flex align={"center"} justify={"center"} gap={2}>
          <FontAwesomeIcon icon={faWhatsapp} color="white" size="xl" />
          <Text
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontSize={"xs"}
          >
            (+351) 939 235 577
          </Text>
        </Flex>
        <Flex align={"center"} justify={"center"} gap={2}>
          <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
          <Text
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontSize={"xs"}
          >
            @outclasscardetail
          </Text>
        </Flex>

        <Flex align={"center"} justify={"center"} gap={2}>
          <FontAwesomeIcon icon={faAt} color="white" size="lg" />
          <Text
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontSize={"xs"}
          >
            geral@outclasscardetail.com
          </Text>
        </Flex>
        <Flex align={"center"} justify={"center"} gap={2}>
          <Button
            textColor={"gray.900"}
            backgroundColor={"whiteAlpha.500"}
            boxShadow={"dark-lg"}
            size={"sm"}
            _hover={{
              backgroundColor: "blackAlpha.500",
              color: "white",
            }}
          >
            <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"xs"}>
              WHERE TO FIND US <FontAwesomeIcon icon={faLocationDot} />
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        position={"relative"}
        justify={"space-between"}
        align={"center"}
        padding={2}
        marginTop={2}
      >
        <Image
          cursor={"pointer"}
          objectFit={"cover"}
          height={"64px"}
          src="outclass-logo-variant.gif"
          alt="Dan Abramov"
        />
        <Flex gap={12} justify={"space-evenly"} marginRight={100}>
          <Text
            cursor={"pointer"}
            fontWeight={"light"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            HOME
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"light"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            DETAILING
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"light"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            PPF
          </Text>
          <Text
            cursor={"pointer"}
            fontWeight={"light"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            ABOUT
          </Text>
          <Button
            textColor={"white"}
            backgroundColor={"blackAlpha.500"}
            boxShadow={"dark-lg"}
            _hover={{
              backgroundColor: "whiteAlpha.500",
              color: "white",
            }}
          >
            <Text
              position={"absolute"}
              borderRadius={"base"}
              right={"-70px"}
              bottom={7}
              backgroundColor={"green.200"}
              paddingRight={"12px"}
              paddingLeft={"12px"}
              paddingTop={"6px"}
              paddingBottom={"6px"}
              letterSpacing={"2px"}
              fontSize={"2xs"}
              textColor={"green.900"}
              fontWeight={"light"}
            >
              JOIN US!
            </Text>
            <Text
              fontWeight={"light"}
              letterSpacing={"2px"}
              fontSize={"smaller"}
            >
              VIP CLUB
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        marginTop={140}
        align={"left"}
        position={"absolute"}
        padding={6}
        gap={4}
        width={"full"}
        height={"-webkit-fill-available"}
      >
        <Flex gap={4} direction={"column"}>
          <Heading
            as={"h1"}
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            OUTCLASS CAR DETAIL
          </Heading>
          <Text
            fontSize={"xl"}
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontStyle={"italic"}
          >
            “EXCELLENCE IS EARNED, NOT PROCLAIMED”
          </Text>
        </Flex>
        <Text
          width={"3xl"}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
          fontStyle={"italic"}
          opacity={"90%"}
        >
          OUR TEAM OF EXPERT CAR DETAILERS IS HERE TO PROVIDE YOU WITH THE
          HIGHEST QUALITY CAR CLEANING AND DETAILING SERVICES.
        </Text>
        <Flex marginTop={2} gap={4}>
          <Button
            textColor={"gray.900"}
            backgroundColor={"whiteAlpha.500"}
            boxShadow={"dark-lg"}
            _hover={{
              backgroundColor: "blackAlpha.500",
              color: "white",
            }}
          >
            <Text letterSpacing={"2px"} fontWeight={"semibold"} fontSize={"xs"}>
              JOIN VIP CLUBE <FontAwesomeIcon icon={faDollarSign} />
            </Text>
          </Button>
          <Button
            textColor={"gray.900"}
            backgroundColor={"whiteAlpha.500"}
            boxShadow={"dark-lg"}
            _hover={{
              backgroundColor: "blackAlpha.500",
              color: "white",
            }}
          >
            <Text letterSpacing={"2px"} fontWeight={"semibold"} fontSize={"xs"}>
              CHECK OUR SERVICES <FontAwesomeIcon icon={faArrowRight} />
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
