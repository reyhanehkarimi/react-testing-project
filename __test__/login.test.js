import { render, screen, fireEvent } from "@testing-library/react";
import Login from '../4-Login/Login'
import { describe, expect } from "vitest";

describe("Login component test", () => {
    it('should be render a btn', () => { 
        render(<Login />);
        const btn = screen.getAllByRole("button");
        expect(btn).toBeInTheDocument()
     });
     it('should be render displays "login" as its initial text', () => { 
        render(<Login />);
        const btn = screen.getAllByRole("button");
        expect(btn).toBeInTheDocument("login")
     });
     it('should be render button text changes to "logout" when clicked', () => { 
        render(<Login />);
        const btn = screen.getAllByRole("button");
        fireEvent.click(btn)
        expect(btn).toBeInTheDocument("login")
     });
});