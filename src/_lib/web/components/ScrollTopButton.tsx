import { Icon } from "@chakra-ui/react";
import { HTMLAttributes, ReactNode } from "react";
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import { Button } from "./Button";

interface ScrollTopButtonProps extends HTMLAttributes<HTMLButtonElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  isNotIcon?: boolean;
};

export function ScrollTopButton({ style, children, isNotIcon = false, ...rest }: ScrollTopButtonProps) {
  return (
    <Button
      style={`my-scrollToTop ${style}`}
      onPress={() => animateScroll.scrollToTop({ duration: 1000 })}
      {...rest}
    >
      {!isNotIcon && <Icon as={FaArrowUp} />} 
      {isNotIcon && 'back to top'}
      {children}
    </Button>
  );
}
