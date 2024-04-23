import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import { bg, sunflower } from "../utils/utils";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const theme = useTheme();
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
      <Button
        variant="ghost"
        colorScheme="sunflower"
        size="lg"
        sx={{
          _hover: {
            bg: sunflower,
            color: bg,
          },
        }}
      >
        totallyrin
      </Button>
      <Spacer />
      <Heading></Heading>
      <Spacer />
      {onMobile ? (
        <HStack>
          <Button
            variant="ghost"
            colorScheme="sunflower"
            sx={{
              _hover: {
                bg: sunflower,
                color: bg,
              },
            }}
          >
            01. About
          </Button>
          <Button
            variant="ghost"
            colorScheme="sunflower"
            sx={{
              _hover: {
                bg: sunflower,
                color: bg,
              },
            }}
          >
            02. Projects
          </Button>
          <Button
            variant="ghost"
            colorScheme="sunflower"
            sx={{
              _hover: {
                bg: sunflower,
                color: bg,
              },
            }}
          >
            03. Experience
          </Button>
          <Button
            variant="ghost"
            colorScheme="sunflower"
            sx={{
              _hover: {
                bg: sunflower,
                color: bg,
              },
            }}
          >
            04. Contact
          </Button>
          <Button
            variant="outline"
            colorScheme="sunflower"
            sx={{
              ml: 1,
              _hover: {
                bg: sunflower,
                color: bg,
              },
            }}
          >
            Resume
          </Button>
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
