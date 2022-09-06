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
  DeepPartial 
} from 'react-hook-form';

export type FormSubmit<FormProps> = SubmitHandler<FormProps>;

interface TUseFormReturn<TF, TC> extends UseFormReturn<TF, TC> {
  errors: FieldErrorsImpl<DeepRequired<TF>>;
  onSubmit: UseFormHandleSubmit<TF>;
}

interface TUseFormProps<TF, TC> extends UseFormProps<TF, TC> {
  initialState?: DeepPartial<TF> | undefined;
  schema: any;
}

export function useMyForm<TFieldValues extends FieldValues = FieldValues, TContext = any>
({ initialState, schema, resolver, ...rest }: TUseFormProps<TFieldValues, TContext>): TUseFormReturn<TFieldValues, TContext> {
  const { register, formState, handleSubmit, ...restReturn } = useFormR<TFieldValues>({
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
    ...restReturn
  }
}
