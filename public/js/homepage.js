const homepage = async () => {
    const response = await fetch('', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  };
  
  