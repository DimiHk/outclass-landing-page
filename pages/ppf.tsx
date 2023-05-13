import React from "react";
import withLandingLayout from "../layouts/LandingPageLayout";
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import FullFront from "../public/full-front.png";
import FullKit from "../public/complete.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import useQuery from "../hooks/useQuery";
import useLocal from "../hooks/useLocal";

const PDFViewer = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <Box marginTop={4} width={"full"} height={"xl"}>
        <Viewer fileUrl={"catalog.pdf"} />
      </Box>
    </Worker>
  );
};

const ProtectionFilm = () => {
  const { isSmallerThanMd, isSmallerThanLg, isLargerThanXl } = useQuery();
  const { translations } = useLocal();

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
          {translations.ppfTitleText}
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
              "OUR",
              "HERE",
              "VERIFIQUE",
              "NOSSOS",
              "PPF",
              "VISTAZO",
              "PAQUETES",
            ]}
            styles={{ textColor: "green.300" }}
          >
            {translations.ppfText}
          </Highlight>
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" padding={6} gap={12}>
          <GridItem colSpan={isSmallerThanLg ? 2 : 1} h={"100%"}>
            <Flex
              position={"relative"}
              height={"full"}
              width={"full"}
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.50"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={{ base: "0.5rem", md: 2 }}
              borderRadius={"base"}
              gap={2}
              boxShadow={"rgba(246, 224, 94, 0.10) 0px 5px 30px"}
            >
              <Text
                padding={2}
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "xs", md: "md" }}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                backgroundColor={"whiteAlpha.100"}
                borderRadius={"base"}
              >
                {translations.ppfFullFrontText}
              </Text>
              <Flex
                marginTop={2}
                direction={{ base: "column", "2xl": "row" }}
                padding={{ base: "0.5rem", md: 2 }}
                justify={"space-around"}
                align={"center"}
                gap={{ base: 4, md: undefined }}
              >
                <Image
                  quality={75}
                  className="services-images"
                  style={{
                    borderRadius: "0.25rem",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  width={isLargerThanXl ? 240 : 320}
                  src={FullFront}
                  alt="work-one"
                  sizes="50vw"
                />
                <Flex
                  wrap={{ base: "wrap" }}
                  align={"center"}
                  justify={{ base: "center" }}
                  gap={4}
                  width={"full"}
                  padding={2}
                >
                  {translations.fullFrontKitList.map((service) => {
                    return (
                      <React.Fragment key={service}>
                        <Flex
                          gap={2}
                          width={"full"}
                          justify={"space-between"}
                          align={"center"}
                        >
                          <Text
                            letterSpacing={"2px"}
                            textColor={"white"}
                            fontWeight={"light"}
                            fontSize={"2xs"}
                          >
                            {service}
                          </Text>
                          <FontAwesomeIcon
                            opacity={"85%"}
                            icon={faCheckCircle}
                            color={"lightGreen"}
                          />
                        </Flex>
                        <Divider opacity={"10%"} />
                      </React.Fragment>
                    );
                  })}
                </Flex>
              </Flex>
              <Flex
                align={"flex-end"}
                width={"full"}
                height={"full"}
                padding={2}
              >
                <Button
                  width={"full"}
                  textColor={"gray.900"}
                  backgroundColor={"whiteAlpha.500"}
                  _hover={{
                    backgroundColor: "blackAlpha.500",
                    color: "white",
                  }}
                >
                  <Text
                    letterSpacing={"2px"}
                    fontWeight={"semibold"}
                    fontSize={"2xs"}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:geral@outclasscardetail.com`}
                    >
                      {translations.getQuote}
                    </a>
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem colSpan={isSmallerThanLg ? 2 : 1} h={"100%"}>
            <Flex
              position={"relative"}
              height={"full"}
              width={"full"}
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.50"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={{ base: "0.5rem", md: 2 }}
              borderRadius={"base"}
              gap={2}
              boxShadow={"rgba(246, 224, 94, 0.10) 0px 5px 30px"}
            >
              <Text
                padding={2}
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "xs", md: "md" }}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                backgroundColor={"whiteAlpha.100"}
                borderRadius={"base"}
              >
                {translations.ppfCompleteCoverageText}
              </Text>
              <Flex
                marginTop={2}
                height={"full"}
                direction={{ base: "column", "2xl": "row" }}
                padding={{ base: "0.5rem", md: 2 }}
                justify={"space-around"}
                align={"center"}
                gap={{ base: 4, md: undefined }}
              >
                <Image
                  quality={75}
                  className="services-images"
                  style={{
                    borderRadius: "0.25rem",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  width={isLargerThanXl ? 240 : 320}
                  src={FullKit}
                  alt="work-one"
                  sizes="50vw"
                />
                <Flex
                  wrap={{ base: "wrap" }}
                  align={"center"}
                  justify={{ base: "center" }}
                  gap={4}
                  padding={2}
                >
                  {translations.completeCoverageList.map((service) => {
                    return (
                      <React.Fragment key={service}>
                        <Flex
                          gap={2}
                          width={"full"}
                          justify={"space-between"}
                          align={"center"}
                        >
                          <Text
                            letterSpacing={"2px"}
                            textColor={"white"}
                            fontWeight={"light"}
                            fontSize={"2xs"}
                          >
                            {service}
                          </Text>
                          <FontAwesomeIcon
                            opacity={"85%"}
                            icon={faCheckCircle}
                            color={"lightGreen"}
                          />
                        </Flex>
                        <Divider opacity={"10%"} />
                      </React.Fragment>
                    );
                  })}
                </Flex>
              </Flex>
              <Flex justify={"flex-end"} width={"full"} padding={2}>
                <Button
                  width={"full"}
                  textColor={"gray.900"}
                  backgroundColor={"whiteAlpha.500"}
                  _hover={{
                    backgroundColor: "blackAlpha.500",
                    color: "white",
                  }}
                >
                  <Text
                    letterSpacing={"2px"}
                    fontWeight={"semibold"}
                    fontSize={"2xs"}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:geral@outclasscardetail.com`}
                    >
                      {translations.getQuote}
                    </a>
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem h={{ base: "100vh", lg: "75vh" }} colSpan={2}>
            <AspectRatio ratio={16 / 9}>
              <video
                style={{
                  width: "100%",
                  height: isSmallerThanMd ? "100vh" : "75vh",
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
            <Flex direction={"column"} gap={2}>
              <Text
                textAlign={"center"}
                fontSize={"xl"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {translations.ppfCatalogueTitle}
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
                    "OUR",
                    "CATALOGUE",
                    "VERIFIQUE",
                    "CATÁLOGO",
                    "PPF",
                    "VISTAZO",
                  ]}
                  styles={{ textColor: "green.300" }}
                >
                  {translations.ppfCatalogText}
                </Highlight>
              </Text>
              <PDFViewer />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </React.Fragment>
  );
};

export default withLandingLayout(ProtectionFilm);
