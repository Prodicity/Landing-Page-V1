import { useState } from "react";
import {
  Button,
  Text,
  Flex,
  Box,
  Image,
  Input,
  Textarea,
  Link,
  Fade, 
  ScaleFade, 
  Slide, 
  SlideFade,
  useToast
} from "@chakra-ui/react";

const App = () => {

  const toast = useToast()
  console.log(JSON.parse(localStorage.getItem("emails")));

  function WriteToFile(e) {
    e.preventDefault();
    console.log("Exe " + document.getElementById("email").value);
    if (localStorage.getItem("emails") === null) {
      let eml = document.getElementById("email").value;
      let arr = [];
      arr.push(eml);
      localStorage.setItem("emails", JSON.stringify(arr));
      toast({
        title: 'Email registered.',
        description: "Email is registered in the database",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } else {
      let eml = document.getElementById("email").value;
      let arr = JSON.parse(localStorage.getItem("emails"));
      if (arr.includes(eml)){
        toast({
          title: 'Email is already registered.',
          description: "Email is already registered...",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }else{
        arr.push(eml);
        localStorage.setItem("emails", JSON.stringify(arr));
        toast({
          title: 'Email registered.',
          description: "Email is registered in the database",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
      
      
    }
    
  }

  return (
    <Box>
      <Flex
        id="intro"
        direction={"column"}
        alignItems={"center"}
        bgImage={require("./images/first.png")}
        width={"100vw"}
        height={"auto"}
        bgSize={"100% 100%"}
      >
        <Flex
          direction={"row"}
          justifyContent={"center"}
          paddingTop={"3%"}
          width={"80%"}
        >
          <Flex direction={"row"} alignItems={"center"} flex={5}>
            <Link href="#intro" bg={"transparent"}>
              <Image
                src={require("./images/prodOne.png")}
                width={"70%"}
                height={"70%"}
              ></Image>
            </Link>
          </Flex>
          <Flex direction={"row"} alignItems={"center"} flex={2} gap={"10%"}>
            <Link
              href="#about"
              color={"white"}
              fontWeight={"bold"}
              bg={"transparent"}
              border={"none"}
              fontSize={"3vh"}
            >
              About
            </Link>
            <Link
              href="#bosses"
              color={"white"}
              fontWeight={"bold"}
              bg={"transparent"}
              border={"none"}
              fontSize={"3vh"}
            >
              Features
            </Link>
            <Link
              href="#contact"
              color={"white"}
              fontWeight={"bold"}
              bg={"transparent"}
              border={"none"}
              fontSize={"3vh"}
            >
              Contact
            </Link>
          </Flex>
        </Flex>

        <br />
        <br />
        <br />

        <Flex
          direction={"column"}
          width={"80%"}
          alignContent={"center"}
          alignItems={"center"}
          bgColor={"rgba(0, 0, 0, 0.4)"}
        >
          <Image
            src={require("./images/rocket.png")}
            position={"absolute"}
            top={"10vh"}
            left={"45vw"}
            width={"8vw"}
            height={"8vw"}
          />
          <br />
          <br />
          <Text
            color={"white"}
            width={"55%"}
            fontSize={"4vw"}
            fontWeight={"700"}
          >
            Getting Your Work Done Through Gaming!
          </Text>
          <br />
          <Text color={"gray"} width={"55%"} fontSize={"1vw"}>
            We created this software to making learning and work fun for others
            through games! Sign up now to get early access for Prodicity as soon
            as it gets released!
          </Text>
          <br />
          <br />
          <br />
          <form onSubmit={WriteToFile}>
            <Flex
              direction={"row"}
              justifyContent={"center"}
              alignItems={'center'}
              bg={"transparent"}
              border={"none"}
            >
              <Input
                type={"email"}
                required
                id={"email"}
                boxShadow={"0 0 30px 5px #B1C7FF"}
                color={"white"}
                fontSize={"1.5vw"}
                bgColor={"#232152"}
                width={"45vw"}
                padding={"4%"}
                outline={"none"}
                borderTopLeftRadius={20}
                borderBottomLeftRadius={20}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
                placeholder="Add your email..."
              />
              <Input
                display={'flex'}
                direction={'column'}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                type={"submit"}
                fontSize={"1.2vw"}
                width={"15vw"}
                value={"Get Early Access →"}
                boxShadow={"0 0 30px 5px #B1C7FF"}
                color={"white"}
                bgColor={"#161535"}
                height={"4.92vw"}
                borderTopRightRadius={20}
                borderBottomRightRadius={20}
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
              />
            </Flex>
          </form>
          <br />
          <br />
        </Flex>
      </Flex>

      <Flex
        id="about"
        bgGradient={"linear(to-b, #161535, #3E3B93)"}
        justifyContent={"center"}
        direction={"column"}
        width={"100vw"}
        height={"100vh"}
      >
        <Flex
          direction={"column"}
          width={"90vw"}
          borderTopRightRadius={20}
          borderBottomRightRadius={20}
          backgroundColor={"rgba(97, 94, 166, 0.75)"}
          padding={"5%"}
        >
          <Flex justifyContent={"center"} direction="row">
            <Flex direction={"column"} marginRight={"5%"} alignItems={'center'}>
              <Text color={"white"} fontWeight={"800"} fontSize={"3.5vw"}>
                About Us
              </Text>
              <br />
              <Image
                src={require("./images/prodTwo.png")}
                width={"15vw"}
                height={"15vw"}
              />
            </Flex>

            <Flex
              direction={"column"}
              justifyContent={"center"}
              marginLeft={"5%"}
            >
              <Text color={"white"} fontSize={"1.5vw"} width={"30vw"}>
                Hello, we are a company seeking to make people productive
                through video games. There will be various games like racing,
                boss fighting, map findings, and more!
                <br />
                <br />
                Furthermore, we have different types of options within the app.
                We have quests, parties, clans, sessions, to do lists, friend
                tracker, and various other features!
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={"row"}
            justifyContent={"center"}
            gap={"7%"}
            padding={"2vh"}
          >
            <Link
              target={"_blank"}
              href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA"
            >
              <Image
                src={require("./images/youtube.png")}
                width={"3vw"}
                height={"2vw"}
              />
            </Link>
            <Link target={"_blank"} href="https://discord.gg/PkHRjWzeDc">
              <Image
                src={require("./images/discord.png")}
                width={"3vw"}
                height={"2vw"}
              />
            </Link>
            <Link target={"_blank"} href="https://www.facebook.com/Prodicity/">
              <Image
                src={require("./images/facebook.png")}
                width={"3vw"}
                height={"2vw"}
              />
            </Link>
            <Link target={"_blank"} href="https://twitter.com/prodicity">
              <Image
                src={require("./images/twitter.png")}
                width={"3vw"}
                height={"2vw"}
              />
            </Link>
            <Link target={"_blank"} href="https://www.tiktok.com/@prodicity">
              <Image
                src={require("./images/tiktok.png")}
                width={"3vw"}
                height={"2vw"}
              />
            </Link>
            <Link
              target={"_blank"}
              href="https://www.instagram.com/prodicityteam/?hl=en"
            >
              <Image
                src={require("./images/instagram.png")}
                width={"3vw"}
                height={"2vw"}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        id="bosses"
        bgGradient={"linear(to-b, #3B398D, #323072)"}
        width={"100vw"}
        height={"auto"}
        direction={"column"}
        alignItems={"center"}
      >
        <Text color={"white"} fontSize={"4vw"} fontWeight={"700"}>
          Fight bosses with friends!
        </Text>
        <br />
        <Text color={"white"} fontSize={"1.5vw"}>
          Level up your characters and pets. Fight bosses with friends and
          complete challenges with your clan!
        </Text>
        <br />
        <br />
        <Image src={require("./images/gaming.png")} width={'70vw'} height = {'30vw'} />
      </Flex>

      <Flex
        id="description"
        paddingTop={"5%"}
        bgGradient={"linear(to-b, #312F6E, #3A378C)"}
        width={"100vw"}
        height={"auto"}
        direction={"column"}
        alignItems={"center"}
      >
        <Flex direction="row">
          <Image src={require("./images/imgOne.png")} width={"40vw"} height={"20vw"} />
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"40vw"}
            marginLeft={"5vw"}
          >
            <Text color={"white"} fontWeight={"800"} fontSize={"2.5vw"}>
              Group Sessions
            </Text>
            <br />
            <Text color={"white"} fontSize={"1.2vw"}>
              Group sessions but you have the option to conduct group and
              indicifual sessions. During these sessions you can chat related to
              studies, execute tasks on the todo list, and even listen to music!
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row">
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"40vw"}
            marginRight={"5vw"}
          >
            <Text color={"white"} fontWeight={"800"} fontSize={"2.5vw"}>
              Marketplace
            </Text>
            <br />
            <Text color={"white"} fontSize={"1.2vw"}>
              You can buy various characters in the market system for bragging
              rights and other amazing purposes, but in order to do so, you have
              to work up to that level...
            </Text>
          </Flex>
          <Image src={require("./images/imgTwo.png")} width={"40vw"} height={"20vw"} />
        </Flex>
      </Flex>

      <Flex
        id="staircase"
        paddingTop={"2vh"}
        bgGradient={"linear(to-b, #3A378C, #161535)"}
        width={"100vw"}
        height={"auto"}
        direction={"column"}
        alignItems={"center"}
      >
        <Text color={"white"} fontSize={"2vw"} fontWeight={"500"}>
          Prodicity
        </Text>
        <Text color={"white"} fontWeight={"600"} fontSize={"3vw"}>
          What makes Prodicity such a great platform?
        </Text>
        <Image src={require("./images/bigImg.png")} width={"85vw"} height={"42vw"} />
      </Flex>

      <Flex
        id="contact"
        paddingTop={"1%"}
        backgroundColor={"#161535"}
        width={"100vw"}
        height={"auto"}
        direction={"column"}
        alignItems={"center"}
      >
        <Text color={"white"} fontSize={"3.5vw"} fontWeight={"700"}>
          Let’s Talk
        </Text>
        <Text color={"gray"} width={"50vw"} fontSize={"1vw"}>
          If you need help you can visit the help center or read our About Us
          page. We are looking forward to answering any of your questions here!
          We hope you enjoy the app!
        </Text>
        <Flex direction={"row"} justifyContent={"center"} margin={0}>
          <form
            onSubmit={() => {
              window.open(
                "mailto:prodicityteam@gmail.com?subject=" +
                  document.getElementById("subj1").value +
                  "&body=" +
                  document.getElementById("body1").value
              );
            }}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                direction="column"
                justifyContent={"center"}
                marginBottom={"4vh"}
              >
                <Text color={"white"} fontSize={"1.4vw"} fontWeight={"600"}>
                  Email:
                </Text>
                <Input
                  type="email"
                  required
                  id={"eml1"}
                  boxShadow={"0 0 10px 5px #B1C7FF"}
                  color={"white"}
                  borderRadius={20}
                  fontSize={"1.4vw"}
                  bgColor={"#232152"}
                  width={"44vw"}
                  padding={"4%"}
                  placeholder={"Enter Email Here"}
                />
              </Flex>

              <Flex
                direction="column"
                justifyContent={"center"}
                marginBottom={"4vh"}
              >
                <Text color={"white"} fontSize={"1.4vw"} fontWeight={"600"}>
                  Subject:
                </Text>
                <Input
                  type="text"
                  required
                  id={"subj1"}
                  boxShadow={"0 0 10px 5px #B1C7FF"}
                  color={"white"}
                  borderRadius={20}
                  fontSize={"1.4vw"}
                  bgColor={"#232152"}
                  width={"44vw"}
                  padding={"4%"}
                  placeholder={"Enter Subject Here"}
                />
              </Flex>

              <Flex
                direction="column"
                justifyContent={"center"}
                marginBottom={"4vh"}
              >
                <Text color={"white"} fontSize={"1.4vw"} fontWeight={"600"}>
                  Message:
                </Text>
                <Textarea
                  required
                  id={"body1"}
                  resize={"vertical"}
                  boxShadow={"0 0 10px 5px #B1C7FF"}
                  color={"white"}
                  borderRadius={20}
                  fontSize={"1.4vw"}
                  bgColor={"#232152"}
                  width={"44vw"}
                  height={"25vh"}
                  padding={"4%"}
                  placeholder={"Enter Message Here"}
                />
              </Flex>

              <Input
                type={"submit"}
                justifyContent={"center"}
                alignItems={"center"}
                value="Submit"
                width={"20vw"}
                color={"white"}
                boxShadow={"0 0 10px 5px #B1C7FF"}
                backgroundColor={"#232152"}
                fontSize={"1.4vw"}
              />
            </Flex>
          </form>

          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={require("./images/contact.png")}
              width={"100%"}
              height={"60%"}
            />
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={require("./images/nav.png")}
                width={"13%"}
                height={"65%"}
                marginRight={"1vw"}
              />
              <Text
                color={"white"}
                fontWeight={"600"}
                width={"12vw"}
                fontSize={"1vw"}
              >
                Cupertino, CA 95014 United States
              </Text>
            </Flex>
            <br />
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={require("./images/mail.png")}
                width={"13%"}
                height={"65%"}
                marginRight={"1vw"}
              />
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCbVcLgwddlpwrXKqNPzsnvWkJLXzJDhHzVKHTDVKTktlBnklgdFXWbzddDZtbvRmhRZDs"
                target={"_blank"}
                color={"white"}
                fontWeight={"600"}
                width={"12vw"}
                fontSize={"1vw"}
              >
                prodicityteam@gmail.com
              </Link>
            </Flex>
            <br />
            <Flex
              direction={"row"}
              justifyContent={"center"}
              gap={"7%"}
              padding={"2vh"}
            >
              <Link
                target={"_blank"}
                href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA"
              >
                <Image
                  src={require("./images/youtube.png")}
                  width={"4vw"}
                  height={"2vw"}
                />
              </Link>
              <Link target={"_blank"} href="https://discord.gg/PkHRjWzeDc">
                <Image
                  src={require("./images/discord.png")}
                  width={"4vw"}
                  height={"2vw"}
                />
              </Link>
              <Link
                target={"_blank"}
                href="https://www.facebook.com/Prodicity/"
              >
                <Image
                  src={require("./images/facebook.png")}
                  width={"4vw"}
                  height={"2vw"}
                />
              </Link>
              <Link target={"_blank"} href="https://twitter.com/prodicity">
                <Image
                  src={require("./images/twitter.png")}
                  width={"4vw"}
                  height={"2vw"}
                />
              </Link>
              <Link target={"_blank"} href="https://www.tiktok.com/@prodicity">
                <Image
                  src={require("./images/tiktok.png")}
                  width={"4vw"}
                  height={"2vw"}
                />
              </Link>
              <Link
                target={"_blank"}
                href="https://www.instagram.com/prodicityteam/?hl=en"
              >
                <Image
                  src={require("./images/instagram.png")}
                  width={"4vw"}
                  height={"2vw"}
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <br />
        <Text color={"white"} fontSize={'1.2vw'}>Copyright © Prodicity Inc. 2022</Text>
      </Flex>
    </Box>
  );
};

export default App;
