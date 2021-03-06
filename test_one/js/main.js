var TestModule = ( function( window, undefined ) {

  /****************************************************
  **
  ** Caching DOM objects with variable names.
  **
  ****************************************************/
  var $setTrue = $( '.set-true' ),
      $setFalse = $( '.set-false' ),
      $messageBox = $( '.messages' );

  /****************************************************
  **
  ** Setting variables and methods initial states.
  **
  ****************************************************/
  var changer = null;
  console.log( "variable 'changer' default state is: ", changer );

  /****************************************************
  **
  ** Methods that are called in other methods.
  ** Not in the return object.
  **
  ****************************************************/
  function trueSetter() {
    changer = true;
    useChosenFunction();
  }

  function falseSetter() {
    changer = false;
    useChosenFunction();
  }

  function setMessage( message ) {
    $messageBox.html( message );
  }

  /****************************************************
  **
  ** Methods that are called in the return object.
  **
  ****************************************************/
  function useChosenFunction() {
    if( changer == true ) {
      console.log( "You set the state of variable 'changer' to: ", changer );
      setMessage( "Chosen state is: true" );
    }
    else if( changer == false ) {
      console.log( "You set the state of variable 'changer' to: ", changer );
      setMessage( "Chosen state is: false" );
    }
  }

  function clickHandlers() {
    $setTrue.on( 'click', trueSetter );
    $setFalse.on( 'click', falseSetter );
  }

  /****************************************************
  **
  ** Return methods.
  **
  ****************************************************/
  return {
    setVariable : useChosenFunction,
    clickEvents : clickHandlers
  }

})( window );

TestModule.setVariable();
TestModule.clickEvents();
