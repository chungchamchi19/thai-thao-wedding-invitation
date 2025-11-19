"use client";

import Welcome from "./components/Welcome";
import Content from "./components/Content";
import { guest } from "./js/app/guest/guest";
import { useEffect } from "react";
import ImageModal from "./components/ImageModal";
import Progress from "./components/Progress";
import ControlButtons from "./components/ControlButtons";
import { Suspense } from "react";
import MetaTags from "./components/MetaTag";

export default function Home({ name }: { name: string }) {
  useEffect(() => {
    ((w) => {
      w.undangan = guest.init();
    })(window);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetaTags></MetaTags>
      <Progress name={name}></Progress>
      <Welcome name={name}></Welcome>
      <Content name={name}></Content>
      <ImageModal></ImageModal>
      <ControlButtons></ControlButtons>
    </Suspense>
  );
}
