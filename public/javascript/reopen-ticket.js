async function reopenTicket() {
  
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  let status = document.querySelector('option[name="status"]').value;

  status = true;

  const response = await fetch(`/api/tickets/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      status
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    document.location.replace(`/ticket/${id}`);
  } else {
    alert(response.statusText);
  }
}