import { Table, Thead, Tbody, Tr, TableCaption, Flex, Box } from "@chakra-ui/react"
import React from 'react'

interface Props {
  tableHead: React.ReactNode
  tableCaption?: string
  children: React.ReactNode
}

const TableStatement: React.FC<Props> = ({tableCaption, tableHead, children}) => {
  return (
    <Table bg="gray.100" boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"} borderRadius={"8"}>
      <Thead>
        <TableCaption fontSize={{ base: 20, md: 40 }}>{tableCaption}</TableCaption>
        <Tr borderBottom={"gray.900"}>{tableHead}</Tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  );
}

export default TableStatement