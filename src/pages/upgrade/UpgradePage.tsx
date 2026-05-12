import { useState } from "react";
import { doUpgrade } from "../../engine/upgrade";
import { UPGRADE_RESULT_LABELS } from "../../data/upgradeLabels";

function UpgradePage() {
    const [level, setLevel] = useState(0);
    const [lastResult, setLastResult] = useState("강화하지 않음");

    const upgradeReport = doUpgrade();

    const handleUpgrade = () => {
        // 레벨 계산값 받아오기
        const upgradeReport = doUpgrade();

        setLevel((prev) => Math.max(0, prev + upgradeReport.upgradeOutcome.levelDelta));
        setLastResult(UPGRADE_RESULT_LABELS[upgradeReport.upgradeOutcome.result]);
    }

    return (
        <div>
            <h2>일반 강화</h2>
            <p>현재 레벨 : +{level}</p>
            <p>최근 결과 : {lastResult}</p>

            <p>성공: {(upgradeReport.upgradeChanceBreakdown.basicResult.success * 100).toFixed(2)}%</p>
            <p>유지: {(upgradeReport.upgradeChanceBreakdown.basicResult.keep * 100).toFixed(2)}%</p>
            <p>실패: {(upgradeReport.upgradeChanceBreakdown.basicResult.fail * 100).toFixed(2)}%</p>

            <hr />

            <p>일반 성공: {(upgradeReport.upgradeChanceBreakdown.finalResult.normalSuccess * 100).toFixed(2)}%</p>
            <p>대박 성공: {(upgradeReport.upgradeChanceBreakdown.finalResult.superSuccess * 100).toFixed(2)}%</p>
            <p>초대박 성공: {(upgradeReport.upgradeChanceBreakdown.finalResult.ultraSuccess * 100).toFixed(2)}%</p>
            <p>유지: {(upgradeReport.upgradeChanceBreakdown.finalResult.keep * 100).toFixed(2)}%</p>
            <p>일반 실패: {(upgradeReport.upgradeChanceBreakdown.finalResult.normalFail * 100).toFixed(2)}%</p>
            <p>대형 실패: {(upgradeReport.upgradeChanceBreakdown.finalResult.bigFail * 100).toFixed(2)}%</p>
            <p>파괴: {(upgradeReport.upgradeChanceBreakdown.finalResult.destroy * 100).toFixed(2)}%</p>

            <button
                onClick={handleUpgrade}
                className="mt-6 rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"
            >
                강화
            </button>
        </div>
    )
}

export default UpgradePage;