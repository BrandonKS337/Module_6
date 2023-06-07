function Greeting(props) {
  //   const stringProps = JSON.stringify(props);
  //   const name = JSON.stringify(props.name)

 

  return (
    <div className="Greeting">
      {/* <h3>Hello {props.name} </h3>  */}
      {/*This part prints Hello and then the prop. If prop left blank it will only print Hello PRIOR to the ternary conditional syntax below!!!*/}

      {props.name ? <h3>Hello {props.name}</h3> : <h3>Hello World!</h3>}
      {/*This is the ternary condition syntax: if props.name exists 
      then print inside <h3> "Hello" and then the name entered in props.name 
      ELSE print "Hello World" instead....This makes sure to not just leave 
      only the word "Hello" if no name present like in the example above */}

      {props.children && (  /*&& here means that if the above line = true also do this */
        <div>
          {/* <h4>Child Component:</h4> */}
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Greeting;

// function Greeting({ name, children }) { {/*Instead of using Props can
// "destructure" props object within function "signature" */}
//    return (
//      <div className="Greeting">
//        {name ? <h3>Hello {name}</h3> : <h3>Hello World!</h3>}

//        {children && (
//          <div>
//            {/* <h4>Child Component:</h4> */}
//            {children}
//          </div>
//        )}
//      </div>
//    );
//  }

//  export default Greeting;
