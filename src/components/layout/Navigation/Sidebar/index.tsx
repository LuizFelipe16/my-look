import { Flex, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue, Button, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { theme } from "_app";
import { FaIndent } from "react-icons/fa";
import { ItemSidebarNav } from "./ItemSidebarNav";

export function SidebarNav() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        w="100vw"
        h="14vh"
        position="fixed"
        bg="transparent"
        zIndex="10000"
        align="center"
        justify="flex-end"
        px="5"
        top="-1"
      >
        <Button bg={theme.colors.primary} size="lg" color="gray.900" onClick={onOpen} rounded={'full'} boxShadow='xl'>
          <Icon as={FaIndent} color={theme.colors.background} />
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay zIndex="100000">
          <DrawerContent bg={theme.colors.background} p="4">
            <DrawerCloseButton onClick={onClose} color={theme.colors.primary} mt="6" />
            <DrawerHeader
              display="flex"
              flexDirection="row"
              mb="12"
              color={theme.colors.primary}
              fontSize="2xl"
            >
              Navegue
            </DrawerHeader>
            <DrawerBody>
              <VStack
                w="100%"
                color={theme.colors.black}
                fontSize="lg"
                spacing="10"
                align="flex-start"
                fontFamily="Montserrat"
              >
                <ItemSidebarNav href="about" text="Home" />
                <ItemSidebarNav href="services" text="Services" />
                <ItemSidebarNav href="portfolio" text="Contact" />
                <ItemSidebarNav href="contact" text="Login" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}