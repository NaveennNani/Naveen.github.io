import React from 'react'

function APIData() {

    const [myData,setMyData] = React.useState([])

    React.useEffect(function(){
        fetch("https://fakestoreapi.com/products")
        .then(function(output){
                return output.json()
        })
        .then(function(result){
                setMyData(result)
        })
        .catch(function(error){
                console.log(error)
        })
    })
    
    return (
      <div>
      {
            myData.map(function(i){
                  return (
                    <ul><li data-testid="listitem">{i.title}</li></ul>
                  )
            })
      }
      </div>
    )
}

export default APIData