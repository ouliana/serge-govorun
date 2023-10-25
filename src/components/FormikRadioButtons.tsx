import { Field, FieldInputProps } from 'formik';
import { Label, RadioButtonWrapper } from './theme';

interface Options {
  key: string;
  value: string;
}

interface Props {
  label: string;
  name: string;
  options: Options[];
}

const FormikRadioButtons = (props: Props) => {
  const { label, name, options, ...rest } = props;

  return (
    <>
      <Label>{label}</Label>
      <Field
        name={name}
        {...rest}
      >
        {({ field }: { field: FieldInputProps<unknown> }) =>
          options.map(option => {
            return (
              <RadioButtonWrapper key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  className={
                    field.value === option.value
                      ? 'appearance-none h-4 w-4 rounded-full border-4 border-amber-300 dark:bg-slate-50 transition ease-in-out duration-150'
                      : 'appearance-none h-4 w-4 rounded-full border-2 border-gray-300 dark:border-slate-50 dark:bg-gray-700 transition ease-in-out duration-150'
                  }
                />
                <Label htmlFor={option.value}>{option.key}</Label>
              </RadioButtonWrapper>
            );
          })
        }
      </Field>
    </>
  );
};

export default FormikRadioButtons;
