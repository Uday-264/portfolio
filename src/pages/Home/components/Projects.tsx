import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { me } from "../../../me";

export const Projects = () => {
  const [projects] = useState(me.projects);

  return (
    <Flex
      id="projects"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Projects
        </Heading>
        <Grid
          mt={4}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: me.projects.length > 2 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
          }}
          gap={6}
        >
          {projects.map((project, i) => (
            <GridItem key={`project-${i}`}>
              <SingleProject {...project} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

const SingleProject = ({
  name,
  description,
  technologies,
  links,
  image,
}: {
  name: string;
  description: string;
  technologies: readonly string[];
  links: readonly {
    name: string;
    uri: string;
  }[];
  image?: string;
}) => {
  const bg = useColorModeValue("white", "brand.900");
  return (
    <Stack
      direction={"column"}
      w={"full"}
      h={"full"}
      borderRadius={"2xl"}
      border={"1px"}
      bg={bg}
      borderColor={useColorModeValue("brand.200", "brand.700")}
      as={motion.div}
      justify={"center"}
      whileTap={{
        scale: 0.99,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Box
        h={"full"}
        w={"full"}
        p={4}
        borderRadius={"2xl"}
      >
        <Flex align={"center"} justify={"space-between"} w={"full"}>
          <Heading
            as={"h3"}
            fontSize={"2xl"}
            color={useColorModeValue("brand.800", "white")}
          >
            {name}
          </Heading>
          {image && (
            <Image
              src={image}
              h={"50px"}
              borderRadius={"xl"}
              objectFit={"cover"}
            />
          )}
        </Flex>
        <Stack direction={"row"} spacing={2} my={2} wrap={"wrap"}>
          {links.map((link) => (
            <OutLink href={link.uri} key={link.name}>
              {link.name}
            </OutLink>
          ))}
        </Stack>
        <Text>{description}</Text>
        <Box h={5} />
        <Stack direction={"row"} wrap={"wrap"} rowGap={3}>
          {technologies.map((technology) => (
            <Pill key={technology}>{technology}</Pill>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

const Pill = ({ children }: { children: string }) => {
  return (
    <Box
      bg={"brand.100"}
      color={"brand.800"}
      px={2}
      py={0.5}
      borderRadius={"2xl"}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      {children}
    </Box>
  );
};

const OutLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Flex
      as={"a"}
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      align={"center"}
      color={useColorModeValue("brand.700", "brand.100")}
      _hover={{
        color: useColorModeValue("brand.600", "brand.300"),
        textDecoration: "underline",
      }}
    >
      {children}
      <Icon as={FiExternalLink} ml={1} />
    </Flex>
  );
};

export default Projects;
