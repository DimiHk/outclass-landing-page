import { ComponentType } from "react";
import OutclassInfoHeader from "../components/OutclassInfoHeader";
import OutclassNavigation from "../components/OutclassNavigation";
import React from "react";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }: { children: any }) => {
  return (
    <React.Fragment>
      <OutclassInfoHeader />
      <OutclassNavigation />
      <Flex
        direction={"column"}
        width={"full"}
        height={"full"}
        justify={"center"}
        padding={"1rem"}
        gap={6}
      >
        {children}
      </Flex>
    </React.Fragment>
  );
};

const withLandingLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const withLandingLayout: React.FC<P> = (props) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
  return withLandingLayout;
};

export default withLandingLayout;
