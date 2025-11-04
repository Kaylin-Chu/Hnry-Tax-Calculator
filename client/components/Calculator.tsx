export default function calculate() {
  // const input = (document.querySelector('input[placeholder="$ Extra Amount"]') as HTMLInputElement)
  //   if( input !== null){ input.addEventListener('blur', () => {
  //   if (input.value && !input.value.startsWith('$')) {
  //     input.value += '$';
  //   }
  // })};
  const getAmount = (id: string) => {
  const input = document.querySelector<HTMLInputElement>(`#${id}`)
  return Number(input?.value || 0);
}


  const salary = getAmount('salaryInput')
  const selfEmployed = Number((
    document.querySelector('input[id="selfEmployedInput"]') as HTMLInputElement
  ).value)
  const benefit = Number((
    document.querySelector('input[id="benefitInput"]') as HTMLInputElement
  ).value)
  const asset = Number((
    document.querySelector('input[id="assetInput"]') as HTMLInputElement
  ).value)
  const overseas = Number((
    document.querySelector('input[id="overseasInput"]') as HTMLInputElement
  ).value)

  const arr = [salary, selfEmployed, benefit, asset, overseas]
  
  function totalIncome {
   if () {
    Number(arr.reduce((a, b) => {return a + b}, 0))
   }
   else {
    0
   }
  }
  console.log('Total Income: ', totalIncome)
  
  alert(`Your total taxable income is $${totalIncome}`)

  // // Math.pow(a,b) = a^b (a to the power of b)
  // // Compund Interest Formula: A = P(1 + r/n)^(nt)
  // // A = final amount, P = principal, r = annual interest rate as a decimal, n = number of times interest applied per time period, t = number of time periods elapsed
  // // P = amount, r = rate/100, t = time
  // const debtRepayment =
  //   Number(amount) * Math.pow(1 + Number(rate) / 100, Number(time))
  // const investmentGrowth =
  //   Number(amount) * Math.pow(1 + Number(investmentRate) / 100, Number(time))

  // let resultMessage = `After ${time} years, your extra ${frequency.toLowerCase()} payment would save $${(debtRepayment - Number(amount)).toFixed(2)} in compound interest .\n`
  // resultMessage += `If you invested the same amount at an average return of ${investmentRate}%, it will grow by $${(investmentGrowth - Number(amount)).toFixed(2)}.\n\n`

  // if (investmentGrowth > debtRepayment) {
  //   resultMessage += "It's better to invest!"
  // } else if (investmentGrowth < debtRepayment) {
  //   resultMessage += "It's better to repay the debt!"
  // } else {
  //   resultMessage += 'Both options yield the same result.'
  // }
  // // TODO: Display the result on the page (not in alert)
  // alert(resultMessage)
}
