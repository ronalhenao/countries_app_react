import Navbar from "../components/Navbar/Navbar"

function CountriesLayout({ children }) {
  return (
    <div className="bg-blue-100 flex">
      {/* Navbar */}
      <Navbar />

      <main className="main px-10 py-6 sm:ml-64  flex flex-col flex-1 h-full overflow-hidden">
        { children }
      </main>
    </div>
  )
}

export default CountriesLayout