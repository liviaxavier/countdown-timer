import { render, screen } from "@testing-library/react";
import Form from "./index";

describe("Data input section", () => {
  test("renders name field component", () => {
    render(<Form />);

    const eventNameLabel = screen.getByTestId("event-name__label");
    expect(eventNameLabel).toBeInTheDocument();
    
    const eventNameInput = screen.getByTestId("event-name__input");
    expect(eventNameInput).toBeInTheDocument();
    expect(eventNameInput).toHaveAttribute("type", "text");
    expect(eventNameInput).toBeRequired();
  });
  test("renders date field", () => {
    render(<Form />);

    const eventDateInput = screen.getByTestId("event-date__input");
    expect(eventDateInput).toBeInTheDocument();
    expect(eventDateInput).toHaveAttribute("type", "date");
    expect(eventDateInput).toBeRequired();

    const eventDateLabel = screen.getByTestId("event-date__label");
    expect(eventDateLabel).toBeInTheDocument();

  });

  test('renders time field', () => {
    render(<Form />);
    
    const eventTimeLabel = screen.getByTestId("event-time__label");
    expect(eventTimeLabel).toBeInTheDocument();
  
    const eventTimeInput = screen.getByTestId("event-time__input");
    expect(eventTimeInput).toBeInTheDocument();
    expect(eventTimeInput).toHaveAttribute("type", "time");
    expect(eventTimeInput).toHaveValue('00:00')
    
  })
  test("renders submit button", () => {
    render(<Form />);
    const submitButton = screen.getByTestId("add-event");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Adicionar");
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});
