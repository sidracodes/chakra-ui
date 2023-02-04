import { Box, Button, ChakraProvider, Heading, Text, Flex, HStack, Icon } from "@chakra-ui/react"
import checkMarkIcon from "../checkMarkIcon";

const Main = () => {
  return (
    <>
      <ChakraProvider>
        <Box mt={"-150px"} >
          <Flex  justifyContent={"center"} direction={{base: "column",md:"column",lg:"row"}}>

          <Box bg={"#ebe1f8"} p={"60px"} textAlign={"center"}>
                <Text fontWeight={"bold"} fontSize={"24px"}>
                Premium PRO
                </Text>
            <Heading fontSize={"60px"} >
            $329
            </Heading>
            <Text >
            billed just once
                </Text>
               
                <Button bg={"#6B46C1"} color={"white"} w={"300px"} mt={"15px"}>Get Started</Button>
            </Box>
            <Box bg={"whitesmoke"} p={"55px"}>
                <Text mb={"25px"}>
                Access these features when you get this pricing package <br /> for your business.
                </Text>
                <HStack mb={"13px"}>
                  <Icon as={checkMarkIcon}/>
                  <Text>International calling and messaging API</Text>
                </HStack>
                <HStack mb={"13px"}>
                  <Icon as={checkMarkIcon}/>
                  <Text>Additional phone numbers</Text>
                </HStack>
                <HStack mb={"13px"}>
                  <Icon as={checkMarkIcon}/>
                  <Text>Automated messages via Zapier</Text>
                </HStack>
                <HStack mb={"13px"}>
                  <Icon as={checkMarkIcon}/>
                  <Text>24/7 support and consulting</Text>
                </HStack>
                
            </Box>

          </Flex>
         
        </Box>
      </ChakraProvider>
    </>
  )
}

export default Main
