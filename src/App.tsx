import { useState } from "react";

import Header from "./components/Header";
import Sidebar, { type TabKey } from "./components/Sidebar";
import UpgradePage from "./pages/upgrade/UpgradePage";
import PointUpgradePage from "./pages/upgrade/PointUpgradePage";
import UdUpgradePage from "./pages/upgrade/UdUpgradePage";


function App() {
  const [currentTab, setCurrentTab] = useState<TabKey>("upgrade");

  function renderCurrentPage() {
    switch(currentTab) {
      case "upgrade": return <UpgradePage />;
      case "pointUpgrade": return <PointUpgradePage />;
      case "udUpgrade": return <UdUpgradePage />;
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Header point={100} ud={5}/>

      <div className="flex flex-1">
        <Sidebar currentTab={currentTab} onTabChange={setCurrentTab}/>

        <main className="flex-1 p-8">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  )
}



export default App;