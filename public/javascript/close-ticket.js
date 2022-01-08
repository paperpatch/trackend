const title = document.querySelector('input[name="ticket-title"]').value.trim();
const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;
const status = JSON.parse(document.getElementById('status').value);

async function closeTicket() {

    const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];
    
    fetch(`/api/tickets/${id}`).then(function(response) {
        console.log(response);
    });
}