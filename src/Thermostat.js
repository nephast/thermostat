function Thermostat() {
  this._temperature = 20;
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
};
