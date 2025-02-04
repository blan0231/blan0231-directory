// 1. List function using map()
function list(clients) {
    return clients
      .map(
        (client) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
          ${client.name} <strong>$ ${client.balance.toFixed(2)}</strong>
        </li>`
      )
      .join("");
  }
  
  // 2. Order function using sort()
  function order(clients, property) {
    return [...clients].sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }
  
  // 3. Total function using reduce()
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // 4. Info function using find()
  function info(index) {
    return clients.find((client) => client.index === index);
  }
  
  // 5. Search function using filter()
  function search(query) {
    return clients.filter((client) =>
      client.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  