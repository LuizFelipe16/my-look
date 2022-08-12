import { Checkbox as ChakraCheckbox, CheckboxProps as CCheckboxProps } from '@chakra-ui/react'
import { Text } from '../Text';

interface CheckboxProps extends CCheckboxProps {
  text?: string;
  defValue?: boolean;
  textStyle?: string | any;
  iconColor?: string;
};

function Checkbox({
  text,
  defValue = false,
  textStyle,
  iconColor,
  ...rest
}: CheckboxProps) {
  return (
    <ChakraCheckbox
      iconColor={iconColor}
      defaultChecked={defValue}
      {...rest}
    >
      {!!text && <Text style={textStyle} text={text} />}
    </ChakraCheckbox>
  );
};

export { Checkbox };
export type { CheckboxProps }