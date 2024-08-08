import { useState } from "react";
import { Form } from "@govtechsg/sgds-react/Form";
import { Button } from "@govtechsg/sgds-react/Button";
import BlogFormInput from "./BlogFormInput";

const BlogForm = () => {
  const [field, setFields] = useState({
    slug: "",
    title: "",
    content: "",
    image: "",
    published_date: "",
    author: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${field}`);
  };

  return (
    <Form style={{ padding: '30px' }} onSubmit={handleSubmit}>
      <BlogFormInput
        title="slug"
        placeHolder="to be used in url"
      ></BlogFormInput>
      <BlogFormInput
        title="title"
        placeHolder="title of blog"
      ></BlogFormInput>
      <BlogFormInput
        title="content"
        placeHolder="write ur paragraphs here"
      ></BlogFormInput>
      <BlogFormInput
        title="image"
        placeHolder="put url??"
      ></BlogFormInput>
      <BlogFormInput
        title="published_date"
        placeHolder="i should auto fill this"
      ></BlogFormInput>
      <BlogFormInput
        title="author"
        placeHolder="name of author"
      ></BlogFormInput>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default BlogForm;
