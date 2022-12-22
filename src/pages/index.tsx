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
SQLE 是由上海爱可生信息技术股份有限公司 开发并开源，支持SQL审核、索引优化、事前审核、事后审核、支持标准化上线流程、原生支持 MySQL 审核且数据库类型可扩展的 SQL 审核工具</p>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速开始
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            用户指南
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe src="https://ghbtns.com/github-btn.html?user=actiontech&repo=sqle&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />" wrapperClassName="homepage">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
