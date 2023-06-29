import { trigger } from "../lib";

export const Counter = trigger((click) => (
  <button clickTrigger={click}>Count is {click.track((x) => x + 1, 0)}</button>
));
