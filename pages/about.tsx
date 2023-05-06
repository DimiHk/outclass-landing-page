import React from "react";
import withLandingLayout from "./layouts/LandingPageLayout";
import { Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import GroupImage from "../public/lotus-yasha.jpg";

const about = () => {
  const whatWeMaster = [
    "PAINT CORRECTION & POLISH",
    "INTERIOR RESTORATION LUX",
    "INTERIOR & EXTERIOR DETAILING",
    "ELITE CERAMIC COATING",
    "SUBSCRIPTIONS - VIP CLUB",
    "WINDOW TINT (DARK OR OTHERS)",
    "DENT REMOVAL - PDR",
    "PROTECTION FILM - PPF",
    "HEADLIGHT RESTORATION",
    "WHEEL RESTORATION",
    "WORKSHOPS",
    "ACCESSORIES",
    "IMT & ISV",
    "TECHINCAL REVISION",
    "TIRES AND OTHERS",
  ];
  return (
    <React.Fragment>
      <SimpleGrid columns={2} spacing={12} position={"relative"}>
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
              WHO WE ARE
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"white"}
            >
              <span style={{ color: "#68D391" }}> THE {" BEST "} </span>{" "}
              DETAILERS OUT
              <span style={{ color: "#68D391" }}>{" THERE "}! </span>
            </Text>

            <Text
              textAlign={"start"}
              fontSize={"md"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              {`
We are proud to be one of the largest detailing companies in Portugal, with an extensive network that covers the entire region and even extends to Western Spain.`}
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
              OUR MISSION IS
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"white"}
            >
              TO
              <span style={{ color: "#68D391" }}>{" SATISFY "}</span>&
              <span style={{ color: "#68D391" }}>{" PROVIDE  "}</span>
              THE BEST HIGH QUALITY{" "}
              <span style={{ color: "#68D391" }}>{" SERVICE  "}</span>
            </Text>
            <Flex justify={"center"} direction={"column"} gap={4}>
              <Text
                textAlign={"start"}
                fontSize={"md"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                fontStyle={"italic"}
              >
                {`Our passionate and professional team is dedicated to providing solutions to your problems with trust and mastery.`}
              </Text>
              <Text
                textAlign={"start"}
                fontSize={"md"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                fontStyle={"italic"}
              >
                {`We strive for excellence in everything we do and take great pride in our work.`}
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Image
          quality={100}
          className="services-images"
          style={{
            borderRadius: "0.5rem",
            objectFit: "cover",
            width: "90%",
            cursor: "pointer",
            boxShadow: "rgba(255, 255, 255, 0.02)  0px 10px 50px",
          }}
          src={GroupImage}
          alt="group"
          sizes="100vw"
        />
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
          WHAT SOLUTIONS DO WE MASTER ?
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"md"}
          letterSpacing={"2px"}
          fontWeight={"semibold"}
          fontStyle={"italic"}
          textColor={"white"}
        >
          HERE ARE <span style={{ color: "#68D391" }}>{" ALL "}</span>
          THE
          <span style={{ color: "#68D391" }}>{" SOLUTIONS "}</span> THAT WE
          CURRENTLY
          <span style={{ color: "#68D391" }}>{" MASTER "}</span>
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
          {whatWeMaster.map((service) => {
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
                  fontStyle={"italic"}
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

export default withLandingLayout(about);
