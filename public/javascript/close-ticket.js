async function closeTicket() {
    
    const title = document.querySelector('input[name="ticket-title"]').value.trim();
    const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;
    let status = JSON.parse(document.getElementById('status').value);

    const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
            ];

    status = !status 

    const response = await fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        ticket_text,
        status
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    fetch(`/api/tickets/${id}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        
        if(status === false) {
            status = false;
            document.getElementById('closeBtn').hidden = true;
            document.getElementById('deleteBtn').hidden = true;
        } else {
            status = true;
            document.getElementById('reopenBtn').hidden = false;
        }
    })
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }
    
}