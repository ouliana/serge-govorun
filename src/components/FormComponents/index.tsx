import { Field, FieldInputProps } from 'formik';
import { Label, RadioButtonWrapper } from './styles';

interface TextProps {
  id: string;
  type: string;
  name: string;
}

// Select

interface Options {
  key: string;
  value: string;
}

interface Props {
  label: string;
  name: string;
  options: Options[];
}

export const FormikTextField = ({ id, type, name }: TextProps) => {
  return (
    <Field
      id={id}
      type={type}
      name={name}
      className=' bg-slate-50 
      dark:bg-slate-600 
      w-full 
      text-slate-600
      dark:text-slate-200
      border
      border-slate-200
      dark:border-slate-200
      rounded-md 
      py-2 
      px-4 
      leading-tight 
      focus:outline-none
      focus:border-indigo-500
      transition 
      duration-300 
      ease-in-out'
    />
  );
};

export const FormikRadioButtons = (props: Props) => {
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
                      ? 'appearance-none h-4 w-4 rounded-full border-4 border-indigo-300 dark:border-indigo-400 dark:bg-slate-50 transition ease-in-out duration-150'
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

export const FormikSelect = (props: Props) => {
  const { label, name, options, ...rest } = props;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Field
        as='select'
        id={name}
        name={name}
        className='
        w-full font-normal text-slate-700 px-2.5 py-2 border border-slate-200 rounded-md cursor-pointer
       relative'
        {...rest}
      >
        {options.map(option => {
          return (
            <option
              key={option.key}
              value={option.value}
            >
              {option.key}
            </option>
          );
        })}
      </Field>
    </>
  );
};
