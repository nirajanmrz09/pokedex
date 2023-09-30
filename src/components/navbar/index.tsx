/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import pokedex from "../../assets/pokedex.png";
import pokeball from "../../assets/pokeball.png";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const count = useSelector((state: any) => state.pokemon);
  const naigate = useNavigate();
  const disableNumber = window.location.pathname === "/my-team";
  console.log("count.lengt", count.length, disableNumber);
  return (
    <Flex
      padding={"20px"}
      justifyContent={"space-between"}
      position={"sticky"}
      top={0}
      background={"#fff"}
      zIndex={10}
      boxShadow={"0px 0px 3px 0px #00000070"}
    >
      <Image
        src={pokedex}
        width={{ base: "150px", md: "250px" }}
        cursor={"pointer"}
        onClick={() => naigate("/")}
      />{" "}
      <Flex gap={"10px"} cursor={"pointer"} onClick={() => naigate("/my-team")}>
        My Team <Image src={pokeball} width={"30px"} height={"30px"} />
      </Flex>
      {count.length > 0 && disableNumber === false && (
        <Flex
          position={"absolute"}
          top={"10px"}
          right={"15px"}
          bg="red"
          height={"18px"}
          width={"18px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          color={"#fff"}
          fontSize={"13px"}
          boxShadow={"0px 0px 3px 1px #090909a6"}
          lineHeight={"18px"}
        >
          {count?.length}
        </Flex>
      )}
    </Flex>
  );
};
