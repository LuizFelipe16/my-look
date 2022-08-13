import { MouseEventHandler, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { apiNext } from 'services';
import { useUser, useToast } from 'hooks';
import { appVariables } from '_app';
import { Sign } from '.';
import { Input } from '../Input';
import { validation } from '_lib/global';
import { Button } from '_lib/web';
import { FaGoogle } from 'react-icons/fa';

interface ISignInProps {
  onClickNotHaveAccount: MouseEventHandler<HTMLParagraphElement>;
}

type SignInUserFormData = {
  email: string;
  password: string;
}

const signInUserFormSchema = validation.createForm(is => ({
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  password: is.string().required("Password is required"),
}))

export const SignIn = ({ onClickNotHaveAccount }: ISignInProps) => {
  const { signIn, isLoading: isLoadingUser, onFailSignin } = useUser();
  const { errorToast, successToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    formState,
    handleSubmit,
  } = useForm<SignInUserFormData>({
    resolver: yupResolver(signInUserFormSchema)
  });

  const errors = formState.errors;

  const handleSignInUser: SubmitHandler<SignInUserFormData> = async (values) => {
    setIsLoading(true);

    await apiNext.post('/users/signin', values).then(({ data }) => {
      if (data?.error) {
        errorToast(data?.error);
        setIsLoading(false);
        return;
      }

      if (data?.message) {
        successToast(data?.message);

        reset();
        signIn({ token: data?.token });
        setIsLoading(isLoadingUser);
        setIsLoading(false);

        return;
      }
    }).catch(() => {
      onFailSignin();
      setIsLoading(false);
    });
  }

  return (
    <Sign
      title={appVariables.texts.signin.title}
      buttonText="Signin"
      onSubmitForm={handleSubmit(handleSignInUser)}
      subtitle="not have an account yet?"
      onClick={onClickNotHaveAccount}
      isLoading={isLoading}
      isSigninGoogle
    >
      <Input
        type="email"
        is="email"
        label="Your e-mail"
        placeholder="E-mail"
        error={errors.email}
        {...register('email')}
      />

      <Input
        type="password"
        is="password"
        label="Your password"
        placeholder="Password"
        error={errors.password}
        {...register('password')}
      />
    </Sign>
  );
}
