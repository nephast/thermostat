$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.temperature);

    // Your code here.
    $('#temperature-up').click(function() {
      thermostat.increaseTempBy(1);
      $("#temperature").html(thermostat.temperature);

    });

    $('#temperature-down').click(function() {
      thermostat.decreaseTempBy(1);
      $("#temperature").html(thermostat.temperature);

    });

    $('#temperature-reset').click(function() {
      thermostat.resetTemp();
      $("#temperature").html(thermostat.temperature);

    });

    $('#powersaving-on').click(function() {
      thermostat.resetTemp();
      $("#temperature").html(thermostat.temperature);
    });

});
