import { Button as CButton, Stack } from '@chakra-ui/react';
import { myStyles, Text } from '_lib/web';
import { Input } from 'components';
import { theme } from '_app';
import { useAppStatus } from 'context';
import { OnEndHandle } from 'types';
import { validation, FormSubmit, useForm, onUpdate } from '_lib/global';
import { useToast, useUser } from 'hooks';

type EditSecurityProps = {
  isDisableInputs: boolean
}

type EditFormData = {
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = validation.createForm(is => ({
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  password: is.string().required("Password is required").min(6, 'Minimum of 6 characters'),
  password_confirmation: is.string().oneOf([null, is.ref('password')], 'Passwords do not match'),
}));

function EditSecurity({ isDisableInputs }: EditSecurityProps) {
  const { user, Session, setIsLoading } = useUser();
  const { AppStatus } = useAppStatus();
  const { errorToast } = useToast();

  const { register, errors, onSubmit, setValue } = useForm<EditFormData>({ schema, initialState: user as Object });

  onUpdate(() => {
    if (user) {
      setValue('email', user?.email);
      setValue('password', '');
      setValue('password_confirmation', '');
    }
  }, [user]);

  const handleUpdateUser: FormSubmit<EditFormData> = async (values) => {
    setIsLoading(true);
    AppStatus.set('loading');

    const onEnd = ({ err, status = 'none' }: OnEndHandle) => {
      AppStatus.set(status);
      setIsLoading(false);
      if (err) errorToast(err);
    }

    const newData = { email: values.email, password: values.password }

    await Session.updateCredentials(newData, onEnd);
  }

  return (
    <>
      <Text type='h1' text='Account Protect' />
      <Text type='h2' text='Security' />

      <Stack as='form' onSubmit={onSubmit(handleUpdateUser)} direction={'column'} w='100%' spacing={["4", "6", "6"]} align={['center', 'center', 'flex-start']}>
        <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Input
            type="email"
            is="email"
            label='E-mail address'
            placeholder="E-mail"
            error={errors.email}
            isDisabled={isDisableInputs}
            {...register('email')}
          />
        </Stack>
        
        <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Input
            type="password"
            is="password"
            label='Password'
            placeholder="Digit your password or your new password"
            error={errors.password}
            isDisabled={isDisableInputs}
            {...register('password')}
          />
          <Input
            type="password"
            is="password_confirmation"
            label='Password confirm'
            placeholder="Confirm password"
            error={errors.password_confirmation}
            isDisabled={isDisableInputs}
            {...register('password_confirmation')}
          />
        </Stack>

        <CButton
          type="submit"
          fontFamily={theme.font.typography.text}
          fontSize="sm"
          w={["50%", "50%", "35%"]}
          size="md"
          bgColor={theme.colors.primary}
          color="white"
          fontWeight="400"
          transition="0.2s"
          isDisabled={isDisableInputs}
          _hover={{
            filter: "brightness(70%)"
          }}
        >
          Save changes
        </CButton>
      </Stack>
    </>
  );
}

const EditSecurityStyles = myStyles.style(theme => ([
  theme.myStyles.create('edit-security', []),
]));

export { EditSecurity, EditSecurityStyles };
