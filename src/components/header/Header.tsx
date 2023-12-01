import { HeaderContainer } from "./Header.style"

export const Header = () => {
    return (
    <HeaderContainer data-testid="header">
        <img data-testid="logo" alt="Venchi logo" src="/logo.png"></img>
    </HeaderContainer>
    )
}