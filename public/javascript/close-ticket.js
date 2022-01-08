async function closeTicket() {
    
    let status = JSON.parse(document.getElementById('status').value);

    const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
            ];

    status = !status 

    const response = await fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        
        status
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }