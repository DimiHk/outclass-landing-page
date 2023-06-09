import { Box, Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
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
  const { translations } = useLocal();
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
            “{translations.slogan}”
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
            query={[
              "OUTCLASS",
              "EQUIPA",
              "EQUIPO",
              "NOSSA",
              "MASTERY",
              "MAESTRÍA",
              "MAESTRIA",
              "EXPERTISE",
              "EXPERIÊNCIA",
              "EXPERIENCIA",
              "DETAILING",
              "DETALHAMENTO",
              "DETALLADO",
              "SOLID",
              "SUPERIOR",
              "SUPERIOR",
              "OPCIONES",
              "OPTIONS",
              "OPÇÕES"
            ]}
            styles={{ textColor: "green.300" }}
          >
            {translations.mainPageText}
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
                {translations.checkVipClubButtonText}
                <FontAwesomeIcon icon={faDollarSign} />
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
                {translations.checkAboutUsButtonText}
                <FontAwesomeIcon icon={faArrowRight} />
              </Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
