function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.POWER_SAVE_MAX_TEMP = 25;
  this.MAX_TEMPERATURE = 35;
  this.savingMode = true;
  this.maxTemperature = function() {
    if (this.savingMode === true) {
      return this.POWER_SAVE_MAX_TEMP;
    }
    else {
      return this.MAX_TEMPERATURE;
    }};
  this.usageStatus = function() {
    if(this.temperature < 18){
      return "Low usage";
    }
    else if(this.temperature > 25){
      return "High usage";
    }
    else {
      return "Medium usage";
  }};
}

Thermostat.prototype.increaseTempBy = function(amount) {
  if (this.temperature + amount > this.maxTemperature())
  {
    throw new RangeError("Temperature can not be set above " + this.maxTemperature() + ".");
  }
  else {
    this.temperature = this.temperature + amount;
  }
};

Thermostat.prototype.decreaseTempBy = function(amount) {
  if (this.temperature - amount < this.MIN_TEMPERATURE) {
    throw new RangeError("Temperature can not be set to below " + this.MIN_TEMPERATURE + ".");
  }
  else {
    this.temperature = this.temperature - amount;
  }
};

Thermostat.prototype.setSavingMode = function(boolean) {
   this.savingMode = boolean;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};
