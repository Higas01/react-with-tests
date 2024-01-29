import '@testing-library/jest-dom';
import { getByRole, render } from "@testing-library/react";
import Button from "./index";

describe("<Button>", () => {
    it("should render button", () => {
        const {getByText, getByRole } = render(<Button>button</Button>)
        expect(getByRole("button")).toBeInTheDocument();
        expect(getByText("button")).toBeInTheDocument();
    })

    it('should render the button with background color green by default text when isLoading was passed', () => {

        const {getByRole} = render(<Button isLoading>button</Button>)

        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveStyle({
            backgroundColor: "green",
        })

    })
    it('should render the button with background color red when color=red was passed', () => {

        const {getByRole} = render(<Button color='red'>button</Button>)

        const buttonElement = getByRole("button");

        expect(buttonElement).toHaveStyle({
            backgroundColor: "red",
        })

    })
});