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

  function useTrue() {
    $setTrue.on( 'click', trueSetter );
  }

  function useFalse() {
    $setFalse.on( 'click', falseSetter );
  }

  /****************************************************
  **
  ** Return methods.
  **
  ****************************************************/
  return {
    setVariable : useChosenFunction,
    setVariableTrue : useTrue,
    setVariableFalse : useFalse,
    showMessage : setMessage
  }

})( window );

TestModule.setVariable();
TestModule.setVariableTrue();
TestModule.setVariableFalse();
TestModule.showMessage();
