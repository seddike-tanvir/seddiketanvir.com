





function sendEmail() {
    Email.send({
      SecureToken: "0c816fe8-5970-40be-a50f-bdb07b6d9860",
      To: "mtstech03@gmail.com" ,
      From: "mboxreply@gmail.com",
      Subject: "Anonymously Asked :) ",
      Body: 
             "Hi! You have received an anonymous messege from 'Resume contact form'  - "
             + "<br> <b>Name:</b> " + document.getElementById("name").value 
             + "<br> <b>Email:</b> " + document.getElementById("from").value  
             +"<br> <b>Message to you:</b> <br>" + document.getElementById("msg").value +"<br><br><br><br><br><br><br><br><br><br><br>"
    })
    .then(
      // message => alert("Your messege sent successfully ! Thanks for your question.")
   
      swal("Good job!", "Your messege was sent !", "success")
     );

  }







