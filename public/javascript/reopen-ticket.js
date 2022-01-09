function reopenTicket(status) {
  

    const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
            ];

    status = true;

    const response =  fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        ticket_text,
        status
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetch(`/api/tickets/${id}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        
        if (status === true) {
            status = true;
            document.getElementById('reopenBtn').hidden = true;
            
        } else {
            status = false;
            document.getElementById('deleteBtn').hidden = true;
            document.getElementById('closeBtn').hidden = true;
            document.getElementById('saveBtn').hidden = true;
        }
    })
  
    // if (response.ok) {
    //   document.location.replace('/edit');
    // } else {
    //   alert(response.statusText);
    // }

checkStatus();
}