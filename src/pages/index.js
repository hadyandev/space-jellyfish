import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import FeatureList from 'components/FeatureList';

import { products } from 'data/products';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css" />
      </Helmet>

      <Section className={styles.homeHeader}>
        <Container>
          <h1 className={styles.homeTitle}>
            { siteName }
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className={styles.productGrid}>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <img src={product.image} />
                  <h2>{ product.name }</h2>
                  <p>{ product.description }</p>
                  <p>${ product.price }</p>
                  <Button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price="79.99"
                    data-item-description={product.description}
                    data-item-image={product.image}
                    data-item-name={product.id}
                    data-item-url="/"
                    data-item-price={product.price}
                    >
                    Add to cart
                  </Button>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <script async src="https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js"/>
      <div hidden id="snipcart" data-api-key="MzM0OWM3ZTItNWVhYS00YTY2LWIxMTgtMWU2MTk3YWNlMGIyNjM3NDA4NTAxNDU2MDAzMzI1"/>
    </Layout>
  )
}
