import { validation } from '_lib/global';
import {
  DeepRequired,
  FieldErrorsImpl,
  useForm as useFormR,
  UseFormHandleSubmit,
  SubmitHandler,
  FieldValues,
  UseFormProps,
  UseFormReturn,
  DeepPartial,
  UseFormReset
} from 'react-hook-form';

export type FormSubmit<FormProps> = SubmitHandler<FormProps>;

interface TUseFormReturn<TF, TC> extends UseFormReturn<TF, TC> {
  errors: FieldErrorsImpl<DeepRequired<TF>>;
  onSubmit: UseFormHandleSubmit<TF>;
  isFieldDisable: boolean;
  cleanFormValues: UseFormReset<TF>;
}

interface TUseFormProps<TF, TC> extends UseFormProps<TF, TC> {
  initialState?: DeepPartial<TF> | undefined;
  schema: any;
  onDisableFields?: boolean;
}

export function useMyForm<TFieldValues extends FieldValues = FieldValues, TContext = any>
({ initialState, schema, resolver, onDisableFields = false, ...rest }: TUseFormProps<TFieldValues, TContext>): TUseFormReturn<TFieldValues, TContext> {
  const { register, formState, handleSubmit, reset, ...restReturn } = useFormR<TFieldValues>({
    defaultValues: initialState,
    resolver: validation.resolver(schema),
    ...rest
  });

  return {
    register,
    errors: formState.errors,
    onSubmit: handleSubmit,
    formState,
    handleSubmit,
    isFieldDisable: onDisableFields,
    cleanFormValues: reset,
    reset,
    ...restReturn
  }
}
