import { useFormik } from 'formik';
import { Input, InputContainer, Error, Button, FormContainer, Label, ErrorInputStyle } from '../theme';


// interface NewVideoValues {
//   youTubeVideoId: string;
//   format: string;
//   title_ru: string;
//   title_en: string;
//   description_ru: string;
//   description_en: string;
//   brand: string;
//   category: string;
//   createdOn: Date;
//   featured: boolean;
// }

// const validate = (values: NewVideoValues) => {
//   const errors: NewVideoValues = {
//     youTubeVideoId: '',
//     format: '',
//     title_ru: '',
//     title_en: '',
//     description_ru: '',
//     description_en: '',
//     brand: '16:9',
//     category: '',
//     createdOn: new Date(),
//     featured: false,
//   };
  
 //todo add sanitizing rules
  
//   if (!values.youtibe_video_id) {
//     errors.videoId = 'Required';
//   } else if (values.videoId.match(/[<>]/)) {
//     errors.videoId = 'Invalid url';
//   }

//   if (!values.format) {
//     errors.videoId = 'Required';
//   } 

//   if (!values.brand) {
//     errors.videoId = 'Required';
//   }

//   if (!values.category) {
//     errors.videoId = 'Required';
//   }

//   return errors;
// };

const NewVideoForm = () => {
  
  const formik = useFormik({
    initialValues: {
      youTubeVideoId: '',
      format: '',
      title_ru: '',
      title_en: '',
      description_ru: '',
      description_en: '',
      brand: '',
      category: '',
      createdOn: new Date(),
      featured: false,
    },
    // validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>

      <FormContainer>
        <InputContainer>
          <Label>Url:
          <Input
            id="videoId"
            name="videoId"
            type="videoId"
            placeholder="https://youtu.be/XXXXXXXXXXX?si=XXXXXXXXXXXXXXXX"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.youTubeVideoId}
            className={formik.errors.youTubeVideoId ? ErrorInputStyle : ""}

          />
          {formik.errors.youTubeVideoId ? <Error>{formik.errors.youTubeVideoId}</Error> : null}
          </Label>

        </InputContainer>
        
        <Button type="submit">Войти</Button>
      </FormContainer>
    </form>
  );
};

export default NewVideoForm;