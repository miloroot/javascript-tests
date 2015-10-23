"use strict";

let TestModule = ( function( window, undefined ) {

  let $setTrueButton = $( '.set-true' ),
      $setFalseButton = $( '.set-false' ),
      $messagebox = $( '.messagebox' );

  let setter = undefined;
  let newline = "<br>";

  let setTrue = () => {
    setter = true;
    setVariable();
  }

  let setFalse = () => {
    setter = false;
    setVariable();
  }

  let message = ( msg ) => {
    console.log( msg );
    $messagebox.html( newline + msg );
  }

  let clickHandlers = () => {
    $setTrueButton.on( 'click', setTrue );
    $setFalseButton.on( 'click', setFalse );
  }

  let setVariable = () => {
    if( setter == true ) {
      message( "setter is now true" );
    }
    else if ( setter == false ) {
      message( "setter is now false" );
    }
  }

  return {
    clickEvents : clickHandlers
  }
} )( window );

TestModule.clickEvents();
