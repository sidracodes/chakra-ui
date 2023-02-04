import { Box, ChakraProvider, Text, Icon, HStack, Flex } from "@chakra-ui/react"
import refreshIcon from "../refreshIcon"
import starIcon from "../starIcon"
import tagIcon from "../tagIcon"

const Footer = () => {
  return (
    <>
<ChakraProvider>
        <Box bg={"white"} textAlign={"center"} height={"250px"}>
          <Flex justifyContent={"center"} pt={"20px"} direction={{base: "column",md:"column",lg:"row"}}>

          <HStack padding={"35px"}>
          <Icon as={starIcon}/>
       <Text pt={"10px"}>30 days money back <br /> Guarantee</Text>
          </HStack>
        <HStack padding={"35px"}>
        <Icon as={tagIcon}/>
       <Text pt={"10px"}>No setup fees <br />
        100% hassle-free</Text>
        </HStack>  
<HStack padding={"35px"}>
<Icon as={refreshIcon}/>
       <Text pt={"10px"}>No monthly subscription <br />
Pay once and for all</Text>
</HStack>
          </Flex>
         
        
        </Box>
      </ChakraProvider>
    </>
  )
}

export default Footer
