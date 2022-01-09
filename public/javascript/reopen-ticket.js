// const checkStatus = () => {
//     fetch(`/api/tickets/${id}`).then(function(res){
//         return res.json();
//     }).then(function(data){
//         console.log(data.status)
//     })
// }

async function reopenTicket() {
    
    
    let status = JSON.parse(document.getElementById('status').value);
    console.log(status);

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
    })

    fetch(`/api/tickets/${id}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        
        if(status=== true) {
            status = true;
            document.getElementById('reopenBtn').hidden = true;
        } else {
            status = false;
            document.getElementById('deleteBtn').hidden = true;
            document.getElementById('closeBtn').hidden = true;
        }
    })
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }


}