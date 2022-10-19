import React from 'react'
import { Tr, Th, Td } from "@chakra-ui/react";

interface Props {
  name: string
  date: string
  value: string
  active: boolean

}


const TableItem: React.FC<Props> = ({active=false, name, value, date}) => {
  return (
    <>
      <Tr color={`${active ? "green.300" : "red.400"}`}>
        <Td borderColor={"gray.300"}>{name}</Td>
        <Td borderColor={"gray.300"}>{date}</Td>
        <Td borderColor={"gray.300"}>{value}</Td>
      </Tr>
    </>
  );
}

export default TableItem