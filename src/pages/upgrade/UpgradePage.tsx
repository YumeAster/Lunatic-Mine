import { useState } from "react";
import { doUpgrade } from "../../engine/upgrade";
import { UPGRADE_RESULT_LABELS } from "../../data/upgradeLabels";
import PickaxeCard from "../../components/PickaxeCard";

// shadcn
import { Button } from "@/components/ui/button";

// 이미지
import pickaxeImage from "../../assets/pickaxe.png"

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
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col w-full items-center gap-1">
                <PickaxeCard
                    name="기본 곡괭이"
                    level={level}
                    imageSrc={pickaxeImage}
                />

                <Button
                    onClick={handleUpgrade}
                    className="mt-6 text-lg px-8 h-10 shadow-lg shadow-zinc-900/50 hover:bg-zinc-800 hover:inset-shadow-xs inset-shadow-zinc-900"
                    size="lg"
                >
                    강화
                </Button>
            </div>
        </div>
    )
}

export default UpgradePage;