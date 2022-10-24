import React, { useState } from "react";
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
  Text,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import MainContainer from "../../../../components/UI/MainContainer";
import { IdentificationCard, At, DeviceMobile, QrCode } from "phosphor-react";

const Pix_register = () => {
  const [Value, setValue] = useState<string>("");
  const [selectedInput, setSelectedInput] = useState<string>("CPF");
  const changeInput = (): React.ReactNode => {
    switch (selectedInput) {
      case "MOBILE":
        return (
          <InputGroup mt="8" maxW={768}>
            <InputLeftElement pointerEvents="none">
              <DeviceMobile size={30} />{" "}
            </InputLeftElement>
            <ChakraInput type="tel" placeholder="Phone number" />
          </InputGroup>
        );
      case "EMAIL":
        return (
          <InputGroup mt="8" maxW={768}>
            <InputLeftElement pointerEvents="none">
              <At size={30} />
            </InputLeftElement>
            <ChakraInput type="email" placeholder="EMAIL" />
          </InputGroup>
        );
      case "CPF":
        return (
          <InputGroup mt="8" maxW={768}>
            <InputLeftElement pointerEvents="none">
              <IdentificationCard size={30} />
            </InputLeftElement>
            <ChakraInput type="number" placeholder="CPF" />
          </InputGroup>
        );
    }
  };

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
            flexDirection={["column", "row"]}
          >
            <IconButton
              colorScheme="green"
              aria-label="select pix button "
              size="lg"
              p="10"
              py="20"
              icon={<IdentificationCard size={100} />}
              onClick={() => {
                setSelectedInput("CPF");
              }}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              icon={<At size={100} />}
              onClick={() => {
                setSelectedInput("EMAIL");
              }}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              onClick={() => {
                setSelectedInput("MOBILE");
              }}
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
          {changeInput()}
          <Button size="lg" colorScheme={"whatsapp"} mt="8">
            Salvar
          </Button>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Pix_register;
