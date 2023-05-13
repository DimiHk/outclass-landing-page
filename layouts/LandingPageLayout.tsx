import { ComponentType, useEffect } from "react";
import React from "react";
import { Flex } from "@chakra-ui/react";
import OutclassInfoHeader from "../components/OutclassInfoHeader";
import OutclassNavigation from "../components/OutclassNavigation";
import useQuery from "../hooks/useQuery";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: any }) => {
  const { isSmallerThanMd } = useQuery();
  const router = useRouter();
  useEffect(() => {
    if (document) {
      document.title = router.pathname.split("/")[1].toUpperCase();
    }
  }, [router.pathname]);

  return (
    <React.Fragment>
      {!isSmallerThanMd && <OutclassInfoHeader />}
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
