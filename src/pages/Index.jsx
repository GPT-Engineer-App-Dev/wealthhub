import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <VStack spacing={4} align="start">
            <Heading as="h2" size="2xl">Main Headline: Breaking News</Heading>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* News Articles Grid */}
      <Container maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Article 1</Heading>
            <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Article 2</Heading>
            <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Article 3</Heading>
            <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Article 4</Heading>
            <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Article 5</Heading>
            <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Article 6</Heading>
            <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>About Us</Heading>
              <Link href="#" color="white">Learn more about us</Link>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Contact</Heading>
              <Link href="#" color="white">Get in touch</Link>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Privacy Policy</Heading>
              <Link href="#" color="white">Read our privacy policy</Link>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Terms of Service</Heading>
              <Link href="#" color="white">Read our terms of service</Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;