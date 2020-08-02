import React from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>HOME</h1>
      <Button>按钮</Button>
    </div>
  );
}
