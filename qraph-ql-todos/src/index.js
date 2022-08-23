const
  url        = "https://graphqlzero.almansi.me/api",

  addForm    = document.forms.addtask,
  searchForm = document.forms.findtask,
  todos      = document.getElementById("todos");
  
addForm.addEventListener('submit', addTaskHandler);
searchForm.addEventListener('submit', findTodos);


const makeRequest = (query => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
});


function printTodo({ title, completed = false, id = "", user = {} }) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `&nbsp; ${title} | ID: ${id} | by <b>${user.name}</b>`;
  li.setAttribute("data-id", id);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  if (completed) checkbox.setAttribute("checked", "true");
  checkbox.addEventListener("change", handlerTodosStatus);
  li.prepend(checkbox);

  const del = document.createElement("button");
  del.className = "btn btn-link mb-1";
  del.innerHTML = "&times";
  del.addEventListener("click", handlerDeleteTodo);
  li.append(del);

  todos.prepend(li);
}

makeRequest(`query Todos {
  todos{
    data {
      id
      title
			completed
      user {
        name
      }
    }
  }
}`).then(({ data }) => data.todos.data.forEach(todo => printTodo(todo)));


async function addTaskHandler(e) {
  e.preventDefault();
  if (addForm.taskname.value) {
    const newTaskQuery = `mutation CreateTodo {
      createTodo(input: {title: "${addForm.taskname.value}", completed: false}) {
        title
        completed
        id
      }
    }`;

    const data = await makeRequest(newTaskQuery);
    printTodo(data.data.createTodo);
    addForm.reset();
  }
}


async function findTodos(e) {
  e.preventDefault();
  const searchText = searchForm.searchname.value;

  if (searchText) {
    const searchQuery = `query searchQuery {
      todos(options: {
        search:{
          q: "${searchText}"
        },
        sort: {
          field: "id",
          order: ASC
        }
      }) {
        data {
          id
          title
          completed
          user { 
            name 
          }
        }
      }
    }`;

    const { data } = await makeRequest(searchQuery);
    console.log('data: ', data);
    todos.innerHTML = "";
    data?.todos?.data?.forEach(todo => printTodo(todo));
  }
}


async function handlerTodosStatus() {
  const todoId = this.parentElement.dataset.id;

  const changeStatusQuery = `mutation ChangeStatus {
    updateTodo(id: "${todoId}", input: { completed: ${this.checked}}) {
      completed
    }
  }`;

  const { data } = await makeRequest(changeStatusQuery);
  if (data.updateTodo.completed) {
    this.setAttribute("checked", "true");
  } else {
    this.removeAttribute("checked");
  }
}


async function handlerDeleteTodo() {
  const todoId = this.parentElement.dataset.id;
  const deleteQuery = `mutation DeleteTodo {
    deleteTodo(id: "${todoId}")
  }`;

  const { data } = await makeRequest(deleteQuery);
  
  if (data.deleteTodo) this.parentElement.remove();
}
