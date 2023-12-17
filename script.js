function handleSubmit() {
  const emailValue = document.getElementById('email').value.toLocaleLowerCase()
  const errorEmail = document.getElementById('error-email')
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = emailValue.match(regex)
  const sectioncontent = document.querySelector('#personal-info .section-content')
  console.log('check section', sectioncontent);

  const submitControl = document.querySelector('submit-email')
  if (checkEmail) {
    sectioncontent.style.display = 'block';
    submitControl.style.display = 'none';
    errorEmail.innerHTML = '';
  }
  else {
    errorEmail.innerHTML = 'Vui lòng nhập đúng định dạng Email'
  }
}

function handleOnMouseOver(element) {
  const viewmore = element.querySelector('.view-more');
  const lessMore = element.querySelector(".less-more")
  // kiểm tra less-more đang hiện thì viewmore -> tắt
  if (lessMore.style.display=="block") {
    viewmore.style.display = 'none';
  }
  // ngược lại thì khi hover chuột vào thì bật viewmore 
  else {
    viewmore.style.display = 'block';
  }
}
function handleOnMouseOut(element) {
  const viewmore = element.querySelector('.view-more');
  viewmore.style.display = 'none';
}

function handleViewMore(element) {
  // element hiện tại đang là nút viewmore
  const parentElement = element.closest('.parent');
  // hiện tại đang là viewmore, khi .nextSibling -> gọi đến element kế tiếp của nút viewmore
  // .nextSibling.nextSibling để đi đến đúng nút less-more
  const lessmore = element.nextSibling.nextSibling;
  element.style.display = 'none'
  lessmore.style.display = 'block';

  const jobcontent = parentElement.querySelectorAll('.job-content')
  jobcontent.forEach(el => {
    el.style.display = 'block'
  });
}

function handleLessMore(element) {
  const parentElement = element.closest('.parent');
  element.style.display = 'none'

  const jobcontent = parentElement.querySelectorAll('.job-content')
  jobcontent.forEach(el => {
    el.style.display = 'none'
  });
}

