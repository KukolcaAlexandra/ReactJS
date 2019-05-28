import { INCREASE_OFFSET, RESET_OFFSET } from './actionTypes';

export function increaseOffset() {
  return { type: INCREASE_OFFSET };
}

export function resetOffset() {
  return { type: RESET_OFFSET };
}
