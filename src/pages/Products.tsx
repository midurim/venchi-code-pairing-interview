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
    margin: 0;
`

const ProductsContainer = styled.div`
    padding: 2em;
    text-align: center;
`

const Filter = styled.div`
    padding: 0.5em;
    text-align: center;
    display: inline-block;
    
    button {
        margin: 0.5em 1em;
        border: 1px solid lightgrey;
        border-radius: 8px;
        padding: 0.4em 1em;
        background-color: #FFF5EE;

        &:hover {
            background-color: #E9DCC9;
            cursor: pointer;
        }
    }
`

const FilterBar = styled.div`
    text-align: center;
    
    box-shadow: 0 2px 4px 0 #ECECEC;
`

export const Products = () => {
    return <Layout>
        <Link href="/">⬅ Back to Home Page</Link>
        <Heading>Available Products</Heading>
      <FilterBar>
        <Filter>
            Category
            <br/>
            <button>Chocomousse</button>
            <button>Chocoviar</button>
        </Filter>
        <Filter>
            Flavour
            <br/>
            <button>Pistacchio</button>
            <button>Arancia</button>
        </Filter>
      </FilterBar>
      <ProductsContainer>
        {products.map((product : Product, key: number) => <Product key={key} {...product}/>)}
      </ProductsContainer>
    </Layout>
}