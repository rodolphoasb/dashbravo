import {
  border,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  borderColor?: string
}

export function Input({
  name,
  label,
  borderColor = "gray.700",
  ...rest
}: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        borderColor={borderColor}
        focusBorderColor="pink.500"
        bgColor={"gray.900"}
        variant={"filled"}
        _hover={{
          bgColor: "gray-900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
