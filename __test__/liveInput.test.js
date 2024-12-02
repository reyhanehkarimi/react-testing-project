import { render, screen, fireEvent } from "@testing-library/react";
import LiveInput from '../5-LiveInput/LiveInput'
import { describe, expect, it } from "vitest";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";

describe("LiveInput Component", () => {
    it('should be The component renders an input element with the placeholder "Enter a text"', () => { 
        render(<LiveInput />);
        const input = screen.getByPlaceholderText("Enter a text");
        expect(input).toBeInTheDocument();
     });

     it('should be The component renders an h2 element"', () => { 
        render(<LiveInput />);
        const h2 = screen.getAllByRole("level: 2");
        expect(h2).toBeInTheDocument();
     });
     it('should be When a user types into the input element, the h2 element displays the entered text"', () => { 
        render(<LiveInput />);
        const input = screen.getByPlaceholderText("Enter a text");
        const h2 = screen.getAllByRole("level: 2");

        fireEvent.change(input,{ target: { value: "hiiii" } })
        expect(h2).toHaveTextContent("hiiii");

     })
})
