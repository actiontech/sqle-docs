import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img
          alt={translate({message: 'Docusaurus with Keytar'})}
          className={styles.heroLogo}
          src={useBaseUrl('/img/SQLE_logo.png')}
        />
        <div className={styles.indexCtas}>
        <p className="hero__subtitle"> 
        一个支持多种不同类型数据库，覆盖事前控制、事后监督、标准发布场景，帮助您建立质量规范的SQL全生命周期质量管理平台。每周发版，快速迭代中。</p>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-usage">
            快速开始
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe src="https://ghbtns.com/github-btn.html?user=actiontech&repo=sqle&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
          </span>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="Description will go into a meta tag in <head />" wrapperClassName="homepage">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
