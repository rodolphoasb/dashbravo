import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr={4} textAlign={"right"}>
        <Text>Nome</Text>
        <Text color={"gray.300"} fontSize={"small"}>
          email@email.com
        </Text>
      </Box>
      <Avatar
        size={"md"}
        name="Rodolpho Bravo"
        src="https://github.com/rodolphoasb.png"
      />
    </Flex>
  )
}
