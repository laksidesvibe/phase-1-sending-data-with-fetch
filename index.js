// Add your code here
function submitData(userName, userEmail) {
    const fomInfo = {name: userName, email: userEmail};
    const handleObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(fomInfo)
    };
    return fetch("http://localhost:3000/users", handleObj)
      .then(resp => resp.json())
      .then(data => {
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }

  submitData("Pillbary", "pillbary@doughboy.com")
  