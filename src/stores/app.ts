import { observable, action } from "mobx"

export class AppStore {
  @observable
  loading = false

  @action
  handleSetLoading(flag: boolean) {
    this.loading = flag
  }
}

export default AppStore
