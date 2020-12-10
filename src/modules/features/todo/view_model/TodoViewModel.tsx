import { TodosResultModel } from '../../../data/todo/TodoModels';


export class TodoComponentState {
  data: TodosResultModel[];
  status: string;
  error: string;
  
  constructor(data: TodosResultModel[], status: string, error: string) {
    this.data = data;
    this.status = status;
    this.error = error;
  }
}

// export default interface TodoViewModel extends UjwalBaseViewModel<TodoComponentState> {
//   onFetch(): void;
// }
