import { Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { faArrowRight, faDollarSign } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import OutclassNavigation from "./components/OutclassNavigation";
import OutclassInfoHeader from "./components/OutclassInfoHeader";

const Home = () => {
  return (
    <React.Fragment>
      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: "55%",
          objectFit: "cover",
          aspectRatio: "auto",
        }}
        src="video.mp4"
        autoPlay
        muted
        loop
      />
      <OutclassInfoHeader />
      <OutclassNavigation />
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
            textColor={"green.300"}
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
          <Highlight
            query={["EXPERT", "DETAILERS", "PROVIDE", "QUALITY", "DETAILING"]}
            styles={{ textColor: "green.300" }}
          >
            OUR TEAM OF EXPERT CAR DETAILERS IS HERE TO PROVIDE YOU WITH THE
            HIGHEST QUALITY CAR CLEANING AND DETAILING SERVICES.
          </Highlight>
        </Text>
        <Flex marginTop={2} gap={4}>
          <Link href={"/vip"} prefetch={false}>
            <Button
              textColor={"gray.900"}
              backgroundColor={"whiteAlpha.500"}
              _hover={{
                backgroundColor: "blackAlpha.500",
                color: "white",
              }}
            >
              <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"xs"}>
                CHECK VIP CLUBE <FontAwesomeIcon icon={faDollarSign} />
              </Text>
            </Button>
          </Link>
          <Link href={"/valets"} prefetch={false}>
            <Button
              textColor={"gray.900"}
              backgroundColor={"whiteAlpha.500"}
              _hover={{
                backgroundColor: "blackAlpha.500",
                color: "white",
              }}
            >
              <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"xs"}>
                CHECK OUR VALETS <FontAwesomeIcon icon={faArrowRight} />
              </Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
