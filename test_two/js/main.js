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

/****************************
**
** The code below is the same code as above but recoded
** in Revealing Modular Pattern design.
**
*****************************/

var TestModule = ( function( window, undefined ) {

  var $setTrueButton = $( '.set-true' ),
      $setFalseButton = $( '.set-false' ),
      $messagebox = $( '.messagebox' );

  var setter = undefined;

  function setTrue() {
    setter = true;
  }

  function setFalse() {
    setter = false;
  }

  function clickHandlers() {
    $setTrueButton.on( 'click', setTrue );
    $setFalseButton.on( 'click', setFalse );
  }

  return {
    clickEvents : clickHandlers
  };

} )( window );

TestModule.clickEvents();
