import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { bg } from "../utils/utils";

export default function Carousel({
  elements,
  titles,
}: {
  elements: React.JSX.Element[];
  titles?: string[];
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
            borderWidth="3px"
            borderRadius="lg"
            borderColor="#1F1F1F"
            boxShadow={index === selectedIndex ? "lg" : "md"}
            my={3}
            p={3}
            // bg={index === selectedIndex ? "#FFEBD6" : "gray.100"}
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
            {titles && (
              <CardHeader>
                <Heading color={bg}>{titles[index]}</Heading>
              </CardHeader>
            )}
            <CardBody>{e}</CardBody>
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
