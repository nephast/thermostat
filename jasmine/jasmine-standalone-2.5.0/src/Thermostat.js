function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
}

Thermostat.prototype.increaseTempBy = function(ammount) {
  this.temperature = this.temperature + ammount;
};

Thermostat.prototype.decreaseTempBy = function(ammount) {
  if (this.temperature - ammount < this.MIN_TEMPERATURE) {
    throw new RangeError("Temperature can not be set to below " + this.MIN_TEMPERATURE + ".");
  }
  else {
    this.temperature = this.temperature - ammount;
  }
};
