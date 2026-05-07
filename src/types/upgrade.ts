const UpgradeResult =  {
    NORMAL_SUCCESS : "NORMAL_SUCCESS",
    SUPER_SUCCESS : "SUPER_SUCCESS",
    ULTRA_SUCCESS : "ULTRA_SUCCESS",
    KEEP : "KEEP",
    NORMAL_FAIL : "NORMAL_FAIL",
    BIG_FAIL : "BIG_FAIL",
    DESTROY : "DESTROY",
} as const;

export type UpgradeResult = (typeof UpgradeResult)[keyof typeof UpgradeResult];

export type DiceRule = {
    sides: number;
    successRoll: number;
}

export type UpgradeChances = {
    normalSuccessBall: number;
    superSuccessBall: number;
    ultraSuccessBall: number;
    keepBall: number;
    normalFailBall: number;
    bigFailBall: number;
    destroyBall: number;
}

export type UpgradeOutcome = {
    result: UpgradeResult;
    levelDelta: number;
}