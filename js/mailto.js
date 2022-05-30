var form = document.getElementById("my-form");
    var statusInfo = document.getElementById("my-form-status");
    async function handleSubmit(event,link) {
      event.preventDefault();
      var data = new FormData(event.target);
      var link = window.open("new.html")
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset()
          eml.style.display = "none";
          link
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              statusInfo.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              link
              statusInfo.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        link
        statusInfo.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)