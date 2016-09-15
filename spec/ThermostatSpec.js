describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts with temperature of 20 degrees", function(){
    expect(thermostat._temperature).toEqual(20);
  });

  it("starts with power saving on", function(){
    expect(thermostat._powerSaving).toBe(true);
  });

  describe("increase", function(){

    it("increases temperature of thermostat by 1", function(){
      thermostat.increase();
      expect(thermostat._temperature).toEqual(21);
    });

  });

  describe("decrease", function(){

    it("decreases temperature of thermostat by 1", function(){
      thermostat.decrease();
      expect(thermostat._temperature).toEqual(19);
    });

    it("will not decrease temperature further than 10", function(){
      for (i = 0; i < 10; i++) {
        thermostat.decrease();
      }
      expect(thermostat._temperature).toEqual(10);
      thermostat.decrease();
      expect(thermostat._temperature).toEqual(10);
    });

  });


    describe("turnPowerSavingOff", function(){

      it("changes powersaving to false", function(){
        thermostat.turnPowerSavingOff();
        expect(thermostat._powerSaving).toBe(false);
      });

    });

    describe("turnPowerSavingOn", function(){

      it("changes powersaving to true", function(){
        thermostat.turnPowerSavingOff();
        thermostat.turnPowerSavingOn();
        expect(thermostat._powerSaving).toBe(true);
      });

    });

    describe("maxTemp", function(){
      it("returns 25 if powersaving is on", function(){
        expect(thermostat.maxTemp()).toEqual(25);
      });

      it("returns 32 if powersaving is off", function(){
        thermostat.turnPowerSavingOff();
        expect(thermostat.maxTemp()).toEqual(32);
      });
    });

    describe("resetTemp", function() {
      it("resets temperature to default", function() {
        for (i = 0; i < 5; i++) {
          thermostat.decrease();
        }
        thermostat.resetTemp();
        expect(thermostat._temperature).toEqual(20);
      });
    });

    describe("colour", function() {
      it('returns yellow when at default temperature', function() {
        expect(thermostat.colour()).toEqual('yellow');
      });

      it('returns green when below 18 degrees', function() {
        for (i = 0; i < 3; i++) {
          thermostat.decrease();
        }
        expect(thermostat.colour()).toEqual('green');
      });

      it('returns green when below 18 degrees', function() {
        for (i = 0; i < 5; i++) {
          thermostat.increase();
        }
        expect(thermostat.colour()).toEqual('red');
      });
    });

});
