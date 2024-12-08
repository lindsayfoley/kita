import Head from "next/head";
import { Card } from "@kita/components/molecules/Card";
import { Icon } from "@kita/components/atoms/Icon";
import {
  defaultStoryList,
  subMenuList,
} from "@kita/components/molecules/Card/mockdata";
import { IconListGroup } from "@kita/components/molecules/IconListGroup";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kita - Test</title>
        <meta name="description" content="Lindsay's Kita test submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.container}>
        <aside className={styles.aside}>
          <Card
            header={
              <>
                <h4>Lesson 3: Morse Code</h4> <Icon name="plus" />
              </>
            }
            body={<IconListGroup list={defaultStoryList} />}
          />
          <Card
            theme={Card.Theme.highlight}
            header={
              <>
                <h4>Student Projects</h4> <Icon name="magnifyingGlass" />
              </>
            }
            body={<span>No lesson projects</span>}
          />
          <Card
            body={<IconListGroup list={subMenuList} />}
            borderRadiusSize={Card.BorderRadiusSize.small}
          />
        </aside>
        <main className={styles.main}></main>
      </section>
    </>
  );
}
