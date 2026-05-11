import { useState } from 'react';
import { executeUpgrade, getUpgradeBalls, getUpgradeChanceBreakdown, getUpgradeOutcome } from './engine/upgrade';
import { UPGRADE_RESULT_LABELS } from './data/upgradeLabels';

function App() {

  const [level, setLevel] = useState(0);
  const [lastResult, setLastResult] = useState("아직 강화하지 않음");

  const handleUpgradeTest = () => {
    const upgradeResult = executeUpgrade(getUpgradeBalls())
    const finalResult = getUpgradeOutcome(upgradeResult);

    setLevel((prev) => Math.max(0, prev + finalResult.levelDelta))
    setLastResult(UPGRADE_RESULT_LABELS[finalResult.result])
  };

  const breakdown = getUpgradeChanceBreakdown(getUpgradeBalls());

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Lunatic Mine</h1>
        <p className="mt-2 text-zinc-600">Tailwind 적용 테스트</p>
      </div>
    </div>
  )
}

export default App;