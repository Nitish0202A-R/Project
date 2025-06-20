 selectedIndex = -1;

    function loadData() {
      const data = JSON.parse(localStorage.getItem('users')) || [];
      const table = document.getElementById('tableData');
      table.innerHTML = '';

      data.forEach((user, index) => {
        table.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button onclick="editData(${index})">Edit</button>
              <button onclick="deleteData(${index})">Delete</button>
            </td>
          </tr>
        `;
      });
    }

    function saveData() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name === '' || email === '') {
        alert('Please enter both name and email.');
        return;
      }

      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (selectedIndex === -1) {
        users.push({ name, email });
      } else {
        users[selectedIndex] = { name, email };
        selectedIndex = -1;
      }

      localStorage.setItem('users', JSON.stringify(users));
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      loadData();
    }

    function editData(index) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      document.getElementById('name').value = users[index].name;
      document.getElementById('email').value = users[index].email;
      selectedIndex = index;
    }

    function deleteData(index) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(users));
      loadData();
    }

    // Initial load
    loadData();