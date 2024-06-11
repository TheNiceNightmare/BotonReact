export function AlertComponent ({children, ...parametros}) {
  return (
    <div id= "alert">
        <h2>{children}</h2>
        <p>These changes can't be reverted! </p>
        <button onClick={parametros.onClick}>Proceed</button>
        </div>
      
  )
}


