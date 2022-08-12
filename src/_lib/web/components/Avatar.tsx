import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react'

interface MyAvatarProps extends AvatarProps {
  style?: any;
};

const Avatar = ({ style, ...rest }: MyAvatarProps) => (
  <ChakraAvatar className={style}  {...rest} />
)

export { Avatar };
