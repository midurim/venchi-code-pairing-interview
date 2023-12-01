import { TileContainer } from "./Product.style"

type Props = {
    image: string
    name: string
    price: string
}



export const Product = ({image, name, price} : Props) => {
    return <TileContainer>
        <img src={image} alt={price}/>
        <p>{name}</p>
    </TileContainer>
}