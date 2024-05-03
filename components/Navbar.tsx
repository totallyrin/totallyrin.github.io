import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
  useMediaQuery,
  useStyleConfig,
} from "@chakra-ui/react";
import { pinkie, sunflower } from "../utils/utils";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { GitHubIcon } from "./icons/GitHubIcon";

export default function Navbar({
  index,
  onChange,
}: {
  index: number;
  onChange: (index: number) => void;
}) {
  const [onMobile] = useMediaQuery(["(max-width: 800px)"], {
    ssr: true,
    fallback: true, // return true on the server, and re-evaluate on the
    // client side
  });

  const buttonStyle = useStyleConfig("Button", { variant: "ghost" });

  return (
    <Flex
      sx={{
        // bg: bg,
        color: sunflower,
        p: 10,
      }}
    >
      <Link href="https://github.com/totallyrin" isExternal>
        <Button
          colorScheme="pinkie"
          variant="ghost"
          size="lg"
          px={4}
          leftIcon={<GitHubIcon />}
        >
          totallyrin
        </Button>
      </Link>
      <Spacer />
      <Heading></Heading>
      <Spacer />
      {!onMobile ? (
        <HStack>
          <Tabs index={index} onChange={onChange} variant="unstyled">
            <TabList>
              <Tab
                sx={{
                  px: 0,
                  mx: 2,
                }}
              >
                <HStack sx={buttonStyle}>
                  <Box as="span" color={pinkie}>
                    00.
                  </Box>
                  <Text>Home</Text>
                </HStack>
              </Tab>
              <Tab px={0} mx={2}>
                <HStack sx={buttonStyle}>
                  <Box as="span" color={pinkie}>
                    01.
                  </Box>
                  <Text>Projects</Text>
                </HStack>
              </Tab>
              <Tab px={0} mx={2}>
                <HStack sx={buttonStyle}>
                  <Box as="span" color={pinkie}>
                    02.
                  </Box>
                  <Text>Experience</Text>
                </HStack>
              </Tab>
              <Tab px={0} mx={2}>
                <HStack sx={buttonStyle}>
                  <Box as="span" color={pinkie}>
                    03.
                  </Box>
                  <Text>Contact</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabIndicator
              mt="-10px"
              height="2px"
              bg={pinkie}
              borderRadius="1px"
            />
          </Tabs>
          <Button colorScheme="pinkie">Resume</Button>
        </HStack>
      ) : (
        <IconButton
          size="lg"
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
