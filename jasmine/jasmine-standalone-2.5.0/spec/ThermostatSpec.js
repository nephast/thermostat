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
      var increaseALot = function() {
          thermostat.increaseTempBy(10);
      };
      expect(increaseALot).toThrowError(RangeError, "Temperature can not be set above 25.");
    });
  });

});
