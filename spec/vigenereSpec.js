describe("vigenere", function() {
  describe("#encode", function() {
    it("encodes the message hello with keyword banana", function() {
      expect(vigenere.encode("attackatdawn", "lemon")).toEqual("lxfopvefrnhr");
    });
    it("encodes a message", function() {
      expect(vigenere.encode("thesecretkey", "bobandalice")).toEqual("uvfsrfrpbmiz");
    });
  })
  // describe("#decode", function() {
  //   it("decodes the message doageaus with keyword banana", function() {
  //     expect(vigenere.decode("oypvvvmutsowryfjdytekgrev", "supersecretsauce")).toEqual("wearediscoveredfleeatonce");
  //   });
  //   it("decodes the message doageaus with keyword banana", function() {
  //     expect(vigenere.decode("fhwnxlhwv", "startedfromthebottom")).toEqual("nowwehere");
  //   });
  // })
});