// async function closeFormHandler(event) {
//     event.preventDefault();

//     const title = document.querySelector('input[name="ticket-title"]').value.trim();
//     const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;
//     const status = JSON.parse(document.getElementById('status').value);
  
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/tickets/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         title,
//         ticket_text,
//         status
//       })
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard/edit');
//     } else {
//       alert(response.statusText);
//     }
// }

function closeTicket() {
    document.getElementById('#closeBtn').addEventListener('click', function(){

        // let statusClosed = 
        document.getElementById('#status-text').innerHTML = "<h2>Status: Closed</h2>";
        
    })

}



  