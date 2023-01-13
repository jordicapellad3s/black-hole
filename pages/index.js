import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Tiptap from "@/components/Tiptap";
import MenuBar from "@/components/MenuBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Black Hole</title>
        <meta
          name="description"
          content="Site to type any thoughts, links, tweets and conversations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://emojicdn.elk.sh/🕳️" rel="icon" />
      </Head>
      <main className="p-5">
        <Tiptap />
      </main>
    </>
  );
}
