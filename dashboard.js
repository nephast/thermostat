
    $( document ).ready(function() {

        var thermostat = new Thermostat();

        $("#temperature").text(thermostat._temperature);
        // $("#power-saving-status").text(thermostat.powerSavingIndicator);

        $("#temperature-up").click(function() {
          thermostat.increase();
          $("#temperature").text(thermostat._temperature);
        });

        $("#temperature-down").click(function () {
          thermostat.decrease();
          $("#temperature").text(thermostat._temperature);
        });

        $("#temperature-reset").click(function () {
          thermostat.resetTemp();
          $("#temperature").text(thermostat._temperature);
        });

        $("#powersaving-on").click(function () {
          thermostat.turnPowerSavingOn();
          $("#power-saving-status").html(thermostat.powerSavingIndicator());
        });

        $("#powersaving-off").click(function () {
          thermostat.turnPowerSavingOff();
          $("#power-saving-status").html(thermostat.powerSavingIndicator());
        });

    });
