import React, { useEffect, useRef } from "react";
import withLandingLayout from "./layouts/LandingPageLayout";
import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

const ProtectionFilm = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        theme: PSPDFKit.Theme.DARK,
        container,
        document: "/catalog.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <React.Fragment>
      <Flex direction={"column"} gap={2}>
        <Text
          textAlign={"center"}
          fontSize={"xl"}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"bold"}
          fontStyle={"italic"}
        >
          PPF PACKAGES
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"md"}
          letterSpacing={"2px"}
          fontWeight={"semibold"}
          fontStyle={"italic"}
          textColor={"white"}
        >
          <span style={{ color: "#68D391" }}> CHECK {" OUR "} </span> PPF
          PACKAGES
          <span style={{ color: "#68D391" }}>{" HERE "}! </span>
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" padding={6} gap={12}>
          <GridItem h={"100%"}>
            <Flex
              position={"relative"}
              minWidth={"md"}
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.50"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={2}
              paddingRight={6}
              paddingLeft={6}
              borderRadius={"base"}
              gap={2}
              boxShadow={"rgba(246, 224, 94, 0.10) 0px 5px 30px"}
            >
              <Flex justify={"space-between"} padding={2} align={"center"}>
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  letterSpacing={"2px"}
                  textColor={"white"}
                  fontWeight={"light"}
                >
                  COMPLETE COVERAGE
                </Text>

                <Text
                  textAlign={"center"}
                  fontSize={"md"}
                  letterSpacing={"2px"}
                  textColor={"green.300"}
                  fontWeight={"bold"}
                >
                  ---€ / PACK
                </Text>
              </Flex>
              <Divider opacity={"10%"} />
            </Flex>
          </GridItem>
          <GridItem h={"100%"}>
            <Flex
              position={"relative"}
              minWidth={"md"}
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.50"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={2}
              paddingRight={6}
              paddingLeft={6}
              borderRadius={"base"}
              gap={2}
              boxShadow={"rgba(246, 224, 94, 0.10) 0px 5px 30px"}
            >
              <Flex justify={"space-between"} padding={2} align={"center"}>
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  letterSpacing={"2px"}
                  textColor={"white"}
                  fontWeight={"light"}
                >
                  SINGLE PANEL
                </Text>

                <Text
                  textAlign={"center"}
                  fontSize={"md"}
                  letterSpacing={"2px"}
                  textColor={"green.300"}
                  fontWeight={"bold"}
                >
                  ---€ / PACK
                </Text>
              </Flex>
              <Divider opacity={"10%"} />
            </Flex>
          </GridItem>
          <GridItem h={"100%"}>
            <Flex
              position={"relative"}
              minWidth={"md"}
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.50"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={2}
              paddingRight={6}
              paddingLeft={6}
              borderRadius={"base"}
              gap={2}
              boxShadow={"rgba(246, 224, 94, 0.10) 0px 5px 30px"}
            >
              <Flex justify={"space-between"} padding={2} align={"center"}>
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  letterSpacing={"2px"}
                  textColor={"white"}
                  fontWeight={"light"}
                >
                  FULL FRONT END KIT
                </Text>

                <Text
                  textAlign={"center"}
                  fontSize={"md"}
                  letterSpacing={"2px"}
                  textColor={"green.300"}
                  fontWeight={"bold"}
                >
                  ---€ / PACK
                </Text>
              </Flex>
              <Divider opacity={"10%"} />
            </Flex>
          </GridItem>
          <GridItem h={"100%"}>
            <Flex
              position={"relative"}
              minWidth={"md"}
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.50"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={2}
              paddingRight={6}
              paddingLeft={6}
              borderRadius={"base"}
              gap={2}
              boxShadow={"rgba(246, 224, 94, 0.10) 0px 5px 30px"}
            >
              <Flex justify={"space-between"} padding={2} align={"center"}>
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  letterSpacing={"2px"}
                  textColor={"white"}
                  fontWeight={"light"}
                >
                  CUSTOM PANEL
                </Text>

                <Text
                  textAlign={"center"}
                  fontSize={"md"}
                  letterSpacing={"2px"}
                  textColor={"green.300"}
                  fontWeight={"bold"}
                >
                  ---€ / PACK
                </Text>
              </Flex>
              <Divider opacity={"10%"} />
            </Flex>
          </GridItem>
          <GridItem h={"100%"} colSpan={2}>
            <Divider opacity={"10%"} />
          </GridItem>
          <GridItem h={"75vh"} colSpan={2}>
            <AspectRatio ratio={16 / 9}>
              <video
                style={{
                  width: "100%",
                  height: "550px",
                  objectFit: "cover",
                  aspectRatio: "16 / 9",
                  borderRadius: "0.5rem",
                }}
                src="ppf.mp4"
                muted
                autoPlay
                loop
              />
            </AspectRatio>
          </GridItem>
          <GridItem h={"100%"} colSpan={2}>
            <Divider opacity={"10%"} />
          </GridItem>
          <GridItem h={"100%"} colSpan={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              OFFICIAL CATALOGUE
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"white"}
            >
              <span style={{ color: "#68D391" }}> CHECK {" OUR "} </span>{" "}
              OFICCIAL PPF
              <span style={{ color: "#68D391" }}>{" CATALOGUE "} </span>
            </Text>
            <Box
              marginTop={6}
              width={"full"}
              borderRadius={"base"}
              height={"100vh"}
              ref={containerRef}
            />
          </GridItem>
        </Grid>
      </Flex>
    </React.Fragment>
  );
};

export default withLandingLayout(ProtectionFilm);
