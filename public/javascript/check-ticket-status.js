// const title = document.querySelector('input[name="ticket-title"]').value.trim();
// const ticket_text = document.querySelector('textarea[name="ticket-text"]').value;


const checkStatus = () => {
    let status = JSON.parse(document.getElementById('status').value);
    const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
            ];

    fetch(`/api/tickets/${id}`).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data.status)
    })

    if(status=== true) {
        status = true;
        document.getElementById('reopenBtn').hidden = true;
        document.getElementById('deleteBtn').hidden = false;
        document.getElementById('closeBtn').hidden = false;
        document.getElementById('saveBtn').hidden = false;
    } else {
        status = false;
        document.getElementById('saveBtn').hidden = true;
        document.getElementById('reopenBtn').hidden = false;
        document.getElementById('deleteBtn').hidden = true;
        document.getElementById('closeBtn').hidden = true;
    }
}

checkStatus();
