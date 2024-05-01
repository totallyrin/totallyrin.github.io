import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { sunflower } from "../utils/utils";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [onMobile] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <Flex
      sx={{
        // bg: bg,
        color: sunflower,
        p: 10,
      }}
    >
      <Button variant="ghost" size="lg">
        totallyrin
      </Button>
      <Spacer />
      <Heading></Heading>
      <Spacer />
      {onMobile ? (
        <HStack>
          <Button variant="ghost">01. About</Button>
          <Button variant="ghost">02. Projects</Button>
          <Button variant="ghost">03. Experience</Button>
          <Button variant="ghost">04. Contact</Button>
          <Button>Resume</Button>
        </HStack>
      ) : (
        <IconButton
          variant="ghost"
          colorScheme="sunflower"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          // sx={{
          //   _hover: {
          //     bg: sunflower,
          //     color: bg,
          //   },
          // }}
        />
      )}
    </Flex>
  );
}
