import { render, screen } from "@testing-library/react";
import Form from "./index";

describe("Data input section", () => {
  describe("Name field", () => {
    test("renders", () => {
      render(<Form />);

      const eventNameLabel = screen.getByTestId("event-name__label");
      expect(eventNameLabel).toBeInTheDocument();

      const eventNameInput = screen.getByTestId("event-name__input");
      expect(eventNameInput).toBeInTheDocument();
    });
    test("check attributes", () => {
      render(<Form />);

      const eventNameInput = screen.getByTestId("event-name__input");
      expect(eventNameInput).toHaveAttribute("type", "text");
      expect(eventNameInput).toBeRequired();
    });
  });
  describe("Date field", () => {
    test("renders", () => {
      render(<Form />);

      const eventDateLabel = screen.getByTestId("event-date__label");
      expect(eventDateLabel).toBeInTheDocument();

      const eventDateInput = screen.getByTestId("event-date__input");
      expect(eventDateInput).toBeInTheDocument();
    });
    test("check attributes", () => {
      render(<Form />);

      const eventDateInput = screen.getByTestId("event-date__input");
      expect(eventDateInput).toHaveAttribute("type", "date");
      expect(eventDateInput).toBeRequired();
    });
  });

  describe('Time field', () => {
    test('renders', () => {
      render(<Form />);
      
      const eventTimeLabel = screen.getByTestId("event-time__label");
      expect(eventTimeLabel).toBeInTheDocument();
    
      const eventTimeInput = screen.getByTestId("event-time__input");
      expect(eventTimeInput).toBeInTheDocument();
      
    })
    test('attributes', () => {
      render(<Form />);
      const eventTimeInput = screen.getByTestId("event-time__input");
      expect(eventTimeInput).toHaveAttribute("type", "time");
      expect(eventTimeInput).toHaveValue('00:00')

    })
  })

  test("renders submit button", () => {
    render(<Form />);
    const submitButton = screen.getByTestId("add-event");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Adicionar");
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});
