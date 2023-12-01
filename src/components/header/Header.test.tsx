import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe('header', () => {
    it('should render the Venchi logo', () => {
        render(<Header/>)
        const logo = screen.getByTestId('logo')
        expect(logo).toBeVisible()
        expect(logo).toHaveAttribute('src', '/logo.png')
    })
    it('should render the logo in the center', () => {
        render(<Header/>)
        const header = screen.getByTestId('header')
        expect(header).toHaveStyle({
            textAlign: 'center'
        })
    })
    it('should have the expected style', () => {
        render(<Header/>)
        const header = screen.getByTestId('header')
        expect(header).toHaveStyle({
            padding: '1em 2em',
            backgroundColor: '#FAF9F6',
            boxShadow: '0 2px 10px 0 #ECECEC'
        })
    })
})