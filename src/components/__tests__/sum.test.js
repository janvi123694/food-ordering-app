import { sum } from "../sum.js";

test("sum", () => {
    const res = sum(4, 3); 
    expect(res).toBe(7); 
})