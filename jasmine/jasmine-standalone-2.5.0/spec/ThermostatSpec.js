describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('increaseTempBy', function() {
    it('should increase the temperature by a given ammount', function() {
      thermostat.increaseTempBy(1);
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('decreaseTempBy', function() {
    it('should decrease the temperature by a given ammount', function() {
      thermostat.decreaseTempBy(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it('should throw an error if you try to set temp to below min temp', function() {
      var decreaseAlot = function() {
        thermostat.decreaseTempBy(400);
      };
      expect(decreaseAlot).toThrowError(RangeError, "Temperature can not be set to below 10.");
    });
  });

  describe('power saving mode', function() {
    it('maximum temp is 25 if ON', function() {
      var increaseByTen = function() {
          thermostat.increaseTempBy(10);
      };
      expect(increaseByTen).toThrowError(RangeError, "Temperature can not be set above 25.");
    });

    it('allows the temperature to go above 25 if power saving mode is off', function() {
      thermostat.setSavingMode(false);
      thermostat.increaseTempBy(6);
      expect(thermostat.temperature).toEqual(26);
    });

    it('does not allow temp to go above 35 when power save mode is off', function() {
      thermostat.setSavingMode(false);
      var increaseBySixteen = function() {
          thermostat.increaseTempBy(16);
      };
      expect(increaseBySixteen).toThrowError(RangeError, "Temperature can not be set above 35.");
    });
  });


  describe('reset temperature', function() {
    it('resets the temperature back to 20 from any temperature', function () {
      thermostat.setSavingMode(false);
      thermostat.increaseTempBy(6);
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);

      thermostat.decreaseTempBy(6);
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });

  });



});
