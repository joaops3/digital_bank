import React from "react";
//import TableStatement from "../../../components/table/Table";
import MainContainer from "../../../../components/UI/MainContainer";
import dynamic from "next/dynamic";
import { Tr, Th, Td } from "@chakra-ui/react";
import TableItem from "../../../../components/table/TableItem";
const TableStatement = dynamic(() => import("../../../../components/table/Table"), { ssr: false });


const Statement = () => {
  return (
    <>
      <MainContainer>
        <TableStatement
          tableCaption="Extrato"
          tableHead={
            <>
              <Th> Nome</Th>
              <Th> Data</Th>
              <Th> Valor</Th>
            </>
          }
        >
          <TableItem active={true} name="nome" date="2000-02-10" value="1000.00"></TableItem>
          <TableItem active={false} name="nome" date="04/02/2022" value="1000.00"></TableItem>
          <TableItem active={true} name="nome" date="04/02/2022" value="1000.00"></TableItem>
        </TableStatement>
      </MainContainer>
    </>
  );
};

export default Statement;
