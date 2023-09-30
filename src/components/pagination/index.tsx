/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPokemon } from "../../api/pokemon";
import { Box, Flex, Text } from "@chakra-ui/react";
type PaginationType = {
  setOffSet: any;
};

const Pagination = (props: PaginationType) => {
  const { setOffSet } = props;
  const [currentPage, setCurrentPage] = useState(1);
  //   const [offSet, setOffSet] = useState(0);
  const payload = {
    limit: 100,
    offset: 0,
  };
  const { data: pokemonList } = useQuery(["getPokemon"], () => {
    const response = getPokemon(payload);
    return response;
  });
  const count = Math.ceil(pokemonList?.count / 100);

  const pageNumbers = [];

  for (let i = 1; i <= count; i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (pageNumber === 1) {
      setOffSet(0);
    } else {
      setOffSet(pageNumber * 100);
    }
  };

  return (
    <Flex
      className="pagination"
      width={"100%"}
      justifyContent={"center"}
      marginBottom={"50px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"32px"} fontWeight={700}>
          Select Generation:
        </Text>
        <Box
          gap={"10px"}
          marginTop={"50px"}
          display={{ base: "grid", md: "flex" }}
          gridTemplateColumns={"repeat(7, 1fr)"}
        >
          {pageNumbers.map((number) => (
            <Box
              key={number}
              onClick={() => paginate(number)}
              className="page-number"
              cursor={"pointer"}
              padding={"10px"}
              borderRadius={"5px"}
              boxShadow={"0 0 1px 3px #0000002e"}
              bg={number === currentPage ? "#d5d5d5" : "#fff"}
            >
              {number}
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Pagination;
