import {
    type UpgradeResult,
    type DiceRule,
    type UpgradeChances,
    type UpgradeOutcome,
} from "../types/upgrade"

export function rollDice(rule: DiceRule): boolean {
    const rolledNumber = Math.floor(Math.random() * rule.sides) + 1;
    return rolledNumber <= rule.successRoll;
}

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

export function getUpgradeBalls(): UpgradeChances {
    
}