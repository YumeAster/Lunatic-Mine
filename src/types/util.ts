// 주사위 굴림 데이터
export type DiceRoll = {

    // 주사위의 면체 수
    sides: number;

    // 몇 이하로 숫자가 나오면 성공할 지
    successRoll: number;

    // (prob) = (successRoll) / (sides)

}

export type Ball<T> = {
    result: T,
    count: number,
}

export type BallPool<T> = {
    arr: Ball<T>[],
    count: number,
}
