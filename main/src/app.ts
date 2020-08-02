let theme1 = true;

export const layout = { 
  logout: () => {
    let styleLink: Node | null = document.getElementById('theme-style');
    let body = document.getElementsByTagName('body')[0];
    if (styleLink) {
      // 假如存在id为theme-style 的link标签，直接修改其href
      if (theme1) {
        styleLink.href = '/theme/theme1.css'; // 切换 antd 组件主题
        body.className = 'body-wrap-theme1'; // 切换自定义组件的主题
      } else {
        styleLink.href = '/theme/theme2.css';
        body.className = 'body-wrap-theme2';
      }
      theme1 = !theme1;
    } else {
      // 不存在的话，则新建一个
      styleLink = document.createElement('link');
      styleLink.type = 'text/css';
      styleLink.rel = 'stylesheet';
      styleLink.id = 'theme-style';
      if (theme1) {
        styleLink.href = '/theme/theme1.css';
        body.className = 'body-wrap-theme1';
      } else {
        styleLink.href = '/theme/theme2.css';
        body.className = 'body-wrap-theme2';
      }
      theme1 = !theme1;
      document.body.append(styleLink);
    }
  },
  // rightRender:(initInfo: any)=> { console.log(initInfo); return initInfo; },// return string || ReactNode; 
};

export async function getInitialState() {
  const data = await 'liwenqiang xxx';
  return data;
}