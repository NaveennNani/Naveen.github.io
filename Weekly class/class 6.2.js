let posts = document.getElementById("posts");//access the div
const API_URL= "http://jsonplaceholder.typicode.com/posts"
fetch(API_URL)
.then(res=> res.json())
.then(data=>{
      let str=''
      data.forEach(post=>{
        str+=`<h4>${post.title}</h4> <p> ${post.body}</p> <hr/>`;
      })
      posts.innerHTML=str;
})
.catch(err=> console.log(err))