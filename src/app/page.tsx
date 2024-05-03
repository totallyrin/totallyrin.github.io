"use client";

import { Box, SlideFade, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { bg, sunflower } from "../../utils/utils";
import { useState } from "react";
import Home from "../../components/tabs/Home";
import Navbar from "../../components/Navbar";
import Projects from "../../components/tabs/Projects";

export default function Page() {
  const [index, setIndex] = useState(0);
  const changeTab = (index: number) => {
    setIndex(index);
  };

  return (
    <Box sx={{ bg: bg }}>
      <Navbar index={index} onChange={changeTab} />

      <Box
        sx={{
          px: { base: "10%", sm: "15%", md: "20%", lg: "25%" },
          color: sunflower,
        }}
      >
        <Tabs index={index} onChange={changeTab}>
          <TabPanels>
            <TabPanel>
              <SlideFade in={index === 0}>
                <Home changeTab={changeTab} />
              </SlideFade>
            </TabPanel>
            <TabPanel>
              <SlideFade in={index === 1}>
                <Projects />
              </SlideFade>
            </TabPanel>
            <TabPanel>
              <SlideFade in={index === 2}></SlideFade>
            </TabPanel>
            <TabPanel>
              <SlideFade in={index === 3}></SlideFade>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
