import { useState } from "react";

import Header from "./components/header";
import Sidebar, { type TabKey } from "./components/sidebar";


function App() {
  const [currentTab, setCurrentTab] = useState<TabKey>("upgrade");
  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col">
      <Header point={100} ud={5}/>

      <div className="flex flex-1">
        <Sidebar currentTab={currentTab} onTabChange={setCurrentTab}/>

        <main className="flex flex-1 items-center justify-center p-8">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-bold">Lunatic Mine</h1>
            <p className="mt-2 text-zinc-600">Tailwind 적용 테스트</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;