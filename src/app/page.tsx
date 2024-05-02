"use client";

import { Box, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { bg } from "../../utils/utils";
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
      <Tabs index={index} onChange={changeTab}>
        <TabPanels>
          <TabPanel>
            <Home changeTab={changeTab} />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
