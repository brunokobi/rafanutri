import { Flex, Heading, SlideFade, Stack, StackItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import profile from "../../assets/img/home-animation-removed.gif";
import IconsBackground from "../../components/IconsBackground";


const Home = () => {

  return (
    <AnimatePresence>     
      <Flex
        background="#006400"
        minH="100vh"
        w="100%"
        direction="column"
        justify="center"
        align="center"
        position="relative"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={5}
          display="flex"
          align="center"
        >
          <IconsBackground/>
          <StackItem
            as={SlideFade}
            in={true}
            offsetX="-50%"
            transition="all 1s"
          >
            <Image src={profile} w={{ base: 250, md: 300 }} />
          </StackItem>

          <StackItem>
            <Stack spacing={1}>
              <StackItem display="flex" alignItems="flex-end">
                <Heading
                  position="relative"
                  zIndex="999"
                  fontSize={{ base: "xl", md: "5xl" }}
                  fontWeight={300}
                  mb={{ md: -1, lg: -2 }}
                >
                  Olá,&nbsp;
                </Heading>
                <Heading
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight={300}
                  variant="span"
                  position="relative"
                  zIndex="999"
                >
                  eu sou o
                </Heading>
              </StackItem>

              <StackItem>
                <Heading
                  position="relative"
                  zIndex="999"
                  display="flex"
                  textShadow={{
                    base: "0px 0px 20px #FF10F0",
                    md: "0px 0px 8px #FF10F0",
                    lg: "0px 0px 10px #FF10F0",
                  }}
                  fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                >
                  Rafaela Soares Sousa Kobi
                  <Typewriter
                    options={{
                      strings: [""],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Heading>
              </StackItem>

              <StackItem>
                <Heading
                  position="relative"
                  zIndex="999"
                  fontSize={{ base: "md", md: "3xl" }}
                  fontWeight={500}
                  color="whiteAlpha.900"
                >
                  {"Nutricionista"}
                </Heading>
              </StackItem>

              <StackItem>
                <Heading
                  fontSize={{ base: "sm", md: "xl" }}
                  fontWeight={300}
                  position="relative"
                  zIndex="999"
                >
                  <Typewriter
                    options={{
                      strings: [                        
                        "Bacharel em Nutrição",
                        "Apaixonada pela Nutrição",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Heading>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
      </Flex>
    </AnimatePresence>
  );
};

export default Home;
