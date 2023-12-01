import { Layout } from "../components/Layout/Layout"
import styled from "styled-components";

const Paragraph = styled.p`
  padding: 1em 2em;
`

export const Home = () => {
    return <Layout>
        <Paragraph>
        Hi! Welcome to the Venchi code pairing game!
        <br/>
        Here is the test description. Lorem ipsum etc.
        <br/>
        You can check the available products in the catalogue <a href="/products">here!</a>.
      </Paragraph>
    </Layout>
}