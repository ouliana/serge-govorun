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
                      ? 'appearance-none h-4 w-4 rounded-full border-2 border-gray-300 ring-2 ring-indigo-400 dark:bg-indigo-400 dark:ring-indigo-400 text-indigo-400'
                      : 'appearance-none h-4 w-4 rounded-full border-2 border-gray-300 dark:border-slate-50 dark:bg-gray-700'
                    // ? 'appearance-none h-4 w-4 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-slate-50 dark:bg-gray-700 dark:focus:bg-indigo-400 dark:focus:ring-indigo-400 text-indigo-400'
                  }

                  // className='appearance-none w-4 h-4 bg-radio bg-no-repeat bg-fit'
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
