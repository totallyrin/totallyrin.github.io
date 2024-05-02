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
  useMediaQuery,
} from "@chakra-ui/react";
import { bg, pinkie, sunflower } from "../../utils/utils";
import RRuleInput from "react-mui-rrule-input/src";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import { muiTheme } from "../../utils/MUITheme";

export default function Home() {
  const [onMobile] = useMediaQuery(["(max-width: 800px)"]);

  const [rruleText, setRRuleText] = useState("");
  const [rrule, setRRule] = useState("");

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
          <HStack align="baseline">
            <Heading>
              {"Hi, I'm "}
              <Box as="span" color={pinkie}>
                {"Lucy"}
              </Box>
              {"."}
            </Heading>
            <Text>[she / her]</Text>
          </HStack>

          <Heading size="md">And I really love programming.</Heading>
          <Spacer />
          <Text>
            {"I'm a web developer based in Ontario, Canada."}
            <br />
            {onMobile && <br />}
            {"Currently, I'm focusing on honing my frontend skills as well" +
              " as exploring new and exciting projects."}
          </Text>
          <Spacer />
          <Button>Check out some of my projects!</Button>

          <Text>{rruleText}</Text>
          <Carousel
            elements={[
              <Box key={0}>
                <RRuleInput
                  setDisplayText={setRRuleText}
                  rrule={rrule}
                  setRRule={setRRule}
                  theme={muiTheme}
                />
              </Box>,
            ]}
            titles={["react-mui-rrule-input"] as string[]}
          />
        </Stack>
      </Box>
    </Box>
  );
}
