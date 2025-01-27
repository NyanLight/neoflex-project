import { it, expect, describe } from 'vitest'
import {render, screen} from "@testing-library/react"
import { Header } from '../Header'
import { MemoryRouter } from 'react-router'

describe('Header', () => {
    it('should render header component with memory router without crashing', () => {
        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>)
        screen.debug();
    })
})