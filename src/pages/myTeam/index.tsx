/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../../components/card";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { pokemon } from "../../reducers/actions";
import { useNavigate } from "react-router-dom";

const MyTeam = () => {
  const count = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClear = () => {
    dispatch(pokemon("CLEAR", {}));
    navigate("/");
  };
  return (
    <>
      <Text
        paddingBottom={"10px"}
        textAlign={"center"}
        fontSize={"24px"}
        fontWeight={700}
      >
        {" "}
        My Team
      </Text>
      <Flex justifyContent={"end"} paddingBottom={"40px"}>
        <Button onClick={handleClear}>Clear My Team</Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }}>
        {count?.map((pokemon: any) => {
          return <CardComponent name={pokemon.name} myTeam={true} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MyTeam;
