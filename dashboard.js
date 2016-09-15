
    $( document ).ready(function() {

        var thermostat = new Thermostat();

        $("#temperature").text(thermostat._temperature);
        // $("#power-saving-status").text(thermostat.powerSavingIndicator);

        $("#temperature-up").click(function() {
          thermostat.increase();
          updateTemperature();
        });

        $("#temperature-down").click(function () {
          thermostat.decrease();
          updateTemperature();
        });

        $("#temperature-reset").click(function () {
          thermostat.resetTemp();
          updateTemperature();
        });

        $("#powersaving-on").click(function () {
          thermostat.turnPowerSavingOn();
          $("#power-saving-status").html(thermostat.powerSavingIndicator());
        });

        $("#powersaving-off").click(function () {
          thermostat.turnPowerSavingOff();
          $("#power-saving-status").html(thermostat.powerSavingIndicator());
        });

        function updateTemperature() {
          $('#temperature').text(thermostat._temperature);
          $('#temperature').attr('class', thermostat.colour());
        }

    });
