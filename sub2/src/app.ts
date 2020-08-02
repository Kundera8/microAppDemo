import { history } from 'umi';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('sub2 bootstrap', history, props);
    if (window.__POWERED_BY_QIANKUN__) {
      const path = props.base.split('/').slice(2).join('/');
      history.push('/' + path + '/' + path);
    }
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('sub2 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('sub2 unmount', props);
  },
};