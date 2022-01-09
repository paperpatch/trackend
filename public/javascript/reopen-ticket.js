async function reopenTicket() {
    
    const title = document.querySelector('input[name="ticket-title"]').value.trim();
    const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;
    let status = JSON.parse(document.getElementById('status').value);
    // console.log(status);

    const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
            ];

    status = true;

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
    })

    fetch(`/api/tickets/${id}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        
        // if(status=== true) {
        //     status = true;
        //     document.getElementById('reopenBtn').hidden = true;
        //     document.getElementById('deleteBtn').hidden = false;
        //     document.getElementById('closeBtn').hidden = false;
        //     document.getElementById('saveBtn').hidden = false;
        // } else if (status === false){}
        //     status = false;
        //     document.getElementById('saveBtn').hidden = true;
        //     document.getElementById('reopenBtn').hidden = true;
        //     document.getElementById('deleteBtn').hidden = false;
        //     document.getElementById('closeBtn').hidden = false;
        
    })
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }


}