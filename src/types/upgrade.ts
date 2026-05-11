import type { DiceRoll } from "./util";

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

// 업그레이드 확률 데이터
export type UpgradeChances = {

    // 일반 성공 확률 공
    normalSuccessBall: number;

    // 유지 확률 공
    keepBall: number;

    // 일반 실패 확률 공
    normalFailBall: number;


    // 성공 판정일 시 대박 성공 주사위 굴림
    superSuccessDice: DiceRoll;

    // 대박 성공 판정일 시 초대박 성공 주사위 굴림
    ultraSuccessDice: DiceRoll;
    
    
    // 실패 판정일 시 대형 실패 주사위 굴림
    bigFailDice: DiceRoll;

    // 대형 실패 시 파괴 주사위 굴림
    destroyDice: DiceRoll;

}

// 강화 결과 데이터
export type UpgradeOutcome = {
    
    // 강화 판정
    result: UpgradeResult;

    // 레벨 변화
    levelDelta: number;
}