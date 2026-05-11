import type { UpgradeResult } from "../types/upgrade"

// 강화 결과 문자열 데이터
export const UPGRADE_RESULT_LABELS: Record<UpgradeResult, string> = {
    NORMAL_SUCCESS: "일반 성공",
    SUPER_SUCCESS: "대박 성공",
    ULTRA_SUCCESS: "초대박 성공",
    KEEP: "유지",
    NORMAL_FAIL: "일반 실패",
    BIG_FAIL: "대형 실패",
    DESTROY: "파괴"
}