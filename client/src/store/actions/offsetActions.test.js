import { INCREASE_OFFSET, RESET_OFFSET } from './actionTypes';
import { increaseOffset, resetOffset } from './offsetActions';

describe('offset actions', () => {
  it('increaseOffset should create INCREASE_OFFSET action', () => {
    expect(increaseOffset()).toEqual({
      type: INCREASE_OFFSET,
    });
  });

  it('resetOffset should create RESET_OFFSET action', () => {
    expect(resetOffset()).toEqual({
      type: RESET_OFFSET,
    });
  });
});
