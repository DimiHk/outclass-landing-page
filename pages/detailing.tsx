import React from "react";
import withLandingLayout from "../layouts/LandingPageLayout";
import { Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Detailing = () => {
  const carDetailingSteps = [
    "DELICATE HAND WASH UTILIZING PH BALANCED SHAMPOO'S AND WHEEL CLEANER TO ENSURE NO HARM IS CAUSED TO PAINTJOB.",
    "EXTERIOR SURFACES, INCLUDING WHEEL FACES ARE BAR CLAYED TO REMOVE SURFACE CONTAMINANTS.",
    "MULTI-STAGE CORRECTION STEPS (ABOUT 85-95%) SURFACE MARKS AND SWIRLS WILL BE REMOVED.",
    "MULTI-STAGE FINAL POLISH STEPS REFINING THE CORRECTION STEP, ENHANCING PAINT'S GLOSS.",
    "EXTERIOR TRIM IS TAPED TO PROTECT AGAINST COMPOUND AND POLISH STAINING.",
    "PREMIUM PAINT SEALANT IS APPLIED TO ENSURE PAINTJOB PROTECTION.",
    "INTERIOR SURFACES ARE VACUUMED, WIPED AND CLEANED WITH PREMIUM PRODUCTS.",
    "GLASS IS COMPLETELY CLEANED AND TIRES ARE DRESSED WITH A NON-GREASY PRODUCT.",
  ];

  const carDetailingStepsTwo = [
    "DELICATE HAND WASH UTILIZING PH BALANCED SHAMPOO’S AND WHEEL CLEANER TO ENSURE NO HARM IS CAUSED TO PAINTJOB.",
    "EXTERIOR SURFACES, INCLUDING WHEEL FACES ARE BAR CLAYED TO REMOVE SURFACE CONTAMINANTS.",
    "ONE-STAGE CORRECTION STEP (ABOUT 50-70%) SURFACE MARKS AND SWIRLS WILL BE REMOVED.",
    "ONE-STAGE FINAL POLISH STEP REFINING THE CORRECTION STEP, ENHANCING PAINT'S GLOSS.",
    "EXTERIOR TRIM IS TAPED TO PROTECT AGAINST COMPOUND AND POLISH STAINS.",
    "DURABLE PAINT SEALANT IS APPLIED TO ENSURE PROTECTION TO THE EXTERIOR SURFACES.",
    "INTERIOR SURFACES ARE VACUUMED, WIPED AND CLEANED WITH PREMIUM PRODUCTS.",
    "GLASS IS COMPLETELY CLEANED AND TIRES ARE DRESSED WITH A NON-GREASY PRODUCT.",
  ];

  const paintCorrectionDetail = [
    "DELIVERS PAINTWORK PERFECTION, OFTEN PROVIDING A FINISH STANDARD HIGHER THAN ITS ORIGINAL SHOWROOM CONDITION.",
    "USING A MULTIPLE OF MACHINE STEPS TO SAFELY REMOVE HEAVIER DEFECTS ON THE PAINTWORK (RANDOM DEEP SCRATCHES, BIRD ETCHINGS, BODYSHOP BUFFER TRAILS AND SANDING MARKS) A FULL PAINT CORRECTION DETAIL IS PERFECT FOR THE TIRED, LIFELESS CAR THAT REQUIRES A SECOND LEASE OF LIFE.",
    "OVER 95% CORRECTION WILL BE PERFORMED WITH A FULL PAINT CORRECTION DETAIL AND IS GUARANTEED TO TRANSFORM YOUR VEHICLE.",
  ];

  const carCarePackage = [
    "THE ULTIMATE CAR CARE PACKAGE! COMBINING A FULL PAINT CORRECTION DETAIL WITH ALL AVAILABLE BOLT-ONS: WHEELS OFF DETAILING, ENGINE BAY, INTERIOR AND LEATHER TREATMENTS WITH FABRIC PROTECTION FOLLOWED BY CERAMIC QUARTZ COATINGS FOR MAXIMUM DURABILITY.",
    "A ‘OUTCLASS DETAIL’ IS THE DEFINITIVE CAR CARE SOLUTION FOR AN INDIVIDUAL WITH A BURNING PASSION FOR THEIR PRIDE AND JOY.",
    "50+ HOURS WILL BE SPENT METICULOUSLY PREPPING, POLISHING, PERFECTING AND PROTECTING YOUR VEHICLE THROUGHOUT.",
    "*IT IS IMPORTANT THAT A VEHICLE IS PUT THROUGH A THOROUGH EXAMINATION PROCESS TO HELP HIGHLIGHT AREAS OF IMPORTANCE AND ANY ANOMALIES THAT MAY BE FOUND ON THE WAY.",
  ];

  const newCarDetail = [
    "ALL IN, THE BEST START IN LIFE FOR YOUR INVESTMENT.",
    "NEW CAR DETAIL TAKES 2-3 DAYS AND COMPRISES OF SOME OF THE INDUSTRIES’ FINEST TOOLS, CHEMICALS AND COATINGS; PROTECTING YOUR INVESTMENT FOR 24 MONTHS.",
    "GIVING PAINTWORK UV RESISTANCE, DIRT REPELLENCY, EASY CLEAN AND SWIRL RESISTANCE THANKS TO THE STATE OF THE ART NANO QUARTZ COATINGS, ALLOY WHEELS ARE REMOVED TO BE COATED INSIDE AND OUT, EXTERIOR GLASS SEALED WITH A DURABLE RAIN REPELLENT, INTERIOR UPHOLSTERY TREATED TO A SCOTCH GUARD FABRIC PROTECTANT AND LEATHER SEATS RECEIVING A WATER-BASED DIRT & DYE TRANSFER BARRIER.",
  ];

  return (
    <React.Fragment>
      <Center>
        <SimpleGrid columns={2} spacing={12}>
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              MASTER CORRECTION
            </Text>

            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"green.300"}
            >
              MULTI-STAGE CORRECTION
            </Text>
            <Flex
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.100"}
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              padding={6}
              borderRadius={"base"}
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 5px 30px"}
              gap={4}
              height={"full"}
            >
              {carDetailingSteps.map((detailing) => {
                return (
                  <Text
                    key={detailing}
                    textAlign={"start"}
                    fontSize={"xs"}
                    letterSpacing={"2px"}
                    textColor={"white"}
                  >
                    {detailing}
                  </Text>
                );
              })}
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              GOLD - PAINT ENHANCEMENT
            </Text>

            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"green.300"}
            >
              2 - STAGE MILD CORRECTION
            </Text>
            <Flex
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.100"}
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              padding={6}
              borderRadius={"base"}
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 5px 30px"}
              gap={4}
              height={"full"}
            >
              {carDetailingStepsTwo.map((detailing) => {
                return (
                  <Text
                    key={detailing}
                    textAlign={"start"}
                    fontSize={"xs"}
                    letterSpacing={"2px"}
                    textColor={"white"}
                  >
                    {detailing}
                  </Text>
                );
              })}
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              PRIME PLUS - PAINT CORRECTION
            </Text>
            <Flex
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.100"}
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              padding={6}
              borderRadius={"base"}
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 5px 30px"}
              gap={4}
              height={"full"}
            >
              {paintCorrectionDetail.map((detailing) => {
                return (
                  <Text
                    key={detailing}
                    textAlign={"start"}
                    fontSize={"xs"}
                    letterSpacing={"2px"}
                    textColor={"white"}
                  >
                    {detailing}
                  </Text>
                );
              })}
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              OUTCLASS SIGNATURE DETAIL
            </Text>

            <Flex
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.100"}
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              padding={6}
              borderRadius={"base"}
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 5px 30px"}
              gap={4}
              height={"full"}
            >
              {carCarePackage.map((detailing) => {
                return (
                  <Text
                    key={detailing}
                    textAlign={"start"}
                    fontSize={"xs"}
                    letterSpacing={"2px"}
                    textColor={"white"}
                  >
                    {detailing}
                  </Text>
                );
              })}
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={2}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              SHOWROOM CAR DETAIL
            </Text>
            <Flex
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.100"}
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              padding={6}
              borderRadius={"base"}
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 5px 30px"}
              gap={4}
              height={"full"}
            >
              {newCarDetail.map((detailing) => {
                return (
                  <Text
                    key={detailing}
                    textAlign={"start"}
                    fontSize={"xs"}
                    letterSpacing={"2px"}
                    textColor={"white"}
                  >
                    {detailing}
                  </Text>
                );
              })}
            </Flex>
          </Flex>
        </SimpleGrid>
      </Center>
    </React.Fragment>
  );
};

export default withLandingLayout(Detailing);
