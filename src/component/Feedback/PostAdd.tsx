import React from 'react'
import {Formik, FormikHelpers} from 'formik';
import {Form, Input, SubmitButton} from 'formik-antd';
import classes from "./PostStyle.module.css";

const PostAddValidate = (values: any) => {
  const errors = {};
  return errors;
}

type PropsType = {
  onAddPost: (value: { username: string, text: string } ) => void
}
interface Values {
  username: string;
  text: string;
}

export const PostAdd: React.FC<PropsType> = React.memo(({onAddPost}) => {
  return (
    <div>
      <Formik
        initialValues={{username: '', text: '',}}
        onSubmit={(value: Values, { setSubmitting,resetForm }: FormikHelpers<Values>,) => {
          onAddPost(value);
          setSubmitting(false);
          resetForm({})}}>
        <Form>
          <Input className={classes.containerForm} id="username" name="username" placeholder="Your nickname" />
          <Input.TextArea className={classes.containerForm} id="text" name="text" placeholder="What do you think?" rows={3}/>
          <SubmitButton>Post</SubmitButton>
        </Form>
      </Formik>
    </div>
  )
})