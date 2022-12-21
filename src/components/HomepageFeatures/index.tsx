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
    title: 'SQL审核规范',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
1. 审核规则自定义（400+条）<br />
2. 支持审核结果分级展示，支持生成下载审核报告<br />
3. 支持规则模版，灵活组合规则<br />
4. 审核白名单，跳过特例SQL<br />
5. 支持集成 IDE 自助审核
      </>
    ),
  },
  {
    title: '标准化上线流程',
    Svg: require('@site/static/img/diagram-3.svg').default,
    description: (
      <>
1. SQL审核流程按需自定义，满足企业内部不同流程管理要求<br />
2. 支持定时上线<br />
3 .支持设置运维时间<br />
4. 支持Online DDL
      </>
    ),
  },
  {
    title: '多数据库类型支持',
    Svg: require('@site/static/img/database-add.svg').default,
    description: (
      <>
1. 统一接口，可通过插件进行多数据库审核扩展<br />
2. 内置MySQL审核插件，官方支持常用数据库类型，包括PostgreSQL、Db2、SQL Server、Oracle、TiDB、OceanBase
      </>
    ),
  },
  {
    title: '多场景审核',
    Svg: require('@site/static/img/recycle.svg').default,
    description: (
      <>
        支持事前事后审核，覆盖开发、测试、上线、生产等环节
      </>
    ),
    // description: React.createElement(),
  },
  {
    title: '安全管控的SQL客户端入口',
    Svg: require('@site/static/img/fingerprint.svg').default,
    description: (
      <>
提供审核管控的SQL客户端，杜绝执行不合规SQL
      </>
    ),
  },
  {
    title: '丰富的集成能力',
    Svg: require('@site/static/img/layers.svg').default,
    description: (
      <>
1. 标准HTTP API接口可与客户内部流程系统对接<br />
2. 支持LDAP，Oauth2用户对接<br />
3. 支持邮件、微信企业号、webhook 告警对接
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
