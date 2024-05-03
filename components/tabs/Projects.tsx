import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import RRuleInputCard from "../cards/RRuleInputCard";
import TTSMCard from "../cards/TTSMCard";

export default function Projects() {
  return (
    <Box>
      <Heading>My Projects</Heading>
      <br />
      <SimpleGrid gap={5} minChildWidth={450}>
        <RRuleInputCard sx={{ mr: 3 }} />
        <TTSMCard />
      </SimpleGrid>
    </Box>
  );
}
