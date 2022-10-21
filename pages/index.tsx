import type { NextPage } from 'next'
import Head from 'next/head'

import {Flex, VStack, Input as ChakraInput, Link, InputGroup, FormLabel, Box, FormControl, InputLeftElement, FormHelperText, Button, FormErrorMessage, Image, Text} from "@chakra-ui/react"

import {User, LockSimple} from "phosphor-react"



const Home: NextPage = () => {
  return (
    <>
      <Flex w={"100%"} height={"100vh"} align={"center"} justify={"center"}>
        <Flex
          as={"form"}
          bg={"gray.200"}
          w="100%"
          maxWidth={360}
          direction={"column"}
          p={5}
          px="8"
          borderRadius="8"
          boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}
       
        >
          <VStack spacing={"5"}>
            <Image src="/logo.svg" p="5" py="7"></Image>
            <FormControl isInvalid={true} display="flex" justifyContent={"center"}>
              <FormErrorMessage my={3}>E-mail ou senha incorretos!</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="e-mail">E-mail</FormLabel>
              <InputGroup>
                <InputLeftElement children={<User size={20} />} />
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
                <InputLeftElement children={<LockSimple size={20} />} />
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
              <Link href="/forgot_password" _hover={{ color: "green.400" }}>
                <FormHelperText color={"green.800"} _hover={{ color: "green.600" }} cursor="pointer">
                  Esqueci minha senha
                </FormHelperText>
              </Link>
            </FormControl>

            <Button type="submit" mt="3" width={"40%"} colorScheme={"whatsapp"} size="md">
              Login
            </Button>

            <Box textAlign={"left"} w="100%">
              <Text>
                Não Possui conta ?{" "}
                <Link href="/sign" _hover={{ color: "green.400" }}>
                  Cadastrar
                </Link>
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

export default Home
