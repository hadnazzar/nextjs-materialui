import {NextPage} from "next";

const Blog: NextPage = () => {
  return (
    <div>
      <h1>
        The first blog header
      </h1>
      <p>That is the blog paragraph we are planning to use</p>
      <a style={{color: "blue"}} href={"/about"}>About</a>
    </div>
  )
}

export default Blog;
