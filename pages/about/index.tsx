import {NextPage} from "next";

const About: NextPage = () => {
  return (
    <div>
      <h1>
        About
      </h1>
      <p>That is the paragraph we are planning to use for explaining about </p>
      <a href={"/blog"} style={{color: "red"}} >Blog</a>
    </div>
  )
}

export default About;
