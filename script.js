const url = 'http://localhost:8080/index.html'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('hey') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}