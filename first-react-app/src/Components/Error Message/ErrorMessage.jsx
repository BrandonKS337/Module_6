function ErrorMessage({ error, resetErrorBoundary }) {
  console.log(error);

  return (
    <>
      <div>
        <p>OHHHHH SHNAP, Something Broke.</p>
        <pre>{error.message}</pre>
        <button onClick={() => resetErrorBoundary()}>Try Again?</button>    
        {/* This segment renders the actual error message but then offers a 
        page reset button to undo intentional error */}
      </div>
    </>
  );
}

export default ErrorMessage;
