describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts with temperature of 20 degrees", function(){
    expect(thermostat._temperature).toEqual(20);
  });


});
