/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../axiosInstance";

export const getPokemon = async (payload: any) => {
  const response = await axiosInstance.get("/pokemon/", {
    params: {
      limit: payload?.limit,
      offset: payload?.offset,
    },
  });
  return response.data;
};

export const getPokemonByName = async (name: string) => {
  const response = await axiosInstance.get(`/pokemon/${name}`);
  return response.data;
};
