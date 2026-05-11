import './App.css'

import { useState } from 'react';
import { executeUpgrade, getUpgradeBalls, getUpgradeOutcome } from './engine/upgrade';
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

  return (
    <div>
      <h1>Lunatic Mine</h1>
      <p>레벨 : {level}</p>
      <p>결과 : {lastResult}</p>
      <button onClick={handleUpgradeTest}>강화 테스트</button>
    </div>
  )
}

export default App;