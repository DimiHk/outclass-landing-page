import {
  Button,
  Flex,
  Text,
  Divider,
  Badge,
  Select,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot } from "@fortawesome/pro-regular-svg-icons";
import { faCheckCircle, faCircleXmark } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const Services = () => {
  const [currentPlanType, setcurrentPlanType] = useState<string>("INTERIOR");

  const handleSelectChange = (event) => {
    setcurrentPlanType(event.target.value);
  };

  return (
    <React.Fragment>
      <Flex
        padding={3}
        backgroundColor={"whiteAlpha.1080"}
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
            <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"2xs"}>
              WHERE TO FIND US <FontAwesomeIcon icon={faLocationDot} />
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        justify={"space-between"}
        align={"center"}
        padding={"1rem"}
        position={"relative"}
        top={0}
      >
        {/*  <Image
          style={{
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={150}
          height={150}
          src={require("../public/outclass-logo-variant.gif")}
          alt="Dan Abramov"
        /> */}
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
            backgroundColor={"whiteAlpha.500"}
            boxShadow={"dark-lg"}
            _hover={{
              backgroundColor: "whiteAlpha.100",
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
        width={"full"}
        justify={"center"}
        padding={"1rem"}
        gap={6}
      >
        <Flex direction={"column"} padding={"0.5rem"}>
          <Text
            textAlign={"center"}
            fontSize={"xl"}
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            OUTCLASS VALETS
          </Text>
          <Flex
            gap={4}
            w={"full"}
            justify={"center"}
            align={"center"}
            padding={"0.275rem"}
          >
            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"white"}
            >
              <span style={{ color: "#68D391" }}>{"DISCOVER "} </span>OUR
              <span style={{ color: "#68D391" }}>{" SPECIALIZED "}</span>
              DETAILING
              <span style={{ color: "#68D391" }}>{" VALET "}</span> PACKAGES
            </Text>
            <Select
              cursor={"pointer"}
              textColor={"white"}
              fontWeight={"bold"}
              letterSpacing={"2px"}
              width="fit-content"
              iconColor={"white"}
              fontSize={"xs"}
              value={currentPlanType}
              onChange={handleSelectChange}
            >
              <option
                value={"INTERIOR"}
                style={{ color: "black", cursor: "pointer" }}
              >
                INTERIOR
              </option>
              <option
                value={"EXTERIOR"}
                style={{ color: "black", cursor: "pointer" }}
              >
                EXTERIOR
              </option>
            </Select>
          </Flex>
        </Flex>

        <Flex justify={"center"} gap={6} align={"flex-start"} padding={4}>
          <Flex
            minWidth={"sm"}
            direction={"column"}
            cursor={"pointer"}
            backgroundColor={"whiteAlpha.200"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
            padding={2}
            paddingRight={6}
            paddingLeft={6}
            shadow={"dark-lg"}
            borderRadius={"base"}
            gap={2}
          >
            <Flex justify={"space-between"} padding={2} align={"center"}>
              <Text
                textAlign={"center"}
                fontSize={"lg"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
              >
                SILVER VALET
              </Text>

              <Text
                textAlign={"center"}
                fontSize={"md"}
                letterSpacing={"2px"}
                textColor={"green.300"}
                fontWeight={"bold"}
              >
                110€ / PACK
              </Text>
            </Flex>
            <Divider opacity={"10%"} />
            <motion.div
              key={currentPlanType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              {currentPlanType === "INTERIOR" ? (
                <Flex gap={3.5} padding={4} direction={"column"}>
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      METICULOS VACUUM
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      COMPRESSED AIR TECHNIQUE
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>

                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      WASHED UPHOLSTERY
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCircleXmark}
                      color={"danger"}
                      style={{ color: "#F56565" }}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      CLEAN CARPET
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      CLEAN INTERIOR COPARTIMENT & CONDITIONED
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      AIR FRESHENER
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>

                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      COMPLETE HYGIENIZATION - INTERIOR CONDITIONING
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCircleXmark}
                      color={"danger"}
                      style={{ color: "#F56565" }}
                    />
                  </Flex>
                </Flex>
              ) : (
                <Flex gap={3.5} padding={4} direction={"column"}>
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      {
                        <Badge
                          letterSpacing={"2px"}
                          fontWeight={"light"}
                          colorScheme={"green"}
                          textAlign={"center"}
                        >
                          5 STEP
                        </Badge>
                      }
                      {" WASH"}
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      DETAILED ALLOYS
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>

                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      WHELL ARM WHOLES
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      DETAILED BRUSH USAGE FOR DIFFICULT ACCESS AREAS
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      TOWEL DRIED
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                  <Divider opacity={"10%"} />
                  <Flex gap={2}>
                    <Text
                      letterSpacing={"2px"}
                      textColor={"white"}
                      fontWeight={"light"}
                      fontSize={"2xs"}
                    >
                      TIRE & PLASTIC - DRESSING
                    </Text>
                    <FontAwesomeIcon
                      opacity={"85%"}
                      icon={faCheckCircle}
                      color={"lightGreen"}
                    />
                  </Flex>
                </Flex>
              )}
            </motion.div>
          </Flex>
          <Box maxWidth={"md"} position={"relative"}>
            <Text
              position={"absolute"}
              borderRadius={"base"}
              top={-4}
              right={145}
              backgroundColor={"green.100"}
              paddingRight={"12px"}
              paddingLeft={"12px"}
              paddingTop={"6px"}
              paddingBottom={"6px"}
              letterSpacing={"2px"}
              fontSize={"2xs"}
              textColor={"green.800"}
              fontWeight={"semibold"}
              shadow={"dark-lg"}
            >
              MOST SELLED VALET
            </Text>
            <Flex
              direction={"column"}
              cursor={"pointer"}
              backgroundColor={"whiteAlpha.200"}
              _hover={{ backgroundColor: "whiteAlpha.100" }}
              padding={2}
              paddingRight={6}
              paddingLeft={6}
              shadow={"dark-lg"}
              borderRadius={"base"}
              gap={2}
            >
              <Flex justify={"space-between"} padding={2} align={"center"}>
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  letterSpacing={"2px"}
                  textColor={"white"}
                  fontWeight={"light"}
                >
                  GOLD VALET
                </Text>

                <Text
                  textAlign={"center"}
                  fontSize={"md"}
                  letterSpacing={"2px"}
                  textColor={"green.300"}
                  fontWeight={"bold"}
                >
                  300€ / PACK
                </Text>
              </Flex>
              <Divider opacity={"10%"} />
              <motion.div
                key={currentPlanType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                {currentPlanType === "INTERIOR" ? (
                  <Flex gap={3.5} padding={4} direction={"column"}>
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        METICULOS VACUUM
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        COMPRESSED AIR TECHNIQUE
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>

                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        WASHED UPHOLSTERY
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        CLEAN CARPET
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={4} justify={"space-between"} align={"center"}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        CLEAN INTERIOR COPARTIMENT & CONDITIONED
                      </Text>
                      <Badge colorScheme="green">DEEP CLEAN</Badge>
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        AIR FRESHENER
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>

                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        COMPLETE HYGIENIZATION - INTERIOR CONDITIONING
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                  </Flex>
                ) : (
                  <Flex gap={3.5} padding={4} direction={"column"}>
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        {
                          <Badge
                            letterSpacing={"2px"}
                            fontWeight={"light"}
                            colorScheme={"green"}
                            textAlign={"center"}
                          >
                            7 STEP
                          </Badge>
                        }
                        {" WASH"}
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        DETAILED ALLOYS AND TABS
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>

                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        DETAILED DOORS AND FOOTSTEPS
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        DETAILED BRUSH USAGE FOR DIFFICULT ACCESS AREAS
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        TOWEL DRIED
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        TIRE & PLASTIC - DRESSING
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        DETAILED ENGINE BAY
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                    <Divider opacity={"10%"} />
                    <Flex gap={2}>
                      <Text
                        letterSpacing={"2px"}
                        textColor={"white"}
                        fontWeight={"light"}
                        fontSize={"2xs"}
                      >
                        POLISHED EXHAUST TIPS
                      </Text>
                      <FontAwesomeIcon
                        opacity={"85%"}
                        icon={faCheckCircle}
                        color={"lightGreen"}
                      />
                    </Flex>
                  </Flex>
                )}
              </motion.div>
            </Flex>
          </Box>
          <Flex
            position={"relative"}
            minWidth={"sm"}
            direction={"column"}
            cursor={"pointer"}
            backgroundColor={"whiteAlpha.200"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
            padding={2}
            paddingRight={6}
            paddingLeft={6}
            shadow={"dark-lg"}
            borderRadius={"base"}
            gap={2}
          >
            <Text
              position={"absolute"}
              borderRadius={"base"}
              top={-4}
              right={120}
              backgroundColor={"cyan.100"}
              paddingRight={"12px"}
              paddingLeft={"12px"}
              paddingTop={"6px"}
              paddingBottom={"6px"}
              letterSpacing={"2px"}
              fontSize={"2xs"}
              textColor={"cyan.800"}
              fontWeight={"semibold"}
              shadow={"dark-lg"}
            >
              TOP TIER VALET
            </Text>
            <Flex justify={"space-between"} padding={2} align={"center"}>
              <Text
                textAlign={"center"}
                fontSize={"lg"}
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
              >
                PLAT VALET
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"md"}
                letterSpacing={"2px"}
                textColor={"green.300"}
                fontWeight={"bold"}
              >
                650€ / PACK
              </Text>
            </Flex>
            <Divider opacity={"10%"} />
            <motion.div
              key={currentPlanType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Flex gap={3.5} padding={4} direction={"column"}>
                <Flex gap={2}>
                  <Text
                    letterSpacing={"2px"}
                    textColor={"white"}
                    fontWeight={"light"}
                    fontSize={"2xs"}
                  >
                    1X GOLD VALET
                  </Text>
                  <FontAwesomeIcon
                    opacity={"85%"}
                    icon={faCheckCircle}
                    color={"lightGreen"}
                  />
                </Flex>
                <Divider opacity={"10%"} />
                <Flex gap={2}>
                  <Text
                    letterSpacing={"2px"}
                    textColor={"white"}
                    fontWeight={"light"}
                    fontSize={"2xs"}
                  >
                    TECHNICAL POLISHMENT
                  </Text>
                  <FontAwesomeIcon
                    opacity={"85%"}
                    icon={faCheckCircle}
                    color={"lightGreen"}
                  />
                </Flex>

                <Divider opacity={"10%"} />
                <Flex gap={2}>
                  <Text
                    letterSpacing={"2px"}
                    textColor={"white"}
                    fontWeight={"light"}
                    fontSize={"2xs"}
                  >
                    PAINT PROTECTION
                  </Text>
                  <FontAwesomeIcon
                    opacity={"85%"}
                    icon={faCheckCircle}
                    color={"lightGreen"}
                  />
                </Flex>
                <Divider opacity={"10%"} />
                <Flex gap={2}>
                  <Text
                    letterSpacing={"2px"}
                    textColor={"white"}
                    fontWeight={"light"}
                    fontSize={"2xs"}
                  >
                    CERAMIC COATING ON ALLOYS
                  </Text>
                  <FontAwesomeIcon
                    opacity={"85%"}
                    icon={faCheckCircle}
                    color={"lightGreen"}
                  />
                </Flex>
                <Divider opacity={"10%"} />
                <Flex gap={2}>
                  <Text
                    letterSpacing={"2px"}
                    textColor={"white"}
                    fontWeight={"light"}
                    fontSize={"2xs"}
                  >
                    WATERPROOFING FABRICS 12 MONTHS
                  </Text>
                  <FontAwesomeIcon
                    opacity={"85%"}
                    icon={faCheckCircle}
                    color={"lightGreen"}
                  />
                </Flex>
                <Divider opacity={"10%"} />
                <Flex gap={2}>
                  <Text
                    letterSpacing={"2px"}
                    textColor={"white"}
                    fontWeight={"light"}
                    fontSize={"2xs"}
                  >
                    LEATHER PROTECTION 12 MONTHS
                  </Text>
                  <FontAwesomeIcon
                    opacity={"85%"}
                    icon={faCheckCircle}
                    color={"lightGreen"}
                  />
                </Flex>
              </Flex>
            </motion.div>
          </Flex>
        </Flex>
        <Divider opacity={"10%"} />
        <Flex
          direction={"column"}
          width={"full"}
          justify={"center"}
          padding={"1rem"}
          gap={6}
        >
          <Flex direction={"column"} padding={"0.5rem"}>
            <Text
              textAlign={"center"}
              fontSize={"xl"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              SERVICES PICTURES
            </Text>
            <Flex
              gap={4}
              w={"full"}
              justify={"center"}
              align={"center"}
              padding={"0.275rem"}
            >
              <Text
                textAlign={"center"}
                fontSize={"md"}
                letterSpacing={"2px"}
                fontWeight={"semibold"}
                fontStyle={"italic"}
                textColor={"white"}
              >
                <span style={{ color: "#68D391" }}>{"CHECK "} </span> OUT
                <span style={{ color: "#68D391" }}>{" SOME "} </span> OF THE
                <span style={{ color: "#68D391" }}>{" AMAZING "}</span>
                WORK DONE BY OUR
                <span style={{ color: "#68D391" }}>{" TEAM "}</span>!
              </Text>
            </Flex>

            <SimpleGrid
              marginTop={8}
              columns={4}
              spacing={12}
              position={"relative"}
            >
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                width={1080}
                src={"/images/work-one.webp"}
                alt="work-one"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  height: "-webkit-fill-available",
                }}
                width={1080}
                src={"/images/work-two.webp"}
                alt="work-two"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                width={1080}
                src={"/images/work-three.webp"}
                alt="work-two"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                width={1080}
                src={"/images/work-four.webp"}
                alt="work-two"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                width={1080}
                src={"/images/work-five.webp"}
                alt="work-two"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                width={1080}
                src={"/images/work-six.webp"}
                alt="work-two"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  height: "-webkit-fill-available",
                }}
                width={1080}
                src={"/images/work-ten.webp"}
                alt="work-two"
                height={1080}
              />
              <Image
                className="services-images"
                style={{
                  borderRadius: "0.25rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  height: "-webkit-fill-available",
                }}
                width={1080}
                src={"/images/work-twelve.webp"}
                alt="work-two"
                height={1080}
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Services;
