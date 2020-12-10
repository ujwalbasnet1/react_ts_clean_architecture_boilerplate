import  { TodoComponentState } from './TodoViewModel';
import TodoRepository from '../../../data/todo/TodoRepository';

import BaseViewModel from '../../../../core/models/base_view_model';


export default class TodoViewModelImpl extends BaseViewModel<TodoComponentState> {
  private todoRepository: TodoRepository;
  public constructor(todoRepository: TodoRepository) {
    super();
    this.todoRepository = todoRepository;

    // state init
    this.state = new TodoComponentState([], "idle" , "");
  }


  public onFetch = async () => {
    this.state.status = 'loading';
    this.state.data = [];
    this.updateView();
    
    try {
      const jsonData = await this.todoRepository.onFetch();
      this.state.status = 'data';
      this.state.data = jsonData;
      this.updateView();

    } catch (err) {
      this.state.status = 'error';
      this.state.error = 'Check console please';
      this.updateView();
    }
  };

  

  
}
