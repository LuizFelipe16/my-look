import { Stack } from '@chakra-ui/react';
import { MouseEventHandler, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { apiNext } from 'services';
import { useToast, useUser } from 'hooks';
import { appVariables } from '_app';
import { Sign } from '.';
import { Input } from '../Input';
import { Checkbox } from '../Input/Checkbox';
import { validation } from '_lib/global';

interface ISignUpProps {
  onClickAlreadyHaveAccount: MouseEventHandler<HTMLParagraphElement>;
}

type CreateUserFormData = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  isAcceptTerms: string;
}

const createUserFormSchema = validation.createForm(is => ({
  username: is.string().required("Username is required").min(3, 'Minimum of 3 characters'),
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  password: is.string().required("Password is required").min(6, 'Minimum of 6 characters'),
  password_confirmation: is.string().oneOf([null, is.ref('password')], 'Passwords do not match'),
  isAcceptTerms: is.boolean().isTrue().required("To continue, accept our terms of use"),
}))

export const SignUp = ({ onClickAlreadyHaveAccount }: ISignUpProps) => {
  const { errorToast, successToast } = useToast();
  const { onFailSignup, signIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    formState,
    handleSubmit
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  });

  const errors = formState.errors;

  const handleRegisterNewUser: SubmitHandler<CreateUserFormData> = async (values) => {
    setIsLoading(true);

    await apiNext.post('/users/signup', values).then(({ data }) => {
      if (data?.error) {
        errorToast(data?.error);
        setIsLoading(false);
        return;
      }
    
      if (data?.message) {
        successToast(data?.message);
        reset();
        signIn({ token: data?.token, isFirstSignin: true });
        setIsLoading(false);
        return;
      }
    }).catch(() => {
      setIsLoading(false);
      onFailSignup();
    });
  }

  return (
    <Sign
      title={appVariables.texts.signup.title}
      description={appVariables.texts.signup.description}
      buttonText="Signup"
      onSubmitForm={handleSubmit(handleRegisterNewUser)}
      subtitle="already have an account? begin session"
      onClick={onClickAlreadyHaveAccount}
      isLoading={isLoading}
    >
      <Input
        is="username"
        placeholder="Username"
        error={errors.username}
        {...register('username')}
      />

      <Input
        type="email"
        is="email"
        placeholder="E-mail"
        error={errors.email}
        {...register('email')}
      />

      <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
        <Input
          type="password"
          is="password"
          placeholder="Password"
          error={errors.password}
          {...register('password')}
        />
        <Input
          type="password"
          is="password_confirmation"
          placeholder="Password confirm"
          error={errors.password_confirmation}
          {...register('password_confirmation')}
        />
      </Stack>

      <Checkbox 
        is="isAcceptTerms"
        ml='1' 
        textStyle={'signup-terms-conditions'} 
        error={errors.isAcceptTerms}
        href='/terms'
        label='I have read and agree to the terms of use.' 
        {...register('isAcceptTerms')}
      />
    </Sign>
  );
};
