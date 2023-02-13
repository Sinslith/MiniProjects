

function validUserNames(usernames) {
    // your code here
    return usernames.filter(n=>{
          return n.length<10;
      })
  }

  const takis=validUserNames(["one","toobig","thatiswaytoobigffsomg","three"]);


  const bluez=allEvens([1,2,3])

//   const allEvens.every(even=>{
//     return even%2===0})


function allEvens(even)
{
    return even.every(
        even=>{
            return even%2===0}
    )
}


const allEvens = (even) => {
    const isAllEven = even.every (even=>even%2===0)
    return isAllEven
}


const allEvens=function allEvens(even)
{
    return even.every(
        even=>{
            return even%2===0}
    )
}

// const allEvens = (even) => {
//     const isAllEven = even.every (even=>even%2===0)
//     return isAllEven
// }
