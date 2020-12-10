import React from 'react';
import TodoService from './modules/data/todo/TodoService';
import TodoViewModelImpl from './modules/features/todo/view_model/TodoViewModelImpl';
import TodoComponent from './modules/features/todo/view/TodoComponent';


function App(): JSX.Element {
  const todoService = new TodoService();
  const todoViewModal = new TodoViewModelImpl(todoService);

  return (
    <div>
      <TodoComponent viewModel={todoViewModal} />
    </div>
  );
}

export default App;
