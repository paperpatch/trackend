// let modal = document.getElementById("myModal");
// let btn = document.getElementById("editButton");
// let span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// };

// span.onclick = function() {
//     modal.style.display = "none";
// };

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// };



async function editComment(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const ticket_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'PUT',
        body: JSON.stringify({
          ticket_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}


  