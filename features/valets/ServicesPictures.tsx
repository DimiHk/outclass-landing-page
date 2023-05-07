import { SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import ImageOne from "../../public/work-one.webp";
import ImageTwo from "../../public/work-two.webp";
import ImageThre from "../../public/work-three.webp";
import ImageFour from "../../public/work-four.webp";
import ImageFive from "../../public/work-five.webp";
import ImageSix from "../../public/work-six.webp";
import ImageTen from "../../public/work-ten.webp";
import ImageTwelve from "../../public/work-twelve.webp";
import React from "react";

const ServicesPictures = () => {
  return (
    <SimpleGrid
      marginTop={8}
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      spacing={12}
      position={"relative"}
    >
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
        }}
        src={ImageOne}
        alt="work-one"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
          height: "-webkit-fill-available",
        }}
        src={ImageTwo}
        alt="work-two"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
        }}
        src={ImageThre}
        alt="work-two"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
        }}
        src={ImageFour}
        alt="work-two"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
        }}
        src={ImageFive}
        alt="work-two"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
        }}
        src={ImageSix}
        alt="work-two"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
          height: "-webkit-fill-available",
        }}
        src={ImageTen}
        alt="work-two"
        sizes="50vw"
      />
      <Image
        quality={75}
        className="services-images"
        style={{
          borderRadius: "0.25rem",
          objectFit: "cover",
          cursor: "pointer",
          height: "-webkit-fill-available",
        }}
        src={ImageTwelve}
        alt="work-two"
        sizes="50vw"
      />
    </SimpleGrid>
  );
};

export default ServicesPictures;
