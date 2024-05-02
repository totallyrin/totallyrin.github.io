import { Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import RRuleInput from "react-mui-rrule-input/src";
import { muiTheme } from "../../utils/MUITheme";
import Carousel from "../Carousel";
import { useState } from "react";
import { GitHubIcon } from "../icons/GitHubIcon";
import { NPMjsIcon } from "../icons/NPMjsIcon";
import { Link } from "@chakra-ui/next-js";

export default function Projects() {
  const [rruleText, setRRuleText] = useState("");
  const [rrule, setRRule] = useState("");

  return (
    <Box>
      <Carousel
        elements={[
          <Box key={0} flexGrow={0}>
            <RRuleInput
              setDisplayText={setRRuleText}
              rrule={rrule}
              setRRule={setRRule}
              theme={muiTheme}
            />
            <br />
            <Text>{rruleText}</Text>
          </Box>,
        ]}
        titles={["react-mui-rrule-input"] as string[]}
        footers={[
          <Flex key={0} justifyContent="space-between" width="100%">
            <Link
              href="https://github.com/totallyrin/react-mui-rrule-input"
              isExternal
            >
              <IconButton
                aria-label={"react-mui-rrule-input GitHub"}
                icon={<GitHubIcon />}
              />
            </Link>
            <Spacer />
            <Link
              href="https://www.npmjs.com/package/react-mui-rrule-input"
              isExternal
            >
              <IconButton
                aria-label={"react-mui-rrule-input NPMjs"}
                icon={<NPMjsIcon />}
              />
            </Link>
          </Flex>,
        ]}
      />
    </Box>
  );
}
