import { Layout } from "../components/Layout/Layout"
import styled from "styled-components";

const Paragraph = styled.p`
  padding: 1em 2em;
`

export const Home = () => {
    return <Layout>
        <Paragraph>
        Hi! Welcome to the Venchi code pairing game.
        <br/>
        The purpose of this session is to assess coding as well as collaboration skills. 
        We will provide you with the requirements that we need to implement when we start the test together, 
        this way we'll be able to kick them off together and clarify any doubts.
        <br/>
        We will work on the requirements as a pair, and there are no rules there: you can google stuff, read documentation, 
        scan stackoverflow.
        The aim of this test is to mimick as much as possible a normal pairing session.
        <br/>
        Feel free to check the code beforehand, run tests, run the application and the mock server and take a look at the code.
        <br/>
        That will definitely help!
        <br/>
        PS. bear in mind that the codebase might contain bugs, smells, bad coding practices, you name it! 
        <br/>
        We'll also address them during our pairing session, feel free to start on that beforehand if you have time and you want to.
        <br/>
        I hope you'll have fun with this, can't wait to handle the user stories together!
        <br/>
        You can check the page where we'll implement the logic <a href="/products">here</a>.
        <br/>
        Please, bear in mind that the purpose of this test is not to make the codebase perfect, 
        nor to finish all the stories in the board that we'll work on together, but merely to cowork and cocreate.
        <br/>
        Also, there are informations for you to check in the <code>README.md</code> file.
      </Paragraph>
    </Layout>
}