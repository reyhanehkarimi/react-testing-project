import { render, screen, fireEvent } from "@testing-library/react";
import App from '../src/App'
import { describe, expect, test } from "vitest";

describe("TodoContainer component test", () => {
    it('should be When the form is submitted once with a todo item, a single `<li>` element with the todo text is rendered.', () => { 
        render(<App />);

        const input = screen.getAllByPlaceholderText("write a todo");
        const form = screen.getAllByTestId("todo-form");

        fireEvent.change(input, { target: { value: "Learn Testing" } });
        fireEvent.submit(form);

        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(1);
        expect(todoItems[0]).toHaveTextContent("Learn Testing");
     });

     it('should be When the form is submitted multiple times with different todo items, all the todo items are rendered as `<li>` elements in the list', () => { 
        render(<App />);

        const input = screen.getAllByPlaceholderText("write a todo");
        const form = screen.getAllByTestId("todo-form");

        const todos = ["Learn React", "Write Tests", "Build Projects"];
        todos.forEach((todo) => {
            fireEvent.change(input, { target: { value: todo} });
            fireEvent.submit(form);
        });

        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(todos.length);
        todos.forEach((todo, index) => {
            expect(todoItems[index].toHaveTextContent(todo))
        })
        
     });
     
})