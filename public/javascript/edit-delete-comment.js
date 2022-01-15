async function editComment(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-text"]').value.trim();
    const ticket_id = window.location.toString().split('/')[
                    window.location.toString().split('/').length - 1
                    ];

    console.log(comment_text);
  
    if (comment_text) {
      const response = await fetch(`/api/comments/${id}`, {
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
};

async function deleteComment(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
}


document.querySelector('.deleteButton').addEventListener('click', deleteComment);
document.querySelector('.editSave').addEventListener('click', editComment);