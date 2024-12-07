import Head from "next/head";
import { Card } from "@kita/components/molecules/Card";
import { Icon } from "@kita/components/atoms/Icon";
import { defaultStoryList } from "@kita/components/molecules/Card/mockdata";
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
      <div>
        <main>
          <aside className={styles.aside}>
            <Card
              theme={Card.Theme.dark}
              header={
                <>
                  <h4>Lesson 3: Morse Code</h4> <Icon name="plus" />
                </>
              }
              body={<IconListGroup list={defaultStoryList} />}
              borderRadiusSize={Card.BorderRadiusSize.small}
            />
          </aside>
        </main>
      </div>
    </>
  );
}
