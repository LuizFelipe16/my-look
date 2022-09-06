import { Button as CButton, Stack } from '@chakra-ui/react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiLockAlt, BiLogOutCircle } from 'react-icons/bi';
import { View, myStyles, Text, Avatar, Button } from '_lib/web';
import { validation, FormSubmit, useForm } from '_lib/global';
import { Input, Textarea, Page } from 'components';
import { useToast, useUser } from 'hooks';
import { withSSRAuth } from 'functions';
import { theme } from '_app';
import { apiNext } from 'services';
import { MyStylesAccount } from './styles';

type EditFormData = {
  username: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
}

const formSchema = validation.createForm(is => ({
  username: is.string().required("Username is required").min(3, 'Minimum of 3 characters'),
  name: is.string().required("Name is required").min(3, 'Minimum of 3 characters'),
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  phone: is.number().min(10, 'Minimum of 11 characters').max(11, 'Max of 11 characters').required("Phone is required"),
  bio: is.string().required("Bio is required").min(10, 'Minimum of 10 characters'),
}));

export default function Account() {
  const { user, signOut, signIn, isLoading, setIsLoading } = useUser();
  const { successToast, errorToast } = useToast();
  const isDisableInputs = user.accountType === 'google';

  const { register, errors, onSubmit } = useForm<EditFormData>({ schema: formSchema, initialState: user });

  const handleUpdateUser: FormSubmit<EditFormData> = async (values) => {
    setIsLoading(true);

    await apiNext.put(`/users/${user?.id}`, values).then(({ data }) => {
      if (data?.error) {
        errorToast(data?.error);
        setIsLoading(false);
        return;
      }

      if (data?.message) {
        successToast(data?.message);

        const user = data?.user;

        signIn({
          token: String(user?.token),
          name: String(user?.name),
          phone: String(user?.phone),
          bio: String(user?.bio),
        });
        setIsLoading(false);

        return;
      }
    }).catch(() => {
      errorToast('Unexpected error, contact support.');
      setIsLoading(false);
    });
  }

  return (
    <Page styles={MyStylesAccount} title='Account'>
      <View style={`page-welcome`}>
        <View style={`side-menu`}>
          <View style={`infos`}>
            <Avatar size='xl' name={user?.name} src={user?.avatar} />
            <Text style={`username`} text={user?.username} />
            <Text style={`email`} text={user?.email} />

            {user?.accountType === 'google' && (
              <Text style={`edit-disable`} text='Your account is linked to the Google provider, please create an account on our website to edit your information.' />
            )}
          </View>

          <Button style={`option active`} onPress={() => null}>
            <AiOutlineSetting size={20} />
            Account
          </Button>

          <Button style={`option deactivate`} onPress={() => null}>
            <BiLockAlt size={20} />
            Security
          </Button>

          <Button style={`option`} onPress={signOut}>
            <BiLogOutCircle size={20} />
            Logout
          </Button>
        </View>
          
        <View style={`content-menu`}>
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
              isLoading={isLoading}
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
        </View>
      </View>
    </Page>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});
