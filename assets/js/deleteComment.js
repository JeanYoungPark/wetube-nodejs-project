import axios from 'axios';

const deleteCommentBtn = document.querySelectorAll('.jsDeleteComment');
const commentNumber = document.getElementById('jsCommentNumber');

function decreaseNumber() {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

const deleteComment = (commentId) => {
  const deleteBtn = document.getElementById(commentId);
  const li = deleteBtn.closest('li');
  li.remove();
  decreaseNumber();
};

const handleDeleteComment = async (event) => {
  if (confirm('삭제하시겠습니까?')) {
    const videoId = window.location.href.split('/videos/')[1];
    const commentId = event.target.id;
    const response = await axios({
      url: `/api/${videoId}/delete`,
      method: 'POST',
      data: {
        commentId,
      },
    });
    if (response.status === 200) {
      deleteComment(commentId);
    }
  }
};

function init() {
  deleteCommentBtn.forEach((comment) => {
    comment.addEventListener('click', handleDeleteComment);
  });
}

if (deleteCommentBtn.length) {
  init();
}
