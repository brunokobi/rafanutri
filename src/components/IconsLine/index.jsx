import { Flex } from "@chakra-ui/react";
import { GiFruitBowl } from "react-icons/gi";
import { GiKiwiFruit } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { GiBananaPeeled } from "react-icons/gi";
import { GiShinyApple } from "react-icons/gi";
import { GiPineapple } from "react-icons/gi";
import { GiOrangeSlice } from "react-icons/gi";
import { GiGrapes } from "react-icons/gi";
import { GiCarrot } from "react-icons/gi";
import { GiBroccoli } from "react-icons/gi";



import AnimatedIcon from "../../components/AnimatedIcon";

const IconsLine = () => {
  const icons = [    
  GiFruitBowl,
  GiKiwiFruit,
  GiFruitTree,
  GiStrawberry,
  GiBananaPeeled,
  GiShinyApple,
  GiPineapple,
  GiOrangeSlice,
  GiGrapes,
  GiCarrot,
  GiBroccoli,
  GiFruitBowl,
  GiKiwiFruit,
  GiFruitTree,
  GiStrawberry,
  GiBananaPeeled,
  GiShinyApple,
  GiPineapple,
  GiOrangeSlice,
  GiGrapes,
  GiCarrot,
  GiBroccoli,
  GiFruitBowl,
  GiKiwiFruit,
  GiFruitTree,
  GiStrawberry,
  GiBananaPeeled,
  GiShinyApple,
  GiPineapple,
  GiOrangeSlice,
  GiGrapes,
  GiCarrot,
  GiBroccoli,
  GiFruitBowl,
  GiKiwiFruit,
  GiFruitTree,
  GiStrawberry,
  GiBananaPeeled,
  GiShinyApple,
  GiPineapple,
  GiOrangeSlice,
  GiGrapes,
  GiCarrot,
  GiBroccoli,

  ];

  return (
    <Flex   
      w="100%"
      position="relative"
      fontSize={"6xl"}
      transform="rotate(-30deg)"
      ml={-10}
      overflow="hidden"
    >
      <Flex>
        {icons.map((icon, i) => (
          <AnimatedIcon
            reactIcon={icons[Math.floor(Math.random() * 20)]}
            // reactIcon={icon}
            key={i}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default IconsLine;
