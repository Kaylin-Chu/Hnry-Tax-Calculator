import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div>
        <h1 className="mt-4 text-center text-3xl font-bold">Tax Calculator!</h1>
        <h2 className="text-l mb-4 text-center">
          Use this tool to calculate how much tax you need to pay on your
          taxable income!
        </h2>
        <Outlet />
        <footer className="mt-20 text-center text-sm">© Kaylin 2025</footer>
      </div>
    </>
  )
}

export default App
