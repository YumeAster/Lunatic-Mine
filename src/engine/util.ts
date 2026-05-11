import type { Ball, BallPool, DiceRoll } from "../types/util";

// randInt
export function randInt(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start)) + start;
}

// 주사위 굴림 함수
export function rollDice(rule: DiceRoll): boolean {
    const rolledNumber = Math.floor(Math.random() * rule.sides) + 1;
    return rolledNumber <= rule.successRoll;
}

// 공 추첨 풀 만들기
export function makeBallPool<T>(...balls:Ball<T>[]): BallPool<T> {
    
    // 공 개수 합산
    const sumOfBalls = balls.reduce<number>((sum, ball) => {
        return sum + ball.count;
    }, 0)


    // 객체 생성
    return {
        arr: balls,
        count: sumOfBalls,
    }
    
}

// 공 추첨 함수
export function drawBall<T>(pool: BallPool<T>): T {
    const resultNumber = randInt(0, pool.count);

    let i: number = 0;

    for (const b of pool.arr) {
        i += b.count
        if (i > resultNumber)
            return b.result;
    }

    throw new Error("Invaild BallPool: no ball was selected.")

}