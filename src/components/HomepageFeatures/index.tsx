import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Travel",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Some of the best places to travel to in the world. You can find the best
        travel
      </>
    ),
  },
  {
    title: "Coding",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Inspire yourself with the best coding practices and tutorials.</>
    ),
  },
  {
    title: "Make cool stuff",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Let make cool stuff with the latest technologies and trends.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text-center">
        <Heading as="h3" className="font-bold">
          {title}
        </Heading>
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
