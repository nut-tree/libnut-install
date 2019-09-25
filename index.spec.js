const libnut = require("./index.js");

describe("libnut", () => {
  it.each([
    ["captureScreen"],
    ["dragMouse"],
    ["getColor"],
    ["getMousePos"],
    ["getPixelColor"],
    ["getScreenSize"],
    ["getXDisplayName"],
    ["keyTap"],
    ["keyToggle"],
    ["mouseClick"],
    ["mouseToggle"],
    ["moveMouse"],
    ["moveMouseSmooth"],
    ["scrollMouse"],
    ["setKeyboardDelay"],
    ["setMouseDelay"],
    ["setXDisplayName"],
    ["typeString"],
    ["typeStringDelayed"]
  ])("should provide a %s method", method => {
    // GIVEN

    // WHEN

    // THEN
    expect(libnut).toHaveProperty(method, expect.any(Function));
  });

  it("should provide a screen object", () => {
    // GIVEN

    // WHEN

    // THEN
    expect(libnut).toHaveProperty(
      "screen",
    );
  });

  it("screen should provide a capture function", () => {
    // GIVEN
    const screen = libnut.screen;

    // WHEN

    // THEN
    expect(screen).toHaveProperty(
      "capture"
    );
  });
});
