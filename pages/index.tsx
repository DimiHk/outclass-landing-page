import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { faArrowRight, faDollarSign } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import OutclassNavigation from "./components/OutclassNavigation";
import OutclassInfoHeader from "./components/OutclassInfoHeader";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (videoRef!) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

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
        ref={videoRef}
        src="video.mp4"
        autoPlay
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
          <Link href={"/vip"} prefetch={false}>
            <Button
              textColor={"gray.900"}
              backgroundColor={"whiteAlpha.500"}
              boxShadow={"dark-lg"}
              _hover={{
                backgroundColor: "blackAlpha.500",
                color: "white",
              }}
            >
              <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"xs"}>
                JOIN VIP CLUBE <FontAwesomeIcon icon={faDollarSign} />
              </Text>
            </Button>
          </Link>
          <Link href={"/valets"} prefetch={false}>
            <Button
              textColor={"gray.900"}
              backgroundColor={"whiteAlpha.500"}
              boxShadow={"dark-lg"}
              _hover={{
                backgroundColor: "blackAlpha.500",
                color: "white",
              }}
            >
              <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"xs"}>
                CHECK OUR SERVICES <FontAwesomeIcon icon={faArrowRight} />
              </Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
