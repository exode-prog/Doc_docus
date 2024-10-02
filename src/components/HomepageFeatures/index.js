import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dans un monde de reseau',
    Svg: require('@site/static/img/reseaux.svg').default,
    description: (
      <>
        
        Le reseau informatique incontournable. 
      </>
    ),
  },
  {
    title: 'Dans le monde de DEVOPS ',
    Svg: require('@site/static/img/dev.svg').default,
    description: (
      <>Developper des competences avancees dans le devops en metrisant les micro-services.
      </>
    ),
  },
  {
    title: 'La cybersecurite ',
    Svg: require('@site/static/img/cyb.svg').default,
    description: (
      <>Elle est cruciale, tout doit etre sécurisé.
      </>
    ),
  },
  {
    title: 'Etre dans le monde du Web',
    Svg: require('@site/static/img/web.svg').default,
    description: (
      <>
        Le service important pour la communication numerique.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
