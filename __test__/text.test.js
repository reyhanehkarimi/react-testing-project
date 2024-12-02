import { render, screen } from "@testing-library/react";
import Text from "../1-Text/Text";

describe("Text Component test", () => {
    it('should first', () => { 
        render(<Text headingText={"Welcome To APS"} />);
        expect(screen.getByText("WelcomE To APS")).toBeItTheDocument();
     })
     it('should render the headingText prop value', () => { 
         const testText = "Hello";
         render(<Text headingText={testText} />);
         expect(screen.getByText(testText)).toBeItTheDocument()
      })
})