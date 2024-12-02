import { render, screen } from "@testing-library/react";
import Greet from "../3-Greet/Greet";
import { expect } from "vitest";

describe("Greet Component test", () => {
    it('renders the correct text when no name is passed', () => {
        render(<Greet />);

        // This will check if the text is 'hello undefined' when no name is passed
        expect(screen.getByText("hello undefined")).toBeInTheDocument();
    });

    it('renders the correct text when a name is passed', () => {
        render(<Greet name="reyhan"/>);

        // This will check if the text 'hello reyhan' is rendered when a name is passed
        expect(screen.getByText("hello reyhan")).toBeInTheDocument();
    });
});
