import React from 'react';
import  { TodoComponentState } from '../view_model/TodoViewModel';
import TodoListItem from '../components/TodoListItem';
import { BaseView } from '../../../../core/models/base_view';
import TodoViewModelImpl from '../view_model/TodoViewModelImpl';


export default class TodoComponent extends   BaseView<TodoViewModelImpl, TodoComponentState>{

  public constructor({viewModel}: any) {
    super(viewModel, (model: TodoViewModelImpl) => {});
  }

  builder(todoViewModel: TodoViewModelImpl): JSX.Element  {
    const { data, status, error } = this.state;
    return (
      <div style={{ width: '90%', margin: 'auto' }}>
        <br />
        <br />
        <br />
        <h1>Todo</h1>
        <p>State: {status}</p>
        <button onClick={todoViewModel.onFetch}>Refresh</button>
        <br />
        {status === 'error' && (
          <div>
            <h1>Error</h1>
            <p>{JSON.stringify(error)}</p>
          </div>
        )}
        {status === 'loading' && (
          <div>
            <h1>Loading....</h1>
          </div>
        )}
        {status === 'data' && data.length > 0 && (
          <div>
            <h1>Data</h1>
            {data.map((item, index) => (
              <TodoListItem key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}