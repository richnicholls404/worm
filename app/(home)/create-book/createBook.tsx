"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

type ImageData = {
  type: "image";
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type TextData = {
  type: "text";
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type PageData = {
  blocks: (TextData | ImageData)[];
  showPageNumber: boolean;
};

interface BookData {
  title: string | undefined;
  pages: PageData[];
  draft: boolean;
  size: [number, number];
}

const PAGE_PADDING = 100;
const ITEM_PADDING = 50;

const addBlankPage = (): PageData => ({
  blocks: [],
  showPageNumber: true,
});

const addThreeVerticalTextPage = ([
  bookWidth,
  bookHeight,
]: BookData["size"]): PageData => {
  const blockWidth = bookWidth - PAGE_PADDING * 2;
  const blockHeight = (bookHeight - PAGE_PADDING * 2 - ITEM_PADDING * 2) / 3;
  return {
    blocks: [
      {
        type: "text",
        text: "",
        x: PAGE_PADDING,
        y: PAGE_PADDING,
        width: blockWidth,
        height: blockHeight,
      },
      {
        type: "text",
        text: "",
        x: PAGE_PADDING,
        y: blockHeight + PAGE_PADDING + ITEM_PADDING,
        width: blockWidth,
        height: blockHeight,
      },
      {
        type: "text",
        text: "",
        x: PAGE_PADDING,
        y: blockHeight * 2 + PAGE_PADDING + ITEM_PADDING * 2,
        width: blockWidth,
        height: blockHeight,
      },
    ],
    showPageNumber: true,
  };
};

const addCentralTextPage = ([
  bookWidth,
  bookHeight,
]: BookData["size"]): PageData => ({
  blocks: [
    {
      type: "text",
      text: "",
      x: PAGE_PADDING,
      y: PAGE_PADDING,
      width: bookWidth - PAGE_PADDING * 2,
      height: bookHeight - PAGE_PADDING * 2,
    },
  ],
  showPageNumber: true,
});

const addFullImagePage = ([
  bookWidth,
  bookHeight,
]: BookData["size"]): PageData => ({
  blocks: [
    {
      type: "image",
      src: "",
      x: 0,
      y: 0,
      width: bookWidth,
      height: bookHeight,
    },
  ],
  showPageNumber: true,
});

const addTitleAndContentPage = ([
  bookWidth,
  bookHeight,
]: BookData["size"]): PageData => {
  const blockWidth = bookWidth - PAGE_PADDING * 2;
  const titleHeight = 20;
  return {
    blocks: [
      {
        type: "text",
        text: "",
        x: PAGE_PADDING,
        y: PAGE_PADDING,
        width: blockWidth,
        height: titleHeight,
      },
      {
        type: "text",
        text: "",
        x: PAGE_PADDING,
        y: PAGE_PADDING + titleHeight + ITEM_PADDING,
        width: blockWidth,
        height: bookHeight - titleHeight - PAGE_PADDING * 2 - ITEM_PADDING,
      },
    ],
    showPageNumber: true,
  };
};

export default function CreateBook() {
  const bookSize: BookData["size"] = [1000, 1000];
  const bookData: BookData = {
    title: undefined,
    draft: true,
    size: bookSize,
    pages: [
      addTitleAndContentPage(bookSize),
      addThreeVerticalTextPage(bookSize),
      addBlankPage(),
      addCentralTextPage(bookSize),
      addFullImagePage(bookSize),
    ],
  };

  return (
    <div>
      <Header />

      <Section title="Create book" subtitle="Creative people" bgColor="light">
        s
      </Section>

      <Footer />
    </div>
  );
}
