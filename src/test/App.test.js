import { render, screen } from '@testing-library/react';
import App from '../App'

describe('eventCode', () => {
    beforeEach(()=> render(<App/>))
    test('renders main page correctly', () => {
        screen.debug();
        espect(true).toBeTruthy()
    })
})