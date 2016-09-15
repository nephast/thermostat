
    $( document ).ready(function() {

        var thermostat = new Thermostat();

        $("#temperature").html(thermostat._temperature);

        $("#temperature-up").click(function() {
          thermostat.increase();
          $("#temperature").html(thermostat._temperature);
        });

        $("#temperature-down").click(function () {
          thermostat.decrease();
          $("#temperature").html(thermostat._temperature);
        });

    });
