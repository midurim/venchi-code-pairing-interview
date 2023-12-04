export const getProducts = async () => {
    const products = await fetch('http://localhost:3100/api/products')
    const data = await products.json()
    return data
}