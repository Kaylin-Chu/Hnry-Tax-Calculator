export default function calculate() {

// TODO if time allows : Refactor with function to reduce repetition
//   const getAmount = (id: string) => {
//   const input = document.querySelector<HTMLInputElement>(`#${id}`)
//   return Number(input?.value || 0);
// }
//  const salary = getAmount('salaryInput')

// TODO: Get input values as plain numbers
  const salary = Number((
    document.querySelector('input[id="salaryInput"]') as HTMLInputElement
  ).value.replace(/[^0-9.-]+/g, '')) || 0
  const selfEmployed = Number((
    document.querySelector('input[id="selfEmployedInput"]') as HTMLInputElement
  ).value.replace(/[^0-9.-]+/g, '')) || 0
  const benefit = Number((
    document.querySelector('input[id="benefitInput"]') as HTMLInputElement
  ).value.replace(/[^0-9.-]+/g, '')) || 0
  const asset = Number((
    document.querySelector('input[id="assetInput"]') as HTMLInputElement
  ).value.replace(/[^0-9.-]+/g, '')) || 0
  const overseas = Number((
    document.querySelector('input[id="overseasInput"]') as HTMLInputElement
  ).value.replace(/[^0-9.-]+/g, '')) || 0

// TODO: Get add input values to get total income
  const arr = [salary, selfEmployed, benefit, asset, overseas]
  const totalIncome = arr.reduce((a, b) => {return a + b}, 0)
  console.log('Total Income: ', totalIncome)

// TODO: tax time
// Up to $15,600	10.5%
// $15,601 - $53,500	17.5%
// $53,501 - $78,100	30%
// $78,101 - $180,000	33%
// $180,001 and over	39%
 function calculateTax() {
  if (totalIncome <= 15600) {
    return totalIncome * 0.105
  } else if (totalIncome <= 53500) {
    return (15600 * 0.105) + ((totalIncome - 15600) * 0.175)
  } else if (totalIncome <= 78100) {
    return (15600 * 0.105) + ((53500 - 15600) * 0.175) + ((totalIncome - 53500) * 0.30)
  } else if (totalIncome <= 180000) {
    return (15600 * 0.105) + ((53500 - 15600) * 0.175) + ((78100 - 53500) * 0.30) + ((totalIncome - 78100) * 0.33)
  } else {
    return (15600 * 0.105) + ((53500 - 15600) * 0.175) + ((78100 - 53500) * 0.30) + ((180000 - 78100) * 0.33) + ((totalIncome - 180000) * 0.39)
 }}

  const resultMessage = "Your total taxable income is: $" + totalIncome + ", and the tax payable is: $" + calculateTax().toFixed(2)
  // TODO: Display the result on the page (not in alert)
  alert(resultMessage)
}