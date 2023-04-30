import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot } from "@fortawesome/pro-regular-svg-icons";
import { faCheckCircle, faCircleXmark } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <Box width={"full"} height={"full"} backgroundColor={"blackAlpha.900"}>
      <Flex
        padding={3}
        position={"relative"}
        backgroundColor={"whiteAlpha.200"}
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
        padding={1}
        marginTop={4}
      >
        <Image
          cursor={"pointer"}
          objectFit={"cover"}
          height={"64px"}
          src="outclass-logo-variant.gif"
          alt="Dan Abramov"
        />
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
        padding={4}
        gap={12}
        marginTop={4}
      >
        <Flex direction={"column"} gap={2}>
          <Text
            textAlign={"center"}
            fontSize={"x-large"}
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            OUTCLASS VALETS
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"large"}
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"semibold"}
            fontStyle={"italic"}
          >
            {
              "UNLEASH YOUR CAR'S POTENTIAL! DISCOVER OUR SPECIALIZED DETAILING VALET PACKAGES"
            }
          </Text>
        </Flex>
        <Flex justify={"center"} gap={6} align={"flex-start"}>
          <Flex
            minWidth={"md"}
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
          </Flex>

          <Flex
            minWidth={"md"}
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
          </Flex>

          <Flex
            minWidth={"md"}
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
                PLATINIUM VALET
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"md"}
                letterSpacing={"2px"}
                textColor={"green.300"}
                fontWeight={"bold"}
              >
                500€ / PACK
              </Text>
            </Flex>
            <Divider opacity={"10%"} />
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
                  WATERPROOFING FABRICS
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
                  LEATHER PROTECTION
                </Text>
                <FontAwesomeIcon
                  opacity={"85%"}
                  icon={faCheckCircle}
                  color={"lightGreen"}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Services;
