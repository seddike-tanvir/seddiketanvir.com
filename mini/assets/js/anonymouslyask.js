function sendEmail() {
    Email.send({
      SecureToken: "512aa617-24a8-484b-9173-fde3a29c8af4",
      To: "contact.smtanvir@gmail.com" ,
      From: "mboxreply@gmail.com",
      Subject: document.getElementById("token").value,
      Body: 
             "Hi! You have received an anonymous messege from Mailbox | Anonymous - <br>" 
             + "<br> <b>Messege Token :</b> " + document.getElementById("token").value 
             + "<br> <br> <b>Message to you:</b> <br>" + document.getElementById("msg").value  
    })
    .then(
      message => alert("Your messege sent successfully ! Thanks for your question.")
    );
    // .then(
    //   message => 
    // );



  }
 
