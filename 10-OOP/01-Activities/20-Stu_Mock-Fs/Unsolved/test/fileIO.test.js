const FileIO = require("../fileIO");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      //arrange
      const file = new FileIO();
      const message = "message.txt";

      //act
      fs.readFileSync.mockReturnValue("Hello World");
      message = file.read(message);

      //assert
      expect(message).toEqual("Hello World");
      expect(fs.readFileSync).lastCalledWith(file), "utf8";
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
