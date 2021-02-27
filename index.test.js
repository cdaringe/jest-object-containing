describe("objectContaining", () => {
  it("should work", () => {
    const headers = new Headers({});
    headers.set("weee", "weee");
    expect({
      a: "a",
      headers,
      b: {
        c: new Map(),
        d: "awfiotnaf",
      },
    }).toEqual(
      expect.objectContaining({
        b: {
          d: expect.any(String),
        },
      })
    );
  });
});
