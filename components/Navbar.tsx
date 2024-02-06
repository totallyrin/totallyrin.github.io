import {
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useTheme
} from "@chakra-ui/react";
import {sunflower} from "../utils/utils";

export default function Navbar() {
  const theme = useTheme();

  return (
    <Flex sx={{
      // bg: bg,
      color: sunflower,
      p: 10
    }}>
      <Button variant="ghost" colorScheme="sunflower"
              size="lg">totallyrin</Button>
      <Spacer/>
      <Heading></Heading>
      <Spacer/>
      <HStack>
        <Button variant="ghost" colorScheme="sunflower"><Text
          as="b">01.</Text>About</Button>
        <Button variant="ghost" colorScheme="sunflower">02. Projects</Button>
        <Button variant="ghost" colorScheme="sunflower">03. Experience</Button>
        <Button variant="ghost" colorScheme="sunflower">04. Contact</Button>
        <Button variant="outline" colorScheme="sunflower"
                sx={{ml: 1}}>Resume</Button>
      </HStack>
    </Flex>
  );
}
