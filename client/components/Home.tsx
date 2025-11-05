import calculate from './Calculator.tsx'
import Cleave from 'cleave.js'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.amountInput')
    elements.forEach((el) => {
      new Cleave(el as HTMLElement, {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        prefix: ' $',
      })
    })
  }, [])

  return (
    <>
      <div className="m-6 text-center">
        <h2 className="mt-10 text-2xl font-bold">
          Insert Taxable Incomes here
        </h2>
        <p className="text-xs">
          Feel free to leave any non-applicable fields blank!{' '}
        </p>
        <label htmlFor="salary"> Salary / Wages: </label>
        <input
          id="salaryInput"
          className="amountInput"
          type="text" // Changed to text for Cleave to add comma (not a number)
          placeholder="if applicable"
        />
        <br />
        <label htmlFor="selfEmployed"> Self-employed Income: </label>
        <input
          id="selfEmployedInput"
          className="amountInput"
          type="text"
          placeholder="if applicable"
        />
        <br />
        <label htmlFor="benefit"> Benefit / Student Allowance: </label>
        <input
          id="benefitInput"
          className="amountInput"
          type="text"
          placeholder="if applicable"
        />
        <br />
        <label htmlFor="assets"> Assets & Investments: </label>
        <input
          id="assetInput"
          className="amountInput"
          type="text"
          placeholder="if applicable"
        />
        <br />
        <label htmlFor="overseas"> Overseas income: </label>
        <input
          id="overseasInput"
          className="amountInput"
          type="text"
          placeholder="if applicable"
        />
        <br />
        <button
          onClick={() => calculate()}
          className="m-2 rounded bg-blue-500 p-2 text-white"
        >
          Calculate Tax
        </button>
        <p
          className="mt-10 text-2xl font-bold"
          id="totalIncomeContainer"
          style={{ display: 'none' }}
        >
          Combined total income : <span id="totalIncome"></span>
        </p>
        <h2
          className="mt-10 text-2xl font-bold"
          id="resultContainer"
          style={{ display: 'none' }}
        >
          Tax payable:<span id="result"></span>
        </h2>
      </div>
    </>
  )
}
