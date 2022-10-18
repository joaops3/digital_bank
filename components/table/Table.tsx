import { Table, Thead, Tbody, Tr, TableCaption } from "@chakra-ui/react"
import React from 'react'

interface Props {
  tableHead: React.ReactNode
  tableCaption?: string
  children: React.ReactNode
}

const TableStatement: React.FC<Props> = ({tableCaption, tableHead, children}) => {
  return (
    <Table>
      <TableCaption>{tableCaption}</TableCaption>
      <Thead>
      <Tr>
      {tableHead}
      </Tr>
      </Thead>
      <Tbody>
        {children}
      </Tbody>
    </Table>
  )
}

export default TableStatement