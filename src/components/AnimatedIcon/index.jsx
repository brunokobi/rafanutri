import { Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedIcon = ({ reactIcon }) => {
  return (
    <Box color="rgba(255,255,255,0.1)" as={motion.div} userSelect="none">
      <Icon
        as={reactIcon}
        transition="1s"
        p="0 5px"
        _hover={{
          color: "#FF10F0",
          transition: "0s",
          filter: "drop-shadow(-3px -3px 15px #FF10F0)",
        }}
      />
    </Box>
  );
};

export default AnimatedIcon;

// #FF10F0
