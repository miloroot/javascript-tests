$( function() {

  var $setTrueButton = $( '.set-true' ),
      $setFalseButton = $( '.set-false' );

  var setter = undefined;

  $setTrueButton.on( 'click', function() {
    setter = true;
    console.log( "variable setter is now: ", setter );
    changerFunc = function() {
      console.log( "poop alarm is for real" );
    }
    changerFunc();
  });

  $setFalseButton.on( 'click', function() {
    setter = false;
    console.log( "variable setter is now: ", setter );
    changerFunc = function() {
      console.log( "false poop alarm" )
    }
    changerFunc();
  });

});
