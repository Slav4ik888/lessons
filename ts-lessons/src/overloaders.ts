interface MyPosition {
  x: number | undefined;
  y: number | undefined;
};

interface MyPositionWithDefault extends MyPosition  {
  default: string;
};


function position(): MyPosition;
// function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: `a.toString()` }
  }

  return { x: a, y: b }
};

console.log(`Empty: `,          position());
// console.log(`a = 27: `,         position(27));
console.log(`a = 27, b = 13: `, position(27, 13));


function sum(a: number, b: number): number {
  return a + b
};

console.log(`sum 2 + 7: `, sum(2, 7));