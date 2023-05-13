import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useLocal from "../../hooks/useLocal";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageOne from "../../public/detailing_thirteen.jpg";

export const PaintEnhancement = () => {
  const { translations } = useLocal();
  const [isReadmeClosed, setIsReadmeClosed] = useState<boolean>(true);

  return (
    <motion.div
      style={{ flex: 1 }}
      key={isReadmeClosed as any}
      initial={{ opacity: 0, height: "0" }}
      animate={{ opacity: 1, height: "100%" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Flex direction={"column"} gap={2}>
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
          <Flex
            direction={"column"}
            width={"full"}
            height={"full"}
            backgroundColor={"whiteAlpha.100"}
            padding={2}
            gap={1}
            borderRadius={"base"}
          >
            <Text
              textAlign={"center"}
              fontSize={"lg"}
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {translations.detailingPaintEnhancement}
            </Text>

            <Text
              textAlign={"center"}
              fontSize={"md"}
              letterSpacing={"2px"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
              textColor={"green.300"}
            >
              {translations.detailingMildCorrection}
            </Text>
          </Flex>
          {translations.detailingStepsTwo.map((detailing, index) => {
            return (
              <Text
                hidden={index > 2 && isReadmeClosed}
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
          <Button
            onClick={() => setIsReadmeClosed(!isReadmeClosed)}
            width={"full"}
            textColor={"gray.900"}
            backgroundColor={"whiteAlpha.500"}
            size={{ base: "sm", md: "md" }}
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
              {isReadmeClosed ? translations.showMore : translations.showLess}
            </Text>
          </Button>

          <Flex gap={4} justify={"space-between"}>
            <Image
              quality={75}
              className="services-images"
              style={{
                width: "100%",
                height: "320px",
                borderRadius: "0.25rem",
                objectFit: "cover",
                cursor: "pointer",
              }}
              src={ImageOne}
              alt="work-one"
              sizes="50vw"
            />
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};
