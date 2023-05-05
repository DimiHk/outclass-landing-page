import { Flex, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "../../public/outclass-logo-variant.gif";
import Link from "next/link";

const OutclassNavigation = () => {
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
      <Flex gap={12} justify={"space-evenly"} marginRight={100}>
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
            HOME
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
            VALETS
          </Text>
        </Link>
        <Text
          cursor={"pointer"}
          fontSize={"smaller"}
          color={"white"}
          padding={"0.5rem"}
          letterSpacing={"2px"}
          borderRadius={"base"}
          _hover={{ backgroundColor: "whiteAlpha.300", shadow: "xl" }}
        >
          PPF
        </Text>
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
            ABOUT US
          </Text>
        </Link>
        <Link href={"/vip"} prefetch={false}>
          <Button
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
              boxShadow={"rgba(154, 230, 180, 0.15)  0px 10px 50px"}
            >
              JOIN US !
            </Text>
            <Text
              fontWeight={"light"}
              letterSpacing={"2px"}
              fontSize={"smaller"}
            >
              VIP CLUB
            </Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default OutclassNavigation;
