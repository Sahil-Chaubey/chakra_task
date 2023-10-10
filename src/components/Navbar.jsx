import { UnlockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export default function Navbar() {

  const toast = useToast()

  const showtoast = () => {
    toast({
      title : "Logged Out",
      description : "Successfully logged out",
      duration : 5000,
      isClosable : true,
      status : "success",
      position : "top-right",
      icon: <UnlockIcon/>
    })
  }

  return (
    <Flex as={"nav"} p={"10px"} mb={"40px"} alignItems={"center"}>
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing={"20px"}>
        <Avatar src="/public/img/mario.png" >
          <AvatarBadge w={"1.3em"} bg={"teal.500"}>
            <Text fontSize={"x-small"} color={"white"}>3</Text>

          </AvatarBadge>
        </Avatar>
        <Text>sahilchaubey25@gmail.com</Text>
        <Button colorScheme="purple" onClick={showtoast}>Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg={"gray.200"} justify={"space-between"} wrap={"wrap"} gap={"2"}>
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" bg="green">3</Box>
    //     <Box w="150px" h="50px" bg="yellow">4</Box>
    // </Flex>
  );
}
