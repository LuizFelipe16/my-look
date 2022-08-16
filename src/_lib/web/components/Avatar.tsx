import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react'

interface MyAvatarProps extends AvatarProps {
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  style?: any;
};

const Avatar = ({ style, size, ...rest }: MyAvatarProps) => (
  <ChakraAvatar size={size} className={style}  {...rest} />
)

export { Avatar };
