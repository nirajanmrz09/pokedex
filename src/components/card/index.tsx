/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  SimpleGrid,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import "./card.scss";
import { useQuery } from "react-query";
import { getPokemonByName } from "../../api/pokemon";
import pokeball from "../../assets/pokeball.png";
import { useDispatch, useSelector } from "react-redux";
import { pokemon } from "../../reducers/actions";
type CardComponentProps = {
  name: string;
  myTeam?: boolean;
};
const CardComponent = (props: CardComponentProps) => {
  const { name, myTeam = false } = props;
  const dispatch = useDispatch();
  const myPokemon = useSelector((state: any) => state.pokemon);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data: pokemonDetails } = useQuery(
    ["getPokemonByName", name],
    async () => {
      if (name) {
        const response = await getPokemonByName(name);
        return response;
      }
    }
  );
  const className = pokemonDetails?.types
    .map((type: any) => "type-" + type.type.name)
    .join(" ");

  const handleMyTeam = () => {
    dispatch(pokemon("ADD", pokemonDetails));
    toast({
      title: `${pokemonDetails.name} has added to your team`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };
  return (
    <Box>
      <Box padding={"16px"} height={"100%"} cursor={"pointer"} onClick={onOpen}>
        <Box
          className={`card ${className}`}
          _before={{
            content: "''",
            position: "absolute",
            // bgGradient: { pokeball },
            background: `url(${pokeball})`,
            top: "50%",
            left: "50%",
            height: "150px",
            width: "150px",
            objectFit: "contain",
            /* z-index: 4444 */
            transform: "translate(-50%, -50%)",
            backgroundRepeat: "no-repeat",
            opacity: ".2",
            padding: " 0px",
          }}
        >
          <Box className="bg-pokeball">
            <Flex className="card-title" justifyContent={"space-between"}>
              <Box className="pokemon-types">
                <Text
                  fontSize={{ base: "16px", md: "24px" }}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  marginBottom={"10px"}
                  color={"#fff"}
                  position={"relative"}
                >
                  {name}
                </Text>
                {pokemonDetails?.types.map((type: any, index: number) => (
                  <Text className="type" key={index}>
                    {type.type.name}
                  </Text>
                ))}
              </Box>
              <Box className="pokemon-image">
                <img
                  alt={name}
                  src={pokemonDetails?.sprites.other.dream_world.front_default}
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent className={`model ${className}`}>
          <ModalHeader
            textAlign={"center"}
            fontSize={"2xl"}
            textTransform={"uppercase"}
            fontWeight={600}
            color={"#fff"}
          >
            {name}
          </ModalHeader>
          <ModalCloseButton color={"#fff"} />
          <ModalBody>
            <Flex justifyContent={"end"} marginBottom={"20px"}></Flex>
            <Flex justifyContent={"center"}>
              <Image
                src={pokemonDetails?.sprites.other.dream_world.front_default}
                height={"200p"}
                width={"200px"}
              />
            </Flex>
            <Tabs
              position="relative"
              variant="unstyled"
              marginTop={"50px"}
              background={"#fff"}
              padding={"20px"}
              borderRadius={"10px"}
              boxShadow={"0px 0px 10px 5px #01010129"}
            >
              {!myTeam && (
                <Button
                  position={"absolute"}
                  top={"20px"}
                  right={"10px"}
                  onClick={handleMyTeam}
                  fontSize={{ base: "10px", md: "14px" }}
                  height={{ base: "25px", md: "40px" }}
                  padding={{ base: "5px", md: "inherit" }}
                  isDisabled={myPokemon.length === 10 ? true : false}
                >
                  Add To My Team
                </Button>
              )}

              <TabList fontSize={{ base: "12px", md: "14px" }}>
                <Tab
                  _hover={{ borderColor: "#fff" }}
                  _focusVisible={{ outline: "none", boxShadow: "none" }}
                  _focus={{ outline: "none" }}
                  fontSize={{ base: "12px", md: "14px" }}
                >
                  About
                </Tab>
                <Tab
                  _hover={{ borderColor: "#fff" }}
                  _focusVisible={{ outline: "none", boxShadow: "none" }}
                  _focus={{ outline: "none" }}
                  fontSize={{ base: "12px", md: "14px" }}
                >
                  Base Stats
                </Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <TableContainer>
                    <Table
                      variant="simple"
                      fontSize={{ base: "12px", md: "14px" }}
                    >
                      <Tbody>
                        <Tr>
                          <Td>Species</Td>
                          <Td>
                            <Flex gap={"10px"}>
                              {pokemonDetails?.types.map((type: any) => {
                                return <p>{type.type.name},</p>;
                              })}
                            </Flex>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Height</Td>
                          <Td>{pokemonDetails?.height}</Td>
                        </Tr>
                        <Tr>
                          <Td>Weight</Td>
                          <Td>{pokemonDetails?.weight}</Td>
                        </Tr>
                        <Tr>
                          <Td>Abilities</Td>
                          <Td>
                            <Flex gap={"10px"}>
                              {pokemonDetails?.abilities.map((ability: any) => {
                                return <p>{ability.ability.name},</p>;
                              })}
                            </Flex>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel>
                  {pokemonDetails?.stats.map((stats: any) => {
                    return (
                      <Grid
                        templateColumns="repeat(5, 1fr)"
                        gap={4}
                        marginBottom={"10px"}
                      >
                        <GridItem colSpan={2}>
                          <Flex justifyContent={"space-between"}>
                            <Text textAlign={"start"}> {stats.stat.name}</Text>
                            <Flex textAlign={"end"}>{stats.base_stat}</Flex>
                          </Flex>
                        </GridItem>

                        <GridItem colSpan={3}>
                          <Progress
                            value={stats.base_stat}
                            size="xs"
                            colorScheme={
                              stats.base_stat > 50 ? "green" : "orange"
                            }
                            marginTop={"10px"}
                          />
                        </GridItem>
                      </Grid>
                    );
                  })}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CardComponent;
