import React, {useState} from 'react'
import {Flex, VStack, Input as ChakraInput, InputGroup, FormLabel, FormControl, InputLeftElement, FormHelperText, Button, FormErrorMessage, Text, Heading} from "@chakra-ui/react"
import { FaUserAlt, FaLock } from "react-icons/fa";
import Link from "next/link";
const forgot_password = () => {

  const [isSubmited, setIsSubmite] = useState<boolean>(false)

  return (
    <>
      <Flex w={"100%"} height={"100vh"} align={"center"} justify={"center"}>
        <Flex
          as={"form"}
          bg={"gray.200"}
          w="100%"
          maxWidth={340}
          direction={"column"}
          p={5}
          borderRadius="8"
          // boxShadow={"0 0 1rem 2px #9AE6B477"}
        >
          {isSubmited ? (
            <VStack spacing={"5"}>
              <Text>Recuperação de Email </Text>
              <FormControl>
                <FormLabel htmlFor="e-mail">E-mail</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<FaUserAlt />} />
                  <ChakraInput
                    id="e-mail"
                    type={"e-mail"}
                    placeholder="E-mail"
                    size={"md"}
                    bg={"white"}
                    focusBorderColor="green.500"
                    colorScheme={"whatsapp"}
                  ></ChakraInput>
                </InputGroup>
              </FormControl>
              <Button type="submit" mt="3" width={"40%"} colorScheme={"whatsapp"} size="md">
                Enviar
              </Button>
            </VStack>
          ) : (
            <VStack spacing={"5"}>
              <Heading>E-mail enviado com sucesso</Heading>
              <FormControl>
                <FormLabel htmlFor="e-mail">E-mail</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<FaUserAlt />} />
                  <ChakraInput
                    id="e-mail"
                    type={"e-mail"}
                    placeholder="E-mail"
                    size={"md"}
                    bg={"white"}
                    focusBorderColor="green.500"
                    colorScheme={"whatsapp"}
                  ></ChakraInput>
                </InputGroup>
              </FormControl>
              <Button type="submit" mt="3" width={"40%"} colorScheme={"whatsapp"} size="md">
                Enviar
              </Button>
            </VStack>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default forgot_password