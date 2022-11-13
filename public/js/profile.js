const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#gift-name').value.trim();
    const price = document.querySelector('#gift-price').value.trim();
    const description = document.querySelector('#gift-desc').value.trim();
  
    if (name && price && description) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ name, price, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete review');
      }
    }
  };
  
  document
    .querySelector('.new-gift-form')
    .addEventListener('submit', newFormHandler);
  

  document
    .querySelector('.gift-list')
    .addEventListener('click', delButtonHandler);

  