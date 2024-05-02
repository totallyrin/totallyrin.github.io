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
import { pinkie, sunflower } from "../../utils/utils";

export default function Home({
  changeTab,
}: {
  changeTab: (index: number) => void;
}) {
  const [onMobile] = useMediaQuery(["(max-width: 800px)"], {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
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
        <Button
          onClick={() => {
            changeTab(1);
          }}
        >
          Check out some of my projects!
        </Button>
      </Stack>
    </Box>
  );
}
