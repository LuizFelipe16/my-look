import { apiNext } from 'services';
import { useUser, useToast } from 'hooks';
import { appVariables } from '_app';
import { Sign, ISignInProps } from '.';
import { Input } from '../Input';
import { validation, useForm, FormSubmit, ClickElement } from '_lib/global';
import { useAppStatus } from 'context';
import { OnEndHandle } from 'types';

type SignInFormData = {
  email: string;
  password: string;
}

const schema = validation.createForm(is => ({
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  password: is.string().required("Password is required"),
}))

export const SignIn = ({ onClickNotHaveAccount }: ISignInProps) => {
  const { signIn, isLoading, setIsLoading, onFailSignin, signInWithGoogle, tryLoginWithGoogle } = useUser();
  const { errorToast, successToast } = useToast();
  const { AppStatus } = useAppStatus();
  const { register, reset, errors, handleSubmit } = useForm<SignInFormData>({ schema });

  const handleSignInUser: FormSubmit<SignInFormData> = async (values) => {
    setIsLoading(true);
    AppStatus.set('loading');

    const onEnd = ({ err, succ, status = 'none' }: OnEndHandle) => {
      AppStatus.set(status);
      setIsLoading(false);
      if (err) errorToast(err);
      if (succ) { successToast(succ); reset(); };
    }

    await apiNext.post('/users/signin', values).then(({ data }) => {
      if (data?.error) {
        onEnd({ err: data?.error })
        return;
      }

      if (data?.message) {
        onEnd({ status: 'done', succ: data?.message,  });
        signIn({ token: data?.token, bio: data?.bio, name: data?.name, phone: data?.phone });
        return;
      }
    }).catch(() => {
      onEnd({});
      onFailSignin();
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
      onSubmitSigninGoogle={tryLoginWithGoogle}
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
