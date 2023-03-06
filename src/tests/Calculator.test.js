import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../components/Calculator";

describe("Calculator", () => {
  test("Garanta em pelo menos um teste que a aplicação é renderizada corretamente com os dígitos de operações +, -, *, e /.", () => {
    render(<Calculator />);

    const sumButton = screen.getByText("+")
    const subButton = screen.getByText("-")
    const multButton = screen.getByText("*")
    const divButton = screen.getByText("/")

    expect(sumButton).toBeInTheDocument()
    expect(subButton).toBeInTheDocument()
    expect(multButton).toBeInTheDocument()
    expect(divButton).toBeInTheDocument()
  });

  test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente", async () => {
    render(<Calculator/>)

    const user = userEvent.setup()
    const multButton = screen.getByText("*")
    const numberFive = screen.getByText("5")
    const numberSix = screen.getByText("6")
    const equal = screen.getByText("=")
    const clear = screen.getByText("C")

    await user.click(numberFive)
    await user.click(multButton)
    await user.click(numberFive)
    await user.click(equal)

    const result = screen.getByText("25")

    expect(result).toBeInTheDocument()

    await user.click(clear)

    await user.click(numberFive)
    await user.click(multButton)
    await user.click(numberSix)
    await user.click(equal)

    const result2 = screen.getByText("30")
    expect(result2).toBeInTheDocument()

  })
  test("Garanta em pelo menos um teste que concatenar operações está funcionando corretamente", async () => {
    render(<Calculator/>)

    const user = userEvent.setup()
    const multButton = screen.getByText("*")
    const sumButton = screen.getByText("+")
    const numberFive = screen.getByText("5")
    const numberSix = screen.getByText("6")
    const equal = screen.getByText("=")

    await user.click(numberFive)
    await user.click(multButton)
    await user.click(numberFive)
    await user.click(sumButton)
    await user.click(numberSix)
    await user.click(equal)

    const result = screen.getByText("31")

    expect(result).toBeInTheDocument()

  })
});
