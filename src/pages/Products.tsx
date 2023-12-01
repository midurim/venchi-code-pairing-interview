import { Layout } from "../components/Layout/Layout"
import styled from "styled-components";
import products from "../data/products.json";
import { Product } from "../domain/Product";
import { Product } from "../components/Product/Product";

const Paragraph = styled.p`
    padding: 1em 2em;
`

const Link = styled.a`
    margin: 0 2em;
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

const Heading = styled.h1`
    padding: 1em;
`

const ProductsContainer = styled.div`
    padding: 2em;
    text-align: center;
`

export const Products = () => {
    return <Layout>
        <Link href="/">⬅ Back to Home Page</Link>
        <Heading>Available Products</Heading>
        <Paragraph>
        Here below all the products available on this catalogue.
      </Paragraph>
      <div>
        Category
        <button>Chocomousse</button>
        <button>Chocoviar</button>
      </div>
      <div>
        Flavour
        <button>Pistacchio</button>
        <button>Arancia</button>
      </div>
      <ProductsContainer>
        {products.map((product : Product, key: number) => <Product key={key} {...product}/>)}
      </ProductsContainer>
    </Layout>
}