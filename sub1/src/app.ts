import { history } from 'umi';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('sub1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('sub1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('sub1 unmount', props);
  },
};