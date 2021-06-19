// method GET
// create request and link
const ajax = new XMLHttpRequest()
const ajaxURL = "https://jsonplaceholder.typicode.com/posts/1/comments"

ajax.onreadystatechange = () => {
    if(ajax.readyState === 4 && ajax.status === 200){
        // do something when states = ok
    }
}

ajax.open('GET', ajaxURL)
ajax.send()

ajax.onload = () => {
    console.log('Tudo ok')
}

// method POST
// create request and object
const anotherAjax = new XMLHttpRequest()
const ajaxObj = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  anotherAjax.onreadystatechange = () => {
    if(anotherAjax.readyState === 4) {
        // do something when readyStates = concluded
    }
}

  anotherAjax.open('POST', "https://jsonplaceholder.typicode.com/posts" )
  anotherAjax.send()

  anotherAjax.onload = () => {
      console.log('Tudo ok tambem')
  }