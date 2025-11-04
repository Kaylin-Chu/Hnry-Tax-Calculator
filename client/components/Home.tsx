import calculate from './Calculator.tsx'
import Cleave from 'cleave.js'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.amountInput');
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
        <h2 className="mt-10 text-2xl font-bold">Insert Taxable Incomes here</h2>
        <p className="text-xs">Feel free to leave any non-applicable fields blank! </p>
        {/* TODO: Allow non-applicable fields to be left blank */}
        <label> Salary / Wages: </label>
        <input
          className="amountInput"
          type="text" // Changed to text for Cleave to add comma (not a number)
          placeholder="if applicable"
        />
        <br />
        <label> Self-employed Income: </label>
        <input
          className="amountInput"
          type="text" 
          placeholder="if applicable"
        />
        <br />
        <label> Benefit / Student Allowance: </label>
        <input
          className="amountInput"
          type="text" 
          placeholder="if applicable"
        />
        <br />
        <label> Assets & Investments: </label>
        <input
          className="amountInput"
          type="text" 
          placeholder="if applicable"
        />
        <br />
        <label> Overseas income: </label>
        <input
          className="amountInput"
          type="text" 
          placeholder="if applicable"
        />
        <br />
        <label> Combined total income: </label>
        {/* TODO: Total incomes */}

        <br />
        <button
          onClick={() => calculate()}
          className="m-2 rounded bg-blue-500 p-2 text-white"
        >
          Calculate Tax
        </button>
      </div>
    </>
  )
}
