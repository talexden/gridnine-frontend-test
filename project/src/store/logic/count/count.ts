import {COUNT_INIT, COUNT_STEP} from '../../../common/const';

class Count {
  readonly #countStep: number;

  readonly #countInit: number;

  constructor (countInit: number, countStep: number) {
    this.#countInit = countInit;
    this.#countStep = countStep;
  }

  bang = (count: number) => count + this.#countStep;

  init = () => this.#countInit;
}

export const ShowCount = new Count(COUNT_INIT, COUNT_STEP);
