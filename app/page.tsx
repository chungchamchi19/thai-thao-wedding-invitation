"use client";

import Welcome from "./components/Welcome";
import Content from "./components/Content";
import { guest } from "./js/app/guest/guest";
import { useEffect } from "react";
import ImageModal from "./components/ImageModal";
import Progress from "./components/Progress";
import ControlButtons from "./components/ControlButtons";
import { Suspense } from "react";

export default function Home() {
  useEffect(() => {
    ((w) => {
      w.undangan = guest.init();
    })(window);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Progress></Progress>
      <Welcome></Welcome>
      <Content></Content>
      <ImageModal></ImageModal>
      <ControlButtons></ControlButtons>
    </Suspense>
  );
}
