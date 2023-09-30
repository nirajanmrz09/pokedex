/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPokemon } from "../../api/pokemon";
import CardComponent from "../../components/card";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import Pagination from "../../components/pagination";
import { useSelector } from "react-redux";

const Pokemon = () => {
  const [offSet, setOffSet] = useState(0);
  const payload = {
    limit: 100,
    offset: offSet,
  };
  const { data: pokemonList, isLoading: loading } = useQuery(
    ["getPokemon", offSet],
    () => {
      const response = getPokemon(payload);
      return response;
    }
  );
  const myPokemon = useSelector((state: any) => state.pokemon);
  console.log("myPokemon", myPokemon);

  return (
    <>
      <Pagination setOffSet={setOffSet} />
      {loading ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
          {!loading &&
            pokemonList?.results.map((pokemon: any) => {
              return <CardComponent name={pokemon.name} />;
            })}
        </SimpleGrid>
      )}
    </>
  );
};

export default Pokemon;
