import {
  Flex,
  Button,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Center,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "../public/outclass-logo-variant.gif";
import Link from "next/link";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useQuery from "../hooks/useQuery";
import OutclassInfoHeader from "./OutclassInfoHeader";
import useLocal from "../hooks/useLocal";

const OutclassNavigation = () => {
  const { isSmallerThanMd } = useQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { translations } = useLocal();

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      padding={"1rem"}
      position={"relative"}
    >
      <Link href={"/"} prefetch={false}>
        <Image
          style={{
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={150}
          height={150}
          src={Logo}
          alt="outclass-logo"
        />
      </Link>
      <Flex
        hidden={isSmallerThanMd ? true : false}
        gap={{ lg: 10, xl: 12 }}
        justify={"space-evenly"}
        marginRight={{ lg: 85, xl: 100 }}
      >
        <Link href={"/"} prefetch={false}>
          <Text
            cursor={"pointer"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            {translations.homeMenuText}
          </Text>
        </Link>
        <Link href={"/valets"} prefetch={false}>
          <Text
            cursor={"pointer"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            {translations.valetsMenuText}
          </Text>
        </Link>
        <Link href={"/detailing"} prefetch={false}>
          <Text
            cursor={"pointer"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            DETAILING
          </Text>
        </Link>
        <Link href={"/ppf"} prefetch={false}>
          <Text
            cursor={"pointer"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            {translations.ppfMenuText}
          </Text>
        </Link>
        <Link href={"/about"} prefetch={false}>
          <Text
            cursor={"pointer"}
            fontSize={"smaller"}
            color={"white"}
            padding={"0.5rem"}
            letterSpacing={"2px"}
            borderRadius={"base"}
            _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
          >
            {translations.aboutUs}
          </Text>
        </Link>
        <Link href={"/vip"} prefetch={false}>
          <Button
            position={"relative"}
            textColor={"white"}
            backgroundColor={"whiteAlpha.500"}
            _hover={{
              backgroundColor: "whiteAlpha.100",
              color: "white",
            }}
          >
            <Text
              position={"absolute"}
              borderRadius={"base"}
              bottom={8}
              backgroundColor={"green.200"}
              paddingRight={"12px"}
              paddingLeft={"12px"}
              paddingTop={"6px"}
              paddingBottom={"6px"}
              letterSpacing={"2px"}
              fontSize={"2xs"}
              textColor={"green.900"}
              fontWeight={"light"}
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 10px 50px"}
            >
              {translations.joinUsMenuText}
            </Text>
            <Text
              fontWeight={"light"}
              letterSpacing={"2px"}
              fontSize={"smaller"}
            >
              {translations.vipClubMenuText}
            </Text>
          </Button>
        </Link>
      </Flex>
      {isSmallerThanMd && (
        <FontAwesomeIcon
          color="white"
          style={{ marginRight: "1rem" }}
          size="lg"
          icon={faBars}
          onClick={onOpen}
        />
      )}
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

const MobileMenu = ({ isOpen, onClose }: any) => {
  const { translations } = useLocal();

  return (
    <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="lg" />
      <ModalContent backgroundColor={"blackAlpha.900"}>
        <ModalCloseButton color={"white"} size={"lg"} />

        <ModalBody
          justifyItems={"center"}
          alignItems={"center"}
          display={"flex"}
          padding={4}
        >
          <Center width={"full"} height={"full"}>
            <Flex direction={"column"} gap={12} justify={"space-evenly"}>
              <Link href={"/"} prefetch={false}>
                <Text
                  cursor={"pointer"}
                  fontSize={"smaller"}
                  color={"white"}
                  textAlign={"center"}
                  padding={"0.5rem"}
                  letterSpacing={"2px"}
                  borderRadius={"base"}
                  _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
                >
                  {translations.homeMenuText}
                </Text>
              </Link>
              <Link href={"/valets"} prefetch={false}>
                <Text
                  cursor={"pointer"}
                  fontSize={"smaller"}
                  color={"white"}
                  textAlign={"center"}
                  padding={"0.5rem"}
                  letterSpacing={"2px"}
                  borderRadius={"base"}
                  _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
                >
                  {translations.valetsMenuText}
                </Text>
              </Link>
              <Link href={"/detailing"} prefetch={false}>
                <Text
                  cursor={"pointer"}
                  fontSize={"smaller"}
                  color={"white"}
                  textAlign={"center"}
                  padding={"0.5rem"}
                  letterSpacing={"2px"}
                  borderRadius={"base"}
                  _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
                >
                  DETAILING
                </Text>
              </Link>
              <Link href={"/ppf"} prefetch={false}>
                <Text
                  cursor={"pointer"}
                  fontSize={"smaller"}
                  color={"white"}
                  textAlign={"center"}
                  padding={"0.5rem"}
                  letterSpacing={"2px"}
                  borderRadius={"base"}
                  _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
                >
                  {translations.ppfMenuText}
                </Text>
              </Link>
              <Link href={"/about"} prefetch={false}>
                <Text
                  cursor={"pointer"}
                  fontSize={"smaller"}
                  color={"white"}
                  padding={"0.5rem"}
                  textAlign={"center"}
                  letterSpacing={"2px"}
                  borderRadius={"base"}
                  _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
                >
                  {translations.aboutUs}
                </Text>
              </Link>
              <Link
                style={{ alignSelf: "center" }}
                href={"/vip"}
                prefetch={false}
              >
                <Button
                  position={"relative"}
                  textColor={"white"}
                  backgroundColor={"whiteAlpha.500"}
                  _hover={{
                    backgroundColor: "whiteAlpha.100",
                    color: "white",
                  }}
                >
                  <Text
                    position={"absolute"}
                    borderRadius={"base"}
                    bottom={8}
                    backgroundColor={"green.200"}
                    paddingRight={"12px"}
                    paddingLeft={"12px"}
                    paddingTop={"6px"}
                    paddingBottom={"6px"}
                    letterSpacing={"2px"}
                    textAlign={"center"}
                    fontSize={"2xs"}
                    textColor={"green.900"}
                    fontWeight={"light"}
                    boxShadow={"rgba(154, 230, 180, 0.15)  0px 10px 50px"}
                  >
                    {translations.joinUsMenuText}
                  </Text>
                  <Text
                    fontWeight={"light"}
                    letterSpacing={"2px"}
                    textAlign={"center"}
                    fontSize={"smaller"}
                  >
                    {translations.vipClubMenuText}
                  </Text>
                </Button>
              </Link>
            </Flex>
          </Center>
        </ModalBody>
        <Divider opacity={"10%"} />
        <OutclassInfoHeader />
      </ModalContent>
    </Modal>
  );
};

export default OutclassNavigation;
