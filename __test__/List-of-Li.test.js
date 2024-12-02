import { render,screen } from "@testing-library/react";
import ListOfLi from "../2-ListOfLi/ListOfLi"
import { describe, expect } from "vitest";

describe("List of li test", () => {
 test("should render List of li", () => {
        const usernames = ["john", "sam", "jasem", "tom"];
        render(<ListOfLi usernames={usernames}/>)

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(usernames.length)
    })
})