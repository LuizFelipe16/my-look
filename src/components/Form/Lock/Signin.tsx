import { APIClient } from 'services';
import { useUser, useToast } from 'hooks';
import { Sign } from '../Sign';
import { Input } from '../Input';
import { validation, useForm, FormSubmit } from '_lib/global';
import { useAppStatus } from 'context';
import { OnEndHandle } from 'types';
import { FaLock } from 'react-icons/fa';
import { useRouter } from 'next/router';

type AdminSignInFormData = {
  email: string;
  password: string;
}

const schema = validation.createForm(is => ({
  email: is.string().email("Invalid e-mail").required("E-mail is required"),
  password: is.string().required("Password is required"),
}))

export const AdminSignIn = () => {
  const { signIn, isLoading, setIsLoading, onFailSignin } = useUser();
  const { errorToast, successToast } = useToast();
  const { AppStatus } = useAppStatus();
  const router = useRouter();
  const { register, reset, errors, handleSubmit } = useForm<AdminSignInFormData>({ schema });

  const handleSignInUser: FormSubmit<AdminSignInFormData> = async (values) => {
    setIsLoading(true);
    AppStatus.set('loading');

    const onEnd = ({ err, succ, status = 'none' }: OnEndHandle) => {
      AppStatus.set(status);
      setIsLoading(false);
      if (err) errorToast(err);
      if (succ) { successToast(succ); reset(); };
    }

    const onCatch = () => {
      onEnd({});
      onFailSignin();
    }

    await APIClient.Admin.verify(values).then(({ data }) => {
      if (data?.error) {
        onEnd({ err: data?.error })
        return;
      }

      if (data?.message) {
        onEnd({ status: 'done', succ: data?.message,  });
        // signIn({ token: data?.token, bio: data?.bio, name: data?.name, phone: data?.phone });
        return;
      }
    }).catch(onCatch);
  }

  return (
    <Sign
      buttonText={<FaLock />}
      onSubmitForm={handleSubmit(handleSignInUser)}
      isLoading={isLoading}
      formW={["90%", "90%", "45%"]}
      subtitle='Home'
      onClick={() => router.push('/')}
    >
      <Input
        type="email"
        is="email"
        placeholder="E-mail"
        error={errors.email}
        {...register('email')}
      />

      <Input
        type="password"
        is="password"
        placeholder="Password"
        error={errors.password}
        {...register('password')}
      />
    </Sign>
  );
}
