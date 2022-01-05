async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="ticket-title"]').value;
  const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;
  // const priority_id = document.querySelector('select[name="priority-status"]').value;

  const response = await fetch(`/api/tickets`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      ticket_text,
      // priority_id
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

document.querySelector('.new-ticket-form').addEventListener('submit', newFormHandler);
