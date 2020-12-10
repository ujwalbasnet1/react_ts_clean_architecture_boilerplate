import { TodosResultModel } from '../../../data/todo/TodoModels';


export class TodoComponentState {
  data: TodosResultModel[];
  count: Number
  status: string;
  error: string;
  
  constructor(data: TodosResultModel[], status: string, error: string) {
    this.data = data;
    this.status = status;
    this.error = error;
    this.count = 0;
  }
}

// export default interface TodoViewModel extends UjwalBaseViewModel<TodoComponentState> {
//   onFetch(): void;
// }
