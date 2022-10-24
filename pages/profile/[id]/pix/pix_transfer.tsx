import {
  Text,
  Flex,
  HStack,
  IconButton,
  Input,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../../../../components/UI/Card";
import MainContainer from "../../../../components/UI/MainContainer";
import dynamic from "next/dynamic";
import { IdentificationCard, At, DeviceMobile, QrCode, Car } from "phosphor-react";

const Pix_transfer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step1, setStep1] = useState<boolean>(false);
  const [step2, setStep2] = useState<boolean>(false);
  const [pixType, setPixType] = useState<string>("EMAIL");
  const [value, setValue] = useState<string>("");
  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" gap="5" mb="5">
          <Heading>PIX</Heading>
          <Card title="seus Dados">
            <Text as="p">
              <strong>Chave Pix: </strong> 1211121
            </Text>
            <Text as="p">
              <strong>Tipo Pix: </strong> CPF
            </Text>
            <Text as="p">
              <strong>Saldo: </strong> 1000,00
            </Text>
          </Card>

          <Card title="Transferência">
            <HStack display={"flex"} justifyContent="center" w="100%" mx="auto">
              <IconButton
                aria-label="pix type button"
                colorScheme={"green"}
                onClick={() => setPixType("EMAIL")}
                icon={<IdentificationCard size={30} />}
              ></IconButton>
              <IconButton
                aria-label="pix type button"
                onClick={() => setPixType("CPF")}
                colorScheme={"green"}
                icon={<At size={30} />}
              ></IconButton>
              <IconButton
                aria-label="pix type button"
                colorScheme={"green"}
                onClick={() => setPixType("Mobile")}
                icon={<DeviceMobile size={30} />}
              ></IconButton>
            </HStack>
            <Text mt="5">
              <strong>Tipo: </strong> {pixType}
            </Text>
            <Input type={"text"} placeholder="Digite a chave pix..."></Input>
            <Input
              mt="5"
              type={"number"}
              placeholder="Valor"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></Input>
            <Flex w="100%" mt="5" justifyContent={"center"}>
              <Button colorScheme={"whatsapp"} onClick={onOpen} isDisabled={value === "" ? true : false}>
                Enviar
              </Button>
            </Flex>
          </Card>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Comfirmação</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  <strong>Dados destinatario: </strong>joao
                </Text>
                <Text>
                  <strong>Chave pix: </strong>joao
                </Text>
                <Text>
                  <strong>CPF: </strong> xxx.xxx.xxx-xx
                </Text>
                <Text>
                  <strong>Valor a ser enviado: </strong> R$ 1000,00
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme={"whatsapp"} mr={3}>
                  Confirmar
                </Button>
                <Button colorScheme="red" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* {step1 ? <Card title="confirmação"></Card> : <></>} */}
        </Flex>
      </MainContainer>
    </>
  );
};

export default Pix_transfer;
