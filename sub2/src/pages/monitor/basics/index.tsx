import React from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>basics</h1>
      <Button>按钮</Button>
      <Link to="/drive">DRIVE</Link>
    </div>
  );
}
