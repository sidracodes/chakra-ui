import { Box, ChakraProvider,Heading,Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <ChakraProvider>
        <Box bg={"#6B46C1"} textAlign={{base:"left" , md:"left", lg:"center"}} pl={"15px"} color={"whitesmoke"} pt={"100px"} pb={"250px"} height={"400px"}>
        <Heading>Simple pricing for your buisness</Heading>
        <Text pt={"10px"}>Plans that are carefully crafted to suit your buisness.</Text>
        </Box>
      </ChakraProvider>
    </>
  )
}

export default Header
