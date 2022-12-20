import {
  Flex,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MainContainer from "../../../../components/UI/MainContainer";
import { Gear } from "phosphor-react";

const Whatsapp = () => {
 

  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" alignItems={"center"} gap="5" mb="5">
          <Heading color={"gray.600"}>To do</Heading>

          <Gear size={300} />
        </Flex>
      </MainContainer>
    </>
  );
};

export default Whatsapp;
