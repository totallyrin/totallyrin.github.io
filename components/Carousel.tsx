import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function Carousel({
  elements,
  headers,
  footers,
}: {
  elements: React.JSX.Element[];
  headers?: React.JSX.Element[];
  footers?: React.JSX.Element[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedIndex((oldIndex) => Math.max(0, oldIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedIndex((oldIndex) => Math.min(elements.length - 1, oldIndex + 1));
  };

  return (
    <Flex overflow="hidden" alignItems="center">
      <Spacer />
      <Button onClick={handlePrevClick} isDisabled={selectedIndex === 0} m={3}>
        <ArrowLeftIcon />
        {/*<ArrowBackIcon />*/}
      </Button>
      {elements.map((e, index: number) => (
        <Flex ml="auto" mr="auto" justify="center" key={index}>
          <Card
            whiteSpace="normal"
            overflowWrap="break-word"
            borderWidth="3px"
            borderRadius="lg"
            borderColor="#FFC66D"
            boxShadow={index === selectedIndex ? "lg" : "md"}
            my={3}
            p={3}
            bg={index === selectedIndex ? "#FFEFD6" : "gray.100"}
            transform={index === selectedIndex ? "scale(1)" : "scale(0.75)"}
            transition="transform 0.5s"
            display={
              selectedIndex === 0 || selectedIndex === elements.length - 1
                ? Math.abs(index - selectedIndex) <= 2
                  ? "block"
                  : "none"
                : Math.abs(index - selectedIndex) <= 1
                  ? "block"
                  : "none"
            }
          >
            {headers && headers[index] && (
              <CardHeader>{headers[index]}</CardHeader>
            )}
            <CardBody>{e}</CardBody>
            {footers && footers[index] && (
              <CardFooter>{footers[index]}</CardFooter>
            )}
          </Card>
        </Flex>
      ))}
      <Button
        onClick={handleNextClick}
        isDisabled={selectedIndex === elements.length - 1}
        m={3}
      >
        {/*<ArrowForwardIcon />*/}
        <ArrowRightIcon />
      </Button>
      <Spacer />
    </Flex>
  );
}
