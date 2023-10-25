import { Field } from 'formik';

interface Props {
  id: string;
  type: string;
  name: string;
}

const FormikTextField = ({ id, type, name }: Props) => {
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

export default FormikTextField;
