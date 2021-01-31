import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

export class StateService<T> {
  public state$: BehaviorSubject<T>;

  public get state(): T {
    return this.state$.getValue();
  }

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject(initialState);
  }

  public select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map(state => mapFn(state)),
      distinctUntilChanged()
    );
  }

  public setState(newState: Partial<T>): void {
    this.state$.next({
      ...this.state,
      ...newState
    });
  }
}

export class StateServiceObserver<T> {
  constructor(private stateService: StateService<T>) {}

  public get state(): T {
    return this.stateService.state;
  }

  public select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.stateService.select(mapFn);
  }
}

export class StateServiceManager<T> {
  private stateService: StateService<T>;

  constructor(stateService: StateService<T>) {
    this.stateService = stateService;
  }

  public setState(newState: Partial<T>) {
    return this.stateService.setState(newState);
  }
}
