import React from "react";
import withLandingLayout from "../layouts/LandingPageLayout";
import {
  Center,
  Divider,
  Flex,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import GroupImage from "../public/lotus-yasha.jpg";
import useLocal from "../hooks/useLocal";

const About = () => {
  const { translations } = useLocal();

  return (
    <React.Fragment>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={12}
        position={"relative"}
      >
        <SimpleGrid columns={1} spacing={12} position={"relative"}>
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {translations.aboutUsWhoWeAreTitle}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"white"}
            >
              <Highlight
                query={[
                  "BEST",
                  "THERE",
                  "MELHORES",
                  "AÍ",
                  "MEJORES",
                  "MERCADO",
                ]}
                styles={{ textColor: "green.300" }}
              >
                {translations.aboutUsWhoWeAreSubtitleText}
              </Highlight>
            </Text>

            <Text
              textAlign={"center"}
              fontSize={"sm"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
            >
              {translations.aboutUsFirstText}
            </Text>
          </Flex>
          <Divider opacity={"10%"} />
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {translations.aboutUsMissionTitle}
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"white"}
            >
              <Highlight
                query={[
                  "SATISFY",
                  "PROVIDE",
                  "SERVICE",
                  "FORNECER",
                  "SERVIÇO",
                  "QUALIDADE",
                  "PROPORCIONAR",
                  "SERVICIO",
                  "CALIDAD",
                ]}
                styles={{ textColor: "green.300" }}
              >
                {translations.aboutUsMissionSubtitle}
              </Highlight>
            </Text>
            <Flex justify={"center"} direction={"column"} gap={4}>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
              >
                {translations.aboutUsMissionText}
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
              >
                {translations.aboutUsMissionTextSecond}
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Center width={"full"} height={"full"} padding={6}>
          <Image
            quality={75}
            className="services-images"
            style={{
              borderRadius: "0.5rem",
              objectFit: "cover",
              cursor: "pointer",
              width: "100%",
              height: "100%",
              boxShadow: "rgba(255, 255, 255, 0.02)  0px 10px 50px",
            }}
            src={GroupImage}
            alt="group"
            sizes="50vw"
          />
        </Center>
      </SimpleGrid>
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        gap={2}
        marginTop={4}
      >
        <Text
          textAlign={"center"}
          fontSize={"xl"}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"bold"}
          fontStyle={"italic"}
        >
          {translations.aboutUsSolutionTitle}
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"md"}
          letterSpacing={"2px"}
          fontWeight={"semibold"}
          fontStyle={"italic"}
          textColor={"white"}
        >
          <Highlight
            query={[
              "ALL",
              "SOLUTIONS",
              "MASTER",
              "AQUI",
              "SOLUÇÕES",
              "DOMINAMOS",
            ]}
            styles={{ textColor: "green.300" }}
          >
            {translations.aboutUsSolutionText}
          </Highlight>
        </Text>
        <Flex
          justify={"center"}
          align={"center"}
          flexWrap={"wrap"}
          gap={4}
          bgColor={"whiteAlpha.50"}
          padding={4}
          maxWidth={"container.xl"}
          borderRadius={"base"}
        >
          {translations.servicesListText.map((service) => {
            return (
              <Flex
                key={service}
                gap={2}
                backgroundColor={"green.200"}
                padding={2}
                align={"center"}
                boxShadow={"rgba(72, 187, 120, 0.50) 0px 5px 15px;"}
                cursor={"pointer"}
                borderRadius={"base"}
                _hover={{
                  transform: "scale(1.02)",
                  transition: "transform 0.1s ease-in-out",
                }}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"2xs"}
                  letterSpacing={"2px"}
                  fontWeight={"light"}
                >
                  {service}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default withLandingLayout(About);
