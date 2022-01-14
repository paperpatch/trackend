async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="ticket-title"]').value.trim();
  const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;
  const status = JSON.parse(document.getElementById('edit-status').value);
  const priority_id = JSON.parse(document.getElementById('edit-priority').value);
  const type_id = JSON.parse(document.getElementById('edit-type').value);
  const assigned_id = JSON.parse(document.getElementById('edit-assigned').value);
  
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  
  const response = await fetch(`/api/tickets/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      ticket_text,
      status,
      priority_id,
      type_id,
      assigned_id,
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

document.querySelector('.edit-ticket-form').addEventListener('submit', editFormHandler);