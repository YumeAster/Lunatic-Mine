import {
    type UpgradeResult,
    type UpgradeChances,
    type UpgradeOutcome,
} from "../types/upgrade"
import { drawBall, makeBallPool, rollDice } from "./util";



// 강화 판정 함수
export function executeUpgrade(upgradeChances: UpgradeChances): UpgradeResult {
    
    // 성공 / 유지 / 실패 뽑기
    const upgradeResultPool = makeBallPool<UpgradeResult>(
        { result: "NORMAL_SUCCESS", count: upgradeChances.normalSuccessBall },
        { result: "KEEP", count: upgradeChances.keepBall },
        { result: "NORMAL_FAIL", count: upgradeChances.normalFailBall},
    )

    const firstResult = drawBall<UpgradeResult>(upgradeResultPool);

    
    // 2차 판정
    if (firstResult == "NORMAL_SUCCESS") {
        return rollDice(upgradeChances.superSuccessDice)
            ? rollDice(upgradeChances.ultraSuccessDice)
                ? "ULTRA_SUCCESS"
                : "SUPER_SUCCESS"
            : "NORMAL_SUCCESS"
    } else if (firstResult == "NORMAL_FAIL") {
        return rollDice(upgradeChances.bigFailDice)
            ? rollDice(upgradeChances.destroyDice)
                ? "BIG_FAIL"
                : "DESTROY"
            : "NORMAL_FAIL"
    } else {
        return "KEEP"
    }

}

// 업그레이드 결과 및 레벨 변화를 리턴하는 함수.
// 레벨 상승폭 관련된 업그레이드는 여기서 처리.
export function getUpgradeOutcome(result: UpgradeResult): UpgradeOutcome {
    let delta = 0;
    switch(result) {
        case "NORMAL_SUCCESS" :
            delta = 1;
            break;
        case "SUPER_SUCCESS" :
            delta = 3;
            break;
        case "ULTRA_SUCCESS" :
            delta = 5;
            break;
        case "KEEP" :
            delta = 0;
            break;
        case "NORMAL_FAIL" :
            delta = -3;
            break;
        case "BIG_FAIL" :
            delta = -10;
            break;
        case "DESTROY" :
            delta = 0;
            break;
    }

    return {
        result: result,
        levelDelta: delta,
    }
}

// 강화 판정 확률 (공 뽑기 및 주사위 굴리기)을 return하는 함수.
// 강화 확률 관련된 업그레이드는 여기서 처리.
export function getUpgradeBalls(): UpgradeChances {
    return {
        normalSuccessBall: 50,
        keepBall: 20,
        normalFailBall: 30,
        superSuccessDice: {
            sides: 10,
            successRoll: 3,
        },
        ultraSuccessDice: {
            sides: 10,
            successRoll: 3,
        },
        bigFailDice: {
            sides: 10,
            successRoll: 3,
        },
        destroyDice: {
            sides: 10,
            successRoll: 3,
        }
    }
}