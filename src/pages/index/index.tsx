import { getLogger } from '@/services/api';
import { xmlStr2json } from '@/utils/utils';
import { useNavigate } from 'alita';
import { Button } from 'antd-mobile';
import { useEffect, useState } from 'react';

import styles from './index.css';

export default function ({}) {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getLogger().then((res) => {
      const json = xmlStr2json(res);
      console.log(json);
      setData(json);
    });
  }, []);
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <p className={styles.description}>
        To get started, edit <code>src/pages/index.js</code> and save to reload.
      </p>
      <Button
        size="large"
        color="primary"
        fill="solid"
        block
        onClick={() => navigate('/list')}
      >
        Go to List
      </Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
