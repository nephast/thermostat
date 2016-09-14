function Thermostat() {
  this._temperature = 20;
  this.powersaving = true;
}

Thermostat.prototype = {
  increase: function() {
    this._temperature ++;
  },

  decrease: function() {
    if (this._temperature > 10) {
      this._temperature --;
    }
  },

  turnPowerSavingOff: function() {
    this.powersaving = false;
  },

  turnPowerSavingOn: function() {
    this.powersaving = true;
  },

  maxTemp: function() {
    if (this.powersaving) {
      return 25;
    }
    else {
      return 32;
    }
  },

};
