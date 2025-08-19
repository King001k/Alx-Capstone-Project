import Header from "./components/Header"
import EventList from "./components/EventList"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-4 max-w-2xl mx-auto">
        <EventList />
      </main>
    </div>
  )
}

export default App
