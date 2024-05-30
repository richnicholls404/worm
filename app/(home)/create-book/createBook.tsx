"use client";

import { useCallback } from "react";
import { Tldraw, Editor } from "tldraw";

import FullscreenContainer from "@/components/FullscreenContainer";
import Header from "@/components/Header";
import Section, { SectionStyleContainer } from "@/components/Section";
import Footer from "@/components/Footer";

import getTLDrawSettings from "./getTLDrawSettings";

import "./createBook.css";

const { components, overrides, overrideColors } = getTLDrawSettings();
overrideColors();

const BOOK_SIZE_PX = {
  w: 1000,
  h: 1000,
};
const GUTTER_TOP_PX = 0;
const GUTTER_BOTTOM_PX = 100; // 116px with debug bar
const PADDING_PX = 8;

let lastSize: {
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
};
const onResize = (editor: Editor) => {
  const currentSize = editor.getViewportScreenBounds();
  const cameraZoom = editor.getCamera().z;

  // should update camera?
  if (
    !lastSize ||
    lastSize.w !== currentSize.w ||
    lastSize.h !== currentSize.h ||
    lastSize.z !== cameraZoom
  ) {
    // calculate camera position relative to book outline
    const containerHeightPx = currentSize.h;
    const containerWidthPx = currentSize.w;
    const maxBookHeightPx =
      containerHeightPx - GUTTER_TOP_PX - GUTTER_BOTTOM_PX - PADDING_PX * 2;
    const bookWidthPx = (BOOK_SIZE_PX.w / BOOK_SIZE_PX.h) * maxBookHeightPx;
    const newCameraZoom = maxBookHeightPx / BOOK_SIZE_PX.h;

    // set camera
    editor.setCamera(
      {
        x: (containerWidthPx - bookWidthPx) / 2 / newCameraZoom,
        y: (GUTTER_TOP_PX + PADDING_PX) / newCameraZoom,
        z: newCameraZoom,
      },
      { duration: 0 }
    );

    // update last size
    lastSize = {
      ...currentSize,
      z: newCameraZoom,
    };
  }
};

export default function CreateBook() {
  const handleMount = useCallback((editor: Editor) => {
    console.log("editor mounted", editor);

    // disable camera movement
    editor.updateInstanceState({ canMoveCamera: false });

    // listen for changes to the size of the instance
    editor.store.listen(({ changes, ...rest }) => {
      //   console.log("editor.store.listen", { changes, rest });

      // new page added
      const newPageAdded = Object.values(changes.added).find(
        ({ typeName }) => typeName === "page"
      );
      if (newPageAdded) {
        onResize(editor);
      }

      // instance change (size change)
      // @ts-ignore
      const instanceChanged = changes.updated["instance:instance"];
      if (instanceChanged) {
        onResize(editor);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <SectionStyleContainer bgColor="light">
        <FullscreenContainer>
          <Section
            title="Create book"
            subtitle="Creative people"
            bgColor="light"
          >
            <div
              style={{
                height: "75vh",
              }}
            >
              <Tldraw
                onMount={handleMount}
                maxAssetSize={10000000}
                components={components}
                overrides={overrides}
                forceMobile
              />
            </div>
          </Section>
        </FullscreenContainer>
      </SectionStyleContainer>

      <Footer />
    </div>
  );
}
