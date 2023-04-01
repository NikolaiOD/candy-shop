(() => {
  const refs = {
    openModalBtn: document.querySelector('.product__list'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    success: document.querySelector(".form__success"),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal(e) {
    if (e.target.textContent !== "Оформити замовлення") {
      return;
    }
    
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll');
    
    const productName = document.querySelector('[data-product-name]');
    const currentProductName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    productName.textContent = currentProductName;
  }

  function closeModal(e) {
    if (e.currentTarget.className !== "close-modal-btn") {
      return;
    }
  
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll');
    refs.success.style.display = "none";
  }
})();
