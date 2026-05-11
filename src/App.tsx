import Header from "./components/header";

function App() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Header point={100} ud={5}/>

      <main className="flex items-center justify-center p-8">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold">Lunatic Mine</h1>
          <p className="mt-2 text-zinc-600">Tailwind 적용 테스트</p>
        </div>
      </main>
    </div>
  )
}

export default App;