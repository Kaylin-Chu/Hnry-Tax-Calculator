import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="bg-green-100">
        <h1 className="text-3xl text-center font-bold mt-4">
          Tax Calculator!
        </h1>
        <h2 className="text-l text-center mb-4">
          Use this tool to calculate how much tax you pay on your taxable income!
        </h2>
        <Outlet />
        <footer className="text-center text-sm mt-20"> 
          © Kaylin 2025
        </footer>
      </div>
    </>
  )
}

export default App
