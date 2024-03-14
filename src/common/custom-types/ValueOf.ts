/**
 * @description Object의 value로 이루어진 유니온 타입을 만들때 유용합니다.
 */
export type ValueOf<T> = T[keyof T];
