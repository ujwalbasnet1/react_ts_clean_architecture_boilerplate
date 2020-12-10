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


  count: number = 0;

  public onFetch = async () => {
    this.updateView(() => {
      this.state.status = 'loading';
      this.state.data = [];
    });
    
    try {
      const jsonData = await this.todoRepository.onFetch();
      
      this.updateView(() => {
        this.state.status = 'data';
        this.state.data = jsonData;
        this.state.count = this.count;
        this.count += 1;
      });

    } catch (err) {
      this.updateView(() => {
        this.state.status = 'error';
        this.state.error = 'Check console please';  
      });
    }
  };

  

  
}
