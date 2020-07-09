import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  logTodo(todo);
});

const arr = [10,11,12];
for (const el of arr)
  console.log(el);

  const logTodo = (todo: Todo) => {
    for (const key in todo)
      console.log(todo[key]);
    console.log(`
    The todo with ID: ${todo.id}
    Has a title of: ${todo.title}
    Is it finished? ${todo.completed}
  `); 
  }
  
  const date = Date.now();
  console.log(Date.UTC());