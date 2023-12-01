import { Header } from "../Header/Header"

type Props = {
    children: any
}

export const Layout = ({children} : Props) => {
    return <>
        <Header/>
        <div>
            { children }
        </div>
    </>
}