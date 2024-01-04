import { useRef, useEffect } from "react";
import Typed, { TypedOptions } from "typed.js";
import { Text, TextProps } from '../../components/Text'

function useAnimationTextTyped(text: Array<string>, options: TypedOptions = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current as any, {
      strings: text,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
      ...options
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return {
    textAnimatedTyped: ref,
  }
}

type TextTypedAnimatedProps = TextProps & {
  animatedText: Array<string>;
  animationOptions?: TypedOptions;
}

const TextTypedAnimated = ({ animatedText, animationOptions = {}, ...rest }: TextTypedAnimatedProps) => {
  const { textAnimatedTyped } = useAnimationTextTyped(animatedText, animationOptions);

  return (
    <Text ref={textAnimatedTyped} {...rest} />
  )
}

export {
  useAnimationTextTyped,
  TextTypedAnimated,
}
