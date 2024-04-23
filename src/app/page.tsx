"use client";

import Navbar from "../../components/Navbar";
import {
  Box,
  Button,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { bg, sunflower } from "../../utils/utils";

export default function Home() {
  return (
    <Box sx={{ bg: bg }}>
      <Navbar />
      <Box
        sx={{
          px: { base: "10%", sm: "15%", md: "20%", lg: "25%" },
          color: sunflower,
        }}
      >
        <Stack direction="column" spacing={2} align="left">
          {/*<Text></Text>*/}
          <HStack>
            <Heading>Hi, I'm Lucy.</Heading>
            <Text pt={1.5}>[she / her]</Text>
          </HStack>
          <Heading size="md">And I really love programming.</Heading>
          <Spacer />
          <Text>
            I'm a web developer based in Ontario, Canada.
            <Spacer />
            Currently, I'm focusing on honing my frontend skills as well as
            exploring new and exciting projects.
          </Text>
          <Spacer />
          <Button
            variant="outline"
            colorScheme="sunflower"
            sx={{
              _hover: { bg: sunflower, color: bg },
            }}
          >
            Check out some of my projects!
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
