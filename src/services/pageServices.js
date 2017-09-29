import { observable } from 'mobx';

class PageService {
  @observable pageIn = false;
}

export default new PageService();
