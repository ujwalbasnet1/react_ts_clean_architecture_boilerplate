import { BaseView } from "./base_view";


export default class BaseViewModel<S> {
  state!: S;
  view!: BaseView<BaseViewModel<S>, S>;
  
  public attachView (baseView: BaseView<BaseViewModel<S>, S>){
    this.view = baseView;
  };

  public detachView = (): void => {
    this.view = Object.create(null);
  };

  public updateView = (): void => {
    this?.view?.onViewModelChanged(this.state);
  };

}
