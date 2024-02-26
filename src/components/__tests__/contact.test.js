import React from 'react'; // Make sure to import React
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
describe("contact pg testing", () => {
    test("should load compo onto dom", () => {
        render(<Contact/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
    })
    
    test("should load 2 input boxes", () => {
        render(<Contact/>);
        const input = screen.getAllByRole('textbox')
        //console.log(input); // jsx/react el/ react fiber node/ virtual dom obj
        expect(input.length).toBe(2);
    })
})
