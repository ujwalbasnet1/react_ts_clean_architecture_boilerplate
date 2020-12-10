import React from "react";
import  "./base_view_model";
import BaseViewModel from "./base_view_model";

export abstract class BaseView<T extends BaseViewModel<S> , S> extends React.Component<any, S>
{
    viewModel: T;
    onViewModelReady: Function;

    public constructor(viewModel: T, onViewModelReady: Function) {
        super(viewModel);

        this.viewModel = viewModel;
        this.onViewModelReady = onViewModelReady;
    
        this.state  = viewModel.state;
      }
    
    public componentDidMount(): void {
      this.viewModel.attachView(this);
      this.onViewModelReady(this.viewModel);
    }
    
    public componentWillUnmount(): void {
      this.viewModel.detachView();
    }

    public onViewModelChanged(state: S): void {
      this.setState(state);
    }
      
    public render(): JSX.Element {
        if(this.builder === null) {
          throw Error("Builder cannot be empty");
        }

        return this.builder(this.viewModel);
    }

    abstract builder(viewModel: T): JSX.Element;
}
