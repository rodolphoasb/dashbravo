import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function createUser() {
  return (
    <Box>
      <Header />
      <Flex w={"100%"} my={6} maxWidth={1480} mx={"auto"} px={6}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg={"gray.800"} p={8}>
          <Heading size={"lg"} fontWeight={"normal"}>
            Create User
          </Heading>
          <Divider my={6} borderColor={"gray.700"} />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={"240px"} spacing={8} w={"100%"}>
              <Input name="name" label="Full Name" />
              <Input name="email" type={"email"} label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={"240px"} spacing={8} w={"100%"}>
              <Input name="password" type={"password"} label="Password" />
              <Input
                name="password_confirmation"
                type={"password"}
                label="Password confirmation"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify={"flex-end"}>
            <HStack spacing={4}>
              <Button colorScheme={"whiteAlpha"}>Cancel</Button>
              <Button colorScheme={"pink"}>Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
