import { Form } from "@govtechsg/sgds-react/Form";


type BlogFormInputProps = {
  title: string,
  placeHolder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const BlogFormInput = (props: BlogFormInputProps) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        name={props.title} // Ensure the name matches the field in the state
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default BlogFormInput;
