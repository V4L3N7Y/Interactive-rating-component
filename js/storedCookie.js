////////////////////////////////////////////////////////


  // Get the counter value from the cookie
  let count = document.cookie.replace(/(?:(?:^|.*;\s*)counter\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  
  // Update the text of the element with the ID "result"
  document.getElementById('result').textContent = `You selected ${count} out of 5`;