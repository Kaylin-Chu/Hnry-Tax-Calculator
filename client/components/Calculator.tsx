export default function calculate() {
  // Refactored with function to reduce repetition
  // Get value from input and convert to number, removing $ and commas
  // If input is blank, return 0 (allows for inputs to be left blank)
  const getAmount = (id: string) => {
    const input = document.querySelector<HTMLInputElement>(`#${id}`)
    return Number(input?.value.replace(/[^0-9.-]+/g, '') || 0)
  }

  // Get input values
  const salary = getAmount('salaryInput')
  const selfEmployed = getAmount('selfEmployedInput')
  const benefit = getAmount('benefitInput')
  const asset = getAmount('assetInput')
  const overseas = getAmount('overseasInput')

  // Add input values to get total income
  const arr = [salary, selfEmployed, benefit, asset, overseas]
  const totalIncome = arr.reduce((a, b) => {
    return a + b
  }, 0)
  console.log('Total Income: ', totalIncome)

  //  Display total income on homepage
  const totalIncomePopUp = document.getElementById('totalIncome')
  if (totalIncomePopUp) {
    totalIncomePopUp.textContent = totalIncome.toLocaleString('en-NZ', {
      style: 'currency',
      currency: 'NZD',
    })
  }

  // Calculating tax - NZ tax brackets
  function calculateTax() {
    if (totalIncome <= 15600) {
      return totalIncome * 0.105
    } else if (totalIncome <= 53500) {
      return 15600 * 0.105 + (totalIncome - 15600) * 0.175
    } else if (totalIncome <= 78100) {
      return (
        15600 * 0.105 + (53500 - 15600) * 0.175 + (totalIncome - 53500) * 0.3
      )
    } else if (totalIncome <= 180000) {
      return (
        15600 * 0.105 +
        (53500 - 15600) * 0.175 +
        (78100 - 53500) * 0.3 +
        (totalIncome - 78100) * 0.33
      )
    } else {
      return (
        15600 * 0.105 +
        (53500 - 15600) * 0.175 +
        (78100 - 53500) * 0.3 +
        (180000 - 78100) * 0.33 +
        (totalIncome - 180000) * 0.39
      )
    }
  }

  // Calculate result
  const result = calculateTax()

  // Display the result on the homepage
  const resultPopUp = document.getElementById('result')
  if (resultPopUp) {
    resultPopUp.textContent = result.toLocaleString('en-NZ', {
      style: 'currency',
      currency: 'NZD',
    })
  }

  const totalIncomeContainer = document.getElementById('totalIncomeContainer')
  if (totalIncomeContainer) {
    totalIncomeContainer.style.display = 'block'
  }

  const resultContainer = document.getElementById('resultContainer')
  if (resultContainer) {
    resultContainer.style.display = 'block'
  }
}
