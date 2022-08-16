import { AiOutlineSetting } from 'react-icons/ai';
import { BiLockAlt, BiLogOutCircle } from 'react-icons/bi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, TitlePage, myStylesProvider, Text, Avatar, Button } from '_lib/web';
import { onMount, useState, validation } from '_lib/global';
import { Navigation, Loading, Footer, Input, Textarea } from 'components';
import { useToast, useUser } from 'hooks';
import { withSSRAuth } from 'functions';
import { Button as CButton, Stack } from '@chakra-ui/react';
import { theme } from '_app';
import { apiNext } from 'services';

type EditFormData = {
  username: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
}

const createUserFormSchema = validation.createForm(is => ({
  username: is.string().required("Username is required").min(3, 'Minimum of 3 characters'),
  name: is.string().required("Name is required").min(3, 'Minimum of 3 characters'),
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  phone: is.number().min(10, 'Minimum of 11 characters').max(11, 'Max of 11 characters').required("Phone is required"),
  bio: is.string().required("Bio is required").min(10, 'Minimum of 10 characters'),
}));

export default function Account() {
  const { user, signOut, signIn, isLoading, setIsLoading } = useUser();
  const { successToast, errorToast } = useToast();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isInputsDisable, setIsInputsDisable] = useState(user.accountType === 'google')

  const {
    register,
    reset,
    formState,
    handleSubmit
  } = useForm<EditFormData>({
    resolver: yupResolver(createUserFormSchema),
    defaultValues: {
      ...user
    }
  });

  const errors = formState.errors;

  const handleUpdateUser: SubmitHandler<EditFormData> = async (values) => {
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

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 100) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t='Home' />
        <Navigation />

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

            <Button style={`option`} onPress={() => null}>
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

            <Stack as='form' onSubmit={handleSubmit(handleUpdateUser)} direction={'column'} w='100%' spacing={["4", "6", "6"]} align={['center', 'center', 'flex-start']}>
              <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
                <Input
                  is="username"
                  label='Username'
                  placeholder="Username"
                  error={errors.username}
                  isDisabled={isInputsDisable}
                  {...register('username')}
                />
                <Input
                  is="name"
                  label='Full name'
                  placeholder="name"
                  error={errors.name}
                  isDisabled={isInputsDisable}
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
                  isDisabled={isInputsDisable}
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
                isDisabled={isInputsDisable}
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
                isDisabled={isInputsDisable}
                _hover={{
                  filter: "brightness(70%)"
                }}
              >
                Save changes
              </CButton>
            </Stack>
          </View>
        </View>

        <Footer />
      </View>
    </MyStyles>
  );
}

const OptionStyles = myStylesProvider.style((theme) => ([
  theme.myStyles.childClass('option', [
    theme.w.size(80, '%'),
    theme.border.rounded.sm,
    theme.padding.horizontal.size(3),
    theme.padding.vertical.size(0.7),
    theme.row.centerStart,
    theme.margin.top.size(0.5),
    theme.gapEls.full.size(0.5),
    theme.font.apply('rg', 1, theme.font.typography.title, theme.colors.black),

    theme.transition.apply(0.2),
    theme.effect.hover.inOwn([theme.bg.primary, theme.textColor.background, theme.effect.filter.opacity(0.7)]),

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.padding.horizontal.size(1.5)], incluide: ['m', 't']
    }),

    `
      &.active {
        ${theme.bg.primary}
        ${theme.textColor.background}
        ${theme.effect.hover.inOwn([theme.effect.filter.opacity(1), theme.effect.filter.glow(0.9)])}
      }
    `
  ])
]));

const InfosStyles = myStylesProvider.style((theme) => ([
  theme.myStyles.childClass('infos', [
    theme.column.centerCenter,
    theme.margin.top.size(2.8),
    theme.margin.bottom.size(2.8),
    theme.padding.horizontal.lg,
    theme.gapEls.full.size(0.3),
  ], [
    theme.myStyles.childClass('username', [
      theme.margin.top.md,
      theme.font.apply('bl', 1.2, theme.font.typography.title, theme.colors.black)
    ]),
    theme.myStyles.childClass('email', [theme.font.apply('rg', 1, theme.font.typography.title, theme.colors.grayLight)]),
    theme.myStyles.childClass('edit-disable', [
      theme.font.apply('rg', 0.8, theme.font.typography.text, theme.colors.attention),
      theme.margin.top.md,
      theme.font.style.alignCenter,
    ]),
  ])
]));

const MyStyles = myStylesProvider.create((theme) => ([
  theme.bg.white,

  theme.myStyles.create('page-welcome', [
    theme.w.size(100, '%'),
    theme.h.auto(),
    theme.h.min(85, 'vh'),
    theme.row.centerBetween,
    theme.margin.top.size(5),
    theme.margin.bottom.size(2),

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.column.centerCenter], incluide: ['m', 't', 'l']
    })
  ], [
    theme.myStyles.childClass('side-menu', [
      theme.w.size(30, '%'),
      theme.w.min(25, 'vw'),
      theme.h.size(100, '%'),
      theme.border.in.right(2, theme.colors.primary),
      theme.column.centerStart,

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.border.in.right(0, theme.colors.primary), theme.w.size(100, '%')], incluide: ['m', 't', 'l']
      })
    ], [InfosStyles, OptionStyles]),

    theme.myStyles.childClass('content-menu', [
      theme.h.size(100, '%'),
      theme.w.size(100, '%'),
      theme.column.startStart,
      theme.padding.horizontal.size(3),
      theme.gapEls.full.size(1),

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.column.centerStart], incluide: ['m', 't', 'l']
      })
    ], [
      theme.myStyles.child('h1', [
        theme.font.apply('sb', 1.8, theme.font.typography.title, theme.colors.black),
        theme.margin.top.size(2.8)
      ]),

      theme.myStyles.child('h2', [
        theme.font.apply('sb', 1.2, theme.font.typography.title, theme.colors.primary),

        theme.responsiveness.platforms({}, {
          comommStyle: [theme.margin.bottom.size(3)], incluide: ['m', 't', 'l']
        })
      ]),
    ]),
  ])
]), 'div', true);

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});
