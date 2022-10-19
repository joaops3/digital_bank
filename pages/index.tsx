import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Flex, VStack, Input as ChakraInput, InputGroup, FormLabel, FormControl, InputLeftElement, FormHelperText, Button, FormErrorMessage} from "@chakra-ui/react"
import { FaUserAlt, FaLock } from "react-icons/fa";
import Link from "next/link"


const Home: NextPage = () => {
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
          <VStack spacing={"5"}>
            <FormErrorMessage my={3}>E-mail ou senha incorretos!</FormErrorMessage>
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
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaLock></FaLock>} />
                <ChakraInput
                  id="password"
                  type={"Password"}
                  placeholder="Password"
                  size={"md"}
                  bg={"white"}
                  focusBorderColor="green.500"
                  colorScheme={"whatsapp"}
                ></ChakraInput>
              </InputGroup>
              <Link href="/recovery">
                <FormHelperText color={"green.800"} _hover={{ color: "green.600" }} cursor="pointer">
                  Esqueci minha senha
                </FormHelperText>
              </Link>
            </FormControl>

            <Button type="submit" mt="3" width={"40%"} colorScheme={"whatsapp"} size="md">
              Login
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

export default Home
