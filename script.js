let textInputValue = "";
      let todos = [];
      const textInputDOM = document.getElementById("input-todo");
      const buttonAdd = document.getElementById("add-todo");
      const todosDom = document.querySelector("#todos");

      textInputDOM.addEventListener("change", function (event) {
        textInputValue = event.target.value;
        console.log(textInputValue);
      });

      buttonAdd.addEventListener("click", tikla);

      function tikla(e) {
        e.preventDefault();
        todos.unshift({ id: todos.length + 1, todoTitle: textInputValue });
        document.getElementById("input-todo").value = "";
        textInputDOM.value = "";
        displayTodos();
      }
      function displayTodos() {
        let result = "";

        if (todos.length === 0) {
          todosDom.innerHTML = "Liste Boş!";
        } else {
          todos.forEach((item) => {
            result += ` <li
          class="flex justify-between border px-4 py-3 flex items-center justify-between"
        >
          <span>${item.todoTitle}</span>
          <button class="text-red-400"  onclick="deleteTodo(${item.id})"  >Sil</button>
        </li>`;
          });
          todosDom.innerHTML = result;
        }
      }
      function deleteTodo(id) {
        let deletedId;
        for (let index in todos) {
          if (todos[index].id == id) {
            deletedId = index;
          }
        }

        todos.splice(deletedId, 1);
        displayTodos();
      }

      function clearTodos() {
        todos.splice(0, todos.length);
        displayTodos();
      }

      displayTodos();