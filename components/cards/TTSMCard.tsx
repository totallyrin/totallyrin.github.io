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
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { GitHubIcon } from "../icons/GitHubIcon";
import React from "react";

export default function TTSMCard() {
  return (
    <Card
      sx={{
        bg: "#FFEFD6",
        borderWidth: "3px",
        borderColor: "#FFC66D",
      }}
    >
      <CardHeader>
        <Heading size="md">TTSM</Heading>
        <Text>
          Web application for controlling game servers. Built with Next.js and
          JoyUI, Node.js backend
        </Text>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter>
        <Flex key={0} justifyContent="space-between" width="100%">
          <Link href="https://github.com/totallyrin/ttsm" isExternal>
            <IconButton
              aria-label={"react-mui-rrule-input GitHub"}
              icon={<GitHubIcon />}
            />
          </Link>
          <Spacer />
          {/*<Link*/}
          {/*  href="https://www.npmjs.com/package/react-mui-rrule-input"*/}
          {/*  isExternal*/}
          {/*>*/}
          {/*  <IconButton*/}
          {/*    aria-label={"react-mui-rrule-input NPMjs"}*/}
          {/*    icon={<NPMjsIcon />}*/}
          {/*  />*/}
          {/*</Link>*/}
        </Flex>
      </CardFooter>
    </Card>
  );
}
