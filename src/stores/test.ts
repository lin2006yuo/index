import { observable, action } from "mobx"

export class ThemeStore {
  @observable
  count = 0

  @action
  add() {
    this.count++
  }
}

export default ThemeStore
