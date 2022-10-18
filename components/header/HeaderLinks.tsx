import React, { forwardRef } from 'react'
import {
  Flex,
  HStack,
  Text,
  Icon,
  Avatar,
  Button,
  Image,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiChevronDown, BiPhone } from "react-icons/bi";
import MenuItem from "./MenuItem";

interface Props {

}

const HeaderLinks = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx="10"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Operações
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href="#">Tranferência</MenuItem>

          <MenuItem href="#">Pix</MenuItem>
          <MenuItem href="#">Pagar Boleto</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx="10"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Saldo
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href="#">Extrato</MenuItem>

          <MenuItem href="#">Cadastrar Chave Pix</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<BiPhone></BiPhone>}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx="10"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Suporte
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href="#">Whatsapp</MenuItem>

          <MenuItem href="#">Telefone</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
});

export default HeaderLinks