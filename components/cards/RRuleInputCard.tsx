import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import RRuleInput from "react-mui-rrule-input/src";
import { muiTheme } from "../../utils/MUITheme";
import { Link } from "@chakra-ui/next-js";
import { GitHubIcon } from "../icons/GitHubIcon";
import { NPMjsIcon } from "../icons/NPMjsIcon";
import React, { useState } from "react";

export default function RRuleInputCard({ sx }: { sx?: any }) {
  const [onMobile] = useMediaQuery(["(max-width: 800px)"], {
    ssr: true,
    fallback: true, // return true on the server, and re-evaluate on the
    // client side
  });
  const [rruleText, setRRuleText] = useState("");
  const [rrule, setRRule] = useState("");

  return (
    <Card
      sx={{
        bg: "#FFEFD6",
        borderWidth: "3px",
        borderColor: "#FFC66D",
        overflowY: "auto",
        width: "100%",
        ...sx,
      }}
    >
      <CardHeader>
        <Heading size="md">react-mui-rrule-input</Heading>
        <Text>RRule Input for React using MUI</Text>
      </CardHeader>
      <CardBody>
        <RRuleInput
          setDisplayText={setRRuleText}
          rrule={rrule}
          setRRule={setRRule}
          theme={muiTheme}
        />
        <br />
        <Text>{rruleText}</Text>
      </CardBody>
      <CardFooter>
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
        </Flex>
      </CardFooter>
    </Card>
  );
}
