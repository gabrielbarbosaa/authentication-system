"use client"
import { BackgroundImage, Flex, Text} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SignUp from "@/components/pages/home/SignUp";
import SignIn from "@/components/pages/home/SignIn";
import bg_imge from "@/assets/bg-img.png";
import { getServerSideProps } from "@/hooks/useSession";

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <BackgroundImage
      src={bg_imge.src}
      radius="sm"
    >
      <Flex 
        w="100vw" 
        h='100vh'
        justify="center"
        align="center"
      >
        <Flex
          w="100%"
          h="100%"
          direction="column"
          justify="center"
          align="center"
        >
          <Text 
            fz="44px" 
            c="#FFF" 
            w="550px" 
            style={{textAlign: 'center'}}
          >
            Welcome to Authentication System
          </Text>
        </Flex>
        <SignIn onClick={open}/>
      </Flex>
      <SignUp close={close} opened={opened}/>
    </BackgroundImage>
  );
}

export default Home;