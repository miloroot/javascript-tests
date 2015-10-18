var TestModule = ( function( window, undefined ) {

  /****************************************************
  **
  ** Caching DOM objects with variable names.
  **
  ****************************************************/
  var $setTrue = $( '.set-true' ),
      $setFalse = $( '.set-false' );

  /****************************************************
  **
  ** Setting variable states.
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

  /****************************************************
  **
  ** Methods that are called in the return object.
  **
  ****************************************************/
  function useChosenFunction() {
    if( changer == true ) {
      console.log( "You set the state of variable 'changer' to: ", changer );
    }
    else if( changer == false ) {
      console.log( "You set the state of variable 'changer' to: ", changer );
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
    setVariableFalse : useFalse
  }

})( window );

TestModule.setVariable();
TestModule.setVariableTrue();
TestModule.setVariableFalse();
