async function editComment(event) {
    event.preventDefault();

    let comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const ticket_id = window.location.toString().split('/')[
                    window.location.toString().split('/').length - 1
                    ];

    comment_text = 
  
   
    console.log(comment_text);
  
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

document.querySelector('.editSave').addEventListener('click', editComment);

  