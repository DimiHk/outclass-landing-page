import React from "react";
import withLandingLayout from "../layouts/LandingPageLayout";
import { Box, Stack } from "@chakra-ui/react";
import MasterCorrection from "../features/detailing/MasterCorrection";
import { PaintEnhancement } from "../features/detailing/PaintEnhancement";
import { PlatiniumCorrection } from "../features/detailing/PlatiniumCorrection";
import { SignatureDetailing } from "../features/detailing/SignatureDetailing";
import ShowRoom from "../features/detailing/ShowRoom";

const Detailing = () => {
  return (
    <React.Fragment>
      <Stack
        spacing={8}
        direction={{ base: "column", xl: "row" }}
        align={"flex-start"}
        padding={4}
      >
        <MasterCorrection />
        <PaintEnhancement />
        <PlatiniumCorrection />
      </Stack>
      <Box width={"full"} height={"full"} padding={4}>
        <video
          style={{
            width: "100%",
            height: "550px",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
          src="detailingVideo.mp4"
          muted
          autoPlay
          loop
        />
      </Box>
      <Stack
        spacing={8}
        direction={"column"}
        justify={"flex-start"}
        align={"flex-start"}
        padding={4}
      >
        <SignatureDetailing />
        <ShowRoom />
      </Stack>
    </React.Fragment>
  );
};

export default withLandingLayout(Detailing);
