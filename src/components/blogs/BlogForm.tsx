import { useState } from "react";
import { Form } from "@govtechsg/sgds-react/Form";
import { Button } from "@govtechsg/sgds-react/Button";
import BlogFormInput from "./BlogFormInput";
import directus from "../../lib/directus";
import { createItem } from "@directus/sdk";

const BlogForm = () => {
  const [fields, setFields] = useState({
    slug: "",
    title: "",
    content: "",
    image: "",
    published_date: "",
    author: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form values:", fields);
    const currentDate = new Date().toISOString();

    const result = await directus.request(
      createItem("posts", {
        title: fields.title,
        author: {
          name: fields.author,
        },
        content: fields.content,
        published_date: currentDate,
        slug: fields.slug,
        image: fields.image,
      })
    );

    console.log(result);
  };

  return (
    <div style={{ display: "flex" }}>
      <Form style={{ padding: "30px", width: "50%" }} onSubmit={handleSubmit}>
        <BlogFormInput
          title="slug"
          placeHolder="to be used in url"
          value={fields.slug}
          onChange={handleChange}
        />
        <BlogFormInput
          title="title"
          placeHolder="title of blog"
          value={fields.title}
          onChange={handleChange}
        />
        <BlogFormInput
          title="content"
          placeHolder="write your paragraphs here"
          value={fields.content}
          onChange={handleChange}
        />
        <BlogFormInput
          title="image"
          placeHolder="put URL??"
          value={fields.image}
          onChange={handleChange}
        />
        <BlogFormInput
          title="author"
          placeHolder="name of author"
          value={fields.author}
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div style={{ padding: "30px", width: "50%" }}>
        <main>
          {fields.image ? (
            <img
              src={`YOUR_DIRECTUS_URL/assets/${fields.image}?width=500`}
              alt="Preview"
            />
          ) : (
            <div style={{ height: "250px", background: "#ccc" }}>
              Image Preview
            </div>
          )}
          <h1>{fields.title || "Blog Title"}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: fields.content || "Your content will appear here...",
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default BlogForm;
