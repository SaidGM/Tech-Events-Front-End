import App from '../App'
import { render, screen } from '@testing-library/react'

describe('', () => {
    beforeEach(()=> render(<App/>))
    test('renders main page correctly', () => {
        screen.debug();
        espect(true).toBeTruthy()
    })
})