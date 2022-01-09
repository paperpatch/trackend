let status = JSON.parse(document.getElementById('status').value);

function checkStatus(status) {
    
   
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];

    fetch(`/api/tickets/${id}`).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data.status)
    })

    if (status === true) {
        status - true;
        document.getElementById('reopenBtn').hidden = true;
        
    } else {
        
        status = false;
        document.getElementById('deleteBtn').hidden = true;
        document.getElementById('closeBtn').hidden = true;
        document.getElementById('saveBtn').hidden = true;
    }
}

checkStatus();
