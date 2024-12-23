import {
    Container,
    Box,
    Center,
    VStack,
    HStack,
    Button,
    Heading,
    Text,
    Link,
    List,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { PiXLogo } from 'react-icons/pi'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { AboutCardText, AboutCardImage } from '../components/about-card'
import AnimatedBox from '../components/animated-box'
import Paragraph from '../components/paragraph'
import SponsorBlock from '../components/sponsor-block'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout>
            <Container maxW="container.lg">
                <Container>
                    <AnimatedBox delay={0.1}>
                        <Box
                            borderRadius="lg"
                            mb={6}
                            p={3}
                            textAlign="center"
                            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        >
                            <Box pb='1'>
                                <Text as='b' fontSize='xl'>January 18-19, 2025</Text>
                            </Box>

                            <Button onClick={onOpen} bg='cardinal'>Rain Date</Button>

                            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>HackBI Rain Date</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        In case of any inclement weather, HackBI will occur on <b>January 25-26, 2025</b>.
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button bg='cardinal' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </AnimatedBox>

                    <AnimatedBox delay={0.15}>
                        <Box mb={4}>
                            <Box flexGrow={1}>
                                <Center>
                                    <Button
                                        as={NextLink}
                                        href="/register"
                                        rightIcon={<ChevronRightIcon />}
                                        bg='cardinal'
                                        size='lg'
                                    >Register Now</Button>
                                </Center>
                            </Box>
                            <Box
                                flexShrink={0}
                                mt={{ base: 4, md: 0 }}
                                ml={{ md: 6 }}
                                textAlign="center"
                            >
                            </Box>
                        </Box>
                    </AnimatedBox>
                </Container>

                <AnimatedBox delay={0.2}>
                    <Heading as="h3" variant="section-title">About</Heading>
                    <Box pb={2}>
                        <Paragraph>
                            HackBI is an annual hackathon for middle and high school students that has
                            been run by the students of Bishop Ireton High School for 8 consecutive years.
                            At HackBI, you will learn new things and collaborate with others to make your
                            ideas come to life. Check out our{' '}
                            <Link as={NextLink} href="/faq" scroll={false}>
                                faq
                            </Link>
                            {' '}if you have any questions.
                        </Paragraph>
                    </Box>

                    <VStack>
                        <HStack>
                            <AboutCardText text="Learn" src="images/about/learn.jpg" />
                            <AboutCardText text="Unite" src="images/about/collaborate.jpg" />
                        </HStack>

                        <HStack>
                            <AboutCardImage text="Pitch" src="images/about/pitch.jpg" />
                            <AboutCardImage text="Celebrate" src="images/about/celebrate.jpg" />
                        </HStack>
                    </VStack>
                </AnimatedBox>

                <AnimatedBox delay={0.25}>
                    <Heading as="h3" variant="section-title">On the web</Heading>

                    <List>
                        <ListItem>
                            <Link href="https://github.com/hackbi" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @hackbi
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://x.com/hackbiofficial" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<PiXLogo />}
                                >
                                    @hackbiofficial
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://instagram.com/hackbiofficial" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoInstagram />}
                                >
                                    @hackbiofficial
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </AnimatedBox>

                <AnimatedBox delay={0.3}>
                    <SponsorBlock />
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Index
