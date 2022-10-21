import React from "react";
import {
  Flex,
  VStack,
  Input as ChakraInput,
  InputGroup,
  FormLabel,
  FormControl,
  InputLeftElement,
  FormHelperText,
  Button,
  FormErrorMessage,
  Image,
  Box,
  Heading,
  Text,IconButton,
  SimpleGrid
} from "@chakra-ui/react";
import MainContainer from "../../../components/UI/MainContainer";
import { IdentificationCard, At, DeviceMobile, QrCode } from "phosphor-react";

const pix_register = () => {
  return (
    <>
      <MainContainer>
        <Flex direction={"column"} p="8" alignItems={"center"} minWidth="100%" justifyContent="center">
          <SimpleGrid
            gap="4"
            minChildWidth={"320px"}
           
            column="4"
            flex={1}
            display="flex"
            justifyContent={"center"}
            flexDirection={"row"}
          >
            <IconButton
              colorScheme="green"
              aria-label="select pix button "
              size="lg"
              p="10"
              py="20"
              
              icon={<IdentificationCard size={100} />}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              icon={<At size={100} />}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              icon={<DeviceMobile size={100} />}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              icon={<QrCode size={100} />}
            ></IconButton>
          </SimpleGrid>

          <InputGroup  mt="5">
            <InputLeftElement pointerEvents="none" children={<DeviceMobile size={30} />} />
            <ChakraInput type="tel" placeholder="Phone number" />
          </InputGroup>
       
        </Flex>
      </MainContainer>
    </>
  );
};

export default pix_register;
