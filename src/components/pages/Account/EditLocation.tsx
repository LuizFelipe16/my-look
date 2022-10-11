import { Button as CButton, Stack } from '@chakra-ui/react';
import { myStyles, Text } from '_lib/web';
import { Input, Textarea } from 'components';
import { theme } from '_app';
import { useAppStatus } from 'context';
import { OnEndHandle } from 'types';
import { validation, FormSubmit, useForm, onUpdate } from '_lib/global';
import { useToast, useUser } from 'hooks';

type EditLocationProps = {
  isDisableInputs: boolean
}

type EditFormData = {
  cep: string;
  street: string;
  city: string;
  complement: string;
  additional_information: string;
}

const schema = validation.createForm(is => ({
  cep: is.string().required("CEP is required").min(3, 'Minimum of 3 characters'),
  street: is.string().required("Street is required").min(3, 'Minimum of 3 characters'),
  city: is.string().required("City is required").min(3, 'Minimum of 3 characters'),
  complement: is.string().required("Complement is required").min(3, 'Minimum of 3 characters'),
  additional_information: is.string().required("Additional Informations is required").min(5, 'Minimum of 5 characters'),
}));

function EditLocation({ isDisableInputs }: EditLocationProps) {
  const { user, Session, setIsLoading } = useUser();
  const { AppStatus } = useAppStatus();
  const { errorToast } = useToast();

  const { register, errors, onSubmit } = useForm<EditFormData>({ schema, initialState: user as Object });

  onUpdate(() => {
    if (user) {
      // setValue('cep', user?.bio)
      // setValue('street', user?.name)
      // setValue('city', user?.username)
      // setValue('complement', user?.phone)
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

    await Session.updateProfile(values, onEnd)
  }

  return (
    <>
      <Text type='h1' text='Account Details' />
      <Text type='h2' text='Location Info' />

      <Stack as='form' onSubmit={onSubmit(handleUpdateUser)} direction={'column'} w='100%' spacing={["4", "6", "6"]} align={['center', 'center', 'flex-start']}>
        <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Input
            is="cep"
            label='CEP'
            placeholder="CEP"
            error={errors.cep}
            isDisabled={isDisableInputs}
            {...register('cep')}
          />
          <Input
            is="street"
            label='Full Street Address'
            placeholder="street"
            error={errors.street}
            isDisabled={isDisableInputs}
            {...register('street')}
          />
        </Stack>
          
        <Stack direction={["column", "row", "row"]} w="100%" spacing={["4", "2", "2"]} justify="space-between">
          <Input
            is="city"
            label='City'
            placeholder="city"
            error={errors.city}
            isDisabled={isDisableInputs}
            {...register('city')}
          />
          <Input
            is="complement"
            label='Complement'
            placeholder="Complement"
            error={errors.complement}
            isDisabled={isDisableInputs}
            {...register('complement')}
          />
        </Stack>

        <Textarea
          is="additional_information"
          label='Additional Informations'
          maxLength={250}
          minHeight={110}
          resize={'none'}
          placeholder="Add a additional informations..."
          error={errors.additional_information}
          isDisabled={isDisableInputs}
          {...register('additional_information')}
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

const EditLocationStyles = myStyles.style(theme => ([
  theme.myStyles.create('edit-location', [
    
  ]),
]));

export { EditLocation, EditLocationStyles };
