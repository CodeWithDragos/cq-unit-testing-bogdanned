function sum(a: number, b: number): number {
  return a + b;
}
describe("Sum", () => {
  describe("Given two numbers", () => {
    describe("When both number are positive integers", () => {
      // ARRANGE
      const firstNumber = 5;
      const secondNumber = 10;
      it("Then it returns the correct addition of both", () => {
        // ACT
        const result = sum(firstNumber, secondNumber);
        // ASSERT
        expect(result).toEqual(15);
      });
    });
  });
});
