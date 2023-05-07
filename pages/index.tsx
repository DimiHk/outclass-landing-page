import { Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { faArrowRight, faDollarSign } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import OutclassNavigation from "../components/OutclassNavigation";
import OutclassInfoHeader from "../components/OutclassInfoHeader";
import useQuery from "../hooks/useQuery";
import useLocal from "../hooks/useLocal";

const Home = () => {
  const { isSmallerThanMd } = useQuery();
  const translations = useLocal();
  console.log(translations);
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
      {!isSmallerThanMd && <OutclassInfoHeader />}
      <OutclassNavigation />
      <Flex
        direction={"column"}
        marginTop={{ base: 50, md: 140 }}
        align={"left"}
        position={"relative"}
        padding={6}
        gap={{ base: 6, sm: 4 }}
        width={"full"}
        height={"full"}
      >
        <Flex gap={4} direction={"column"}>
          <Heading
            as={"h1"}
            letterSpacing={"2px"}
            textColor={"white"}
            textAlign={{ base: "center", sm: "start" }}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            OUTCLASS CAR DETAIL
          </Heading>
          <Text
            letterSpacing={"2px"}
            textColor={"green.300"}
            fontWeight={"semibold"}
            fontStyle={"italic"}
            textAlign={{ base: "center", sm: "start" }}
          >
            “EXCELLENCE IS EARNED, NOT PROCLAIMED”
          </Text>
        </Flex>
        <Text
          width={{ base: "xs", sm: "md", md: "2xl" }}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"semibold"}
          fontStyle={"italic"}
          textAlign={{ base: "center", sm: "start" }}
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
        <Flex direction={{ base: "column", sm: "row" }} marginTop={2} gap={4}>
          <Link href={"/vip"} prefetch={false}>
            <Button
              width={{ base: "full", sm: undefined }}
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
              width={{ base: "full", sm: undefined }}
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
