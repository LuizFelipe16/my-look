import { Button as CButton, Stack } from '@chakra-ui/react';
import { myStyles, Text } from '_lib/web';
import { Input, Textarea } from 'components';
import { theme } from '_app';
import { apiNext } from 'services';
import { useAppStatus } from 'context';
import { OnEndHandle } from 'types';
import { validation, FormSubmit, useForm, onUpdate } from '_lib/global';
import { useToast, useUser } from 'hooks';

type EditInformationsProps = {
  isDisableInputs: boolean
}

type EditFormData = {
  username: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
}

const schema = validation.createForm(is => ({
  username: is.string().required("Username is required").min(3, 'Minimum of 3 characters'),
  name: is.string().required("Name is required").min(3, 'Minimum of 3 characters'),
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  phone: is.number().required("Phone is required"),
  bio: is.string().required("Bio is required").min(10, 'Minimum of 10 characters'),
}));

function EditInformations({ isDisableInputs }: EditInformationsProps) {
  const { user, Session, setIsLoading } = useUser();
  const { AppStatus } = useAppStatus();
  const { errorToast } = useToast();

  const { register, errors, onSubmit, setValue } = useForm<EditFormData>({ schema, initialState: user as Object });

  onUpdate(() => {
    if (user) {
      setValue('bio', user?.bio)
      setValue('name', user?.name)
      setValue('username', user?.username)
      setValue('phone', user?.phone)
      setValue('email', user?.email)
    }
  }, [user])

  const handleUpdateUser: FormSubmit<EditFormData> = async (values) => {
    setIsLoading(true);
    AppStatus.set('loading');

    const onEnd = ({ err, status = 'none' }: OnEndHandle) => {
      AppStatus.set(status);
      setIsLoading(false);
      if (err) errorToast(err);
    }

    await apiNext.put(`/users/${user?.id}`, values).then(async ({ data }) => {
      if (data?.error) {
        onEnd({ err: data?.error })
        return;
      }

      if (data?.message) {
        setTimeout(async () => {
          await Session.loadProfile(data?.user?.token, false).then(() => onEnd({ status: 'done' }));
        }, 2000)

        return;
      }
    }).catch(() => onEnd({ err: 'Unexpected error, contact support.' }));
  }

  return (
    <>
      <Text type='h1' text='Account Details' />
      <Text type='h2' text='Basic Info' />

      <Stack as='form' onSubmit={onSubmit(handleUpdateUser)} direction={'column'} w='100%' spacing={["4", "6", "6"]} align={['center', 'center', 'flex-start']}>
        <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Input
            is="username"
            label='Username'
            placeholder="Username"
            error={errors.username}
            isDisabled={isDisableInputs}
            {...register('username')}
          />
          <Input
            is="name"
            label='Full name'
            placeholder="name"
            error={errors.name}
            isDisabled={isDisableInputs}
            {...register('name')}
          />
        </Stack>
          
        <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Input
            is="email"
            label='E-mail address'
            placeholder="email"
            error={errors.email}
            isDisabled={true}
            {...register('email')}
          />
          <Input
            is="phone"
            label='Phone (+55) * no special characters'
            placeholder="19 00000 0000"
            error={errors.phone}
            isDisabled={isDisableInputs}
            {...register('phone')}
          />
        </Stack>

        <Textarea
          is="bio"
          label='Bio'
          maxLength={250}
          minHeight={110}
          resize={'none'}
          placeholder="Add a short bio..."
          error={errors.bio}
          isDisabled={isDisableInputs}
          {...register('bio')}
        />

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

const EditInformationsStyles = myStyles.style(theme => ([
  theme.myStyles.create('edit-infos', [
    
  ]),
]));

export { EditInformations, EditInformationsStyles };
