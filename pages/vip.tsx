import React from "react";
import withLandingLayout from "../layouts/LandingPageLayout";
import { AspectRatio, Center, Grid, GridItem } from "@chakra-ui/react";
import VipHeader from "../features/vip/VipHeader";
import EliteSubscription from "../features/vip/EliteSubscription";
import VicePresidenteSubscription from "../features/vip/VicePresidenteSubscription";
import useBrakepoints from "../hooks/useBreakpoints";

const Vip = () => {
  const brakepoint = useBrakepoints();

  return (
    <React.Fragment>
      <VipHeader />
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" gap={12}>
          <GridItem colSpan={brakepoint === "md" ? 2 : 1} h={"100%"}>
            <EliteSubscription />
          </GridItem>

          <GridItem colSpan={brakepoint === "md" ? 2 : 1} h={"100%"}>
            <VicePresidenteSubscription />
          </GridItem>

          <GridItem h={{ base: "100vh", lg: "100vh" }} colSpan={2}>
            <AspectRatio ratio={16 / 9}>
              <video
                style={{
                  width: "100%",
                  height: brakepoint === "md" ? "100vh" : "450px",
                  objectFit: "cover",
                  aspectRatio: "auto",
                  borderRadius: "0.5rem",
                }}
                src="vip.mp4"
                muted
                autoPlay
                loop
              />
            </AspectRatio>
          </GridItem>
        </Grid>
      </Center>
    </React.Fragment>
  );
};

export default withLandingLayout(Vip);
