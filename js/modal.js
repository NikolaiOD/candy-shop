(() => {
  const refs = {
    openModalBtn: document.querySelector('.sukhofrukty__list'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal(e) {
    if (e.target.textContent !== "Оформити замовлення") {
      return;
    }
  
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll');
  }

  function closeModal(e) {
    if (e.currentTarget.className !== "close-modal-btn") {
      return;
    }
  
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll');
  }
})();
