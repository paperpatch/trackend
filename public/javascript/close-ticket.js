async function closeTicket() {

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(id);

  const trueFalse = document.querySelector('option[name="status"]').value;
  let status = true;
  console.log(trueFalse);

  if(trueFalse ==="undefined") {
    return 'Undefined value!';
  }

  if(trueFalse === "Open" || "OPEN") {
    status = true;
  } else {
    status = false;
  }

  // reverse the value
  status = !status

  console.log('reverse', status)

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
    document.location.replace(`/ticket/${id}`);
  } else {
    alert(response.statusText);
  }
}