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

// 강화 확률 수치 데이터 
export type UpgradeChanceBreakdown = {

    // 기본 판정 확률
    basicResult: {
        success: number;
        keep: number;
        fail: number;
    };

    // 추가 확률 (조건부 확률이 아닌 독립 확률)
    additionalResult: {
        superSuccess: number;
        ultraSuccess: number;
        bigFail: number;
        destroy: number;
    };

    // 최종 확률 (조건부 확률)
    finalResult: {
        normalSuccess: number;
        superSuccess: number;
        ultraSuccess: number;
        keep: number;
        normalFail: number;
        bigFail: number;
        destroy: number;
    }
}

// 강화 결과 데이터
export type UpgradeOutcome = {
    
    // 강화 판정
    result: UpgradeResult;

    // 레벨 변화
    levelDelta: number;
}

