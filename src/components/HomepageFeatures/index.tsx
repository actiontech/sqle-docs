import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '更丰富的数据源支持',
    Svg: require('@site/static/img/database-add.svg').default,
    description: (
      <>
1. 支持十余种主流商业和开源数据库<br />
2. 持续支持新的数据源类型，以满足您不同的需求
      </>
    ),
  },
  {
    title: '更全面的审核规则',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
1. 拥有规则 700+，并持续增加中<br />
2. 源自DBA运维专家团队多年的技术积累<br />
      </>
    ),
  },
  {
    title: '更智能的 SQL 采集',
    Svg: require('@site/static/img/fingerprint.svg').default,
    description: (
      <>
1. 提供多种智能扫描任务<br />
2. 满足事前和事后 SQL 持续采集需求
      </>
    ),
  },
  {
    title: '更高效的审批路径',
    Svg: require('@site/static/img/diagram-3.svg').default,
    description: (
      <>
1. 提供标准化工作流<br />
2. 通过消息对接，及时了解更新进度
      </>
    ),
  },
  {
    title: '更便捷的数据操作',
    Svg: require('@site/static/img/layers.svg').default,
    description: (
      <>
1. 集成在线数据库客户端 CloudBeaver<br />
2. 通过可视化界面进行数据库管理和查询
      </>
    ),
    // description: React.createElement(),
  },
  {
    title: '全生命周期SQL管控',
    Svg: require('@site/static/img/recycle.svg').default,
    description: (
      <>
1. 提供 SQL 全流程的管控视角<br />
2. 追踪问题SQL的解决进度
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
  
  //   <div className="card">
  //   <div className="card__header">
  //     <h3>{title}</h3>
  //   </div>
  //   <div className="card__body">
  //     <p>
  //       {description}
  //     </p>
  //   </div>
  //   {/* <div class="card__footer">
  //     <button class="button button--secondary button--block">See All</button>
  //   </div> */}
  // </div>



    <div className={clsx('col col--4')}>
      <div className="text--center row">
        <div className="col col--4">        
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className='col col--6'>
          <h3 className='feature_title'>{title}</h3>
        </div>
      </div>
      <div className="text--center feature-content padding-horiz--md">

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
