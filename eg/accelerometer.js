var five = require("../lib/johnny-five.js"),
    board, accel;

board = five.Board({
  debug: true
});

board.on("ready", function() {

  // Create a new `Accelerometer` hardware instance.
  //
  // five.Accelerometer([ x, y[, z] ]);
  //
  // five.Accelerometer({
  //   pins: [ x, y[, z] ]
  //   freq: ms
  // });
  //

  accel = five.Accelerometer({
    pins: [ "A3", "A4", "A5" ],
    freq: 50
  });

  // Accelerometer Event API

  // "acceleration" events fire
  accel.on("acceleration", function( err, timestamp ) {
    // console.log( "acceleration", this.axis );

    console.log( "acceleration", this.pitch );
  });


});