"use client";

import Navbar from "../../components/Navbar";
import {Box, Button, Heading, HStack, Stack, Text} from "@chakra-ui/react";
import {bg, sunflower} from "../../utils/utils";

export default function Home() {
  return (
    <Box sx={{bg: bg}}>
      <Navbar/>
      <Box sx={{
        px: "25%",
        color: sunflower,
      }}>
        <Stack
          direction="column"
          spacing={2}
          align="left"
        >
          <Text>{"Hi, I'm"}</Text>
          <HStack><Heading>Lucy!</Heading><Text>{"she / her"}</Text></HStack>
          <Heading>{"And I really love programming."}</Heading>
          <Text>
            {"I'm a web developer based in Canada. Currently, I'm focusing" +
              " on honing my frontend skills as well as exploring new and exciting projects."}
          </Text>
          <Button variant="outline" colorScheme="sunflower">{"Check out some" +
            " of my projects!"}</Button>
        </Stack>
      </Box>
    </Box>
  );
}
