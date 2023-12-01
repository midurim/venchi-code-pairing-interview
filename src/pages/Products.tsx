import { Layout } from "../components/Layout/Layout"
import styled from "styled-components";

const Paragraph = styled.p`
    padding: 1em 2em;
`

const Link = styled.a`
    margin: 1em 2em;
    display: inline-block;
    padding: 0.3em 0;
    box-sizing: border-box; 
    text-decoration: none;
    color: black;

    &:hover {
        box-shadow: 0 2px 2px -2px black;
    }
    &:visited {
        color: black;
    }
`

export const Products = () => {
    return <Layout>
        <Link href="/">⬅ Back to Home Page</Link>
        <Paragraph>
        <h1>Available Products</h1>
        Here below all the products available on this catalogue.
      </Paragraph>
    </Layout>
}