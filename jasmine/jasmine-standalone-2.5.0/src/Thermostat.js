function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.savingMode = true;
  this.maxTemperature = function() {if (this.savingMode === true) {
      return 25;
    }
    else {
      return 32;
    }};
}

Thermostat.prototype.increaseTempBy = function(ammount) {

  if (this.temperature + ammount > this.maxTemperature())
  {
    throw new RangeError("Temperature can not be set above " + this.maxTemperature() + ".");
  }
  else {
    this.temperature = this.temperature + ammount;
  }
};

Thermostat.prototype.decreaseTempBy = function(ammount) {
  if (this.temperature - ammount < this.MIN_TEMPERATURE) {
    throw new RangeError("Temperature can not be set to below " + this.MIN_TEMPERATURE + ".");
  }
  else {
    this.temperature = this.temperature - ammount;
  }
};

Thermostat.prototype.setSavingMode = function(boolean) {
   this.savingMode = boolean;
};
