import { Form } from "@govtechsg/sgds-react/Form";

type BlogFormInputProps = {
  title: string,
  placeHolder: string,
};

const BlogFormInput = (props: BlogFormInputProps) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control placeholder={props.placeHolder} />
    </Form.Group>
  );
};

export default BlogFormInput;
