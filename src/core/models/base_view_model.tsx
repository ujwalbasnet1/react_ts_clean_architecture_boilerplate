import { BaseView } from "./base_view";


export default abstract class BaseViewModel<S> {
  state!: S;
  view!: BaseView<BaseViewModel<S>, S>;

  public attachView (baseView: BaseView<BaseViewModel<S>, S>){
    this.view = baseView;
  };

  public detachView = (): void => {
    this.view = Object.create(null);
  };

  public updateView(updateV?:Function) {
    if ( updateV ) {
      updateV();
    }
    
    this?.view?.onViewModelChanged(this.state);
  };

}
