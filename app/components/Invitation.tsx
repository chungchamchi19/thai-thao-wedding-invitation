"use client";

import { useEffect } from "react";

import { guest } from "../js/app/guest/guest";
import Progress from "./Progress";
import Welcome from "./Welcome";
import ImageModal from "./ImageModal";
import ControlButtons from "./ControlButtons";
import Content from "./Content";

export default function Invitation({ name }: { name: string }) {
  useEffect(() => {
    ((w) => {
      w.undangan = guest.init();
    })(window);
  }, []);

  return (
    <>
      <Progress name={name}></Progress>
      <Welcome name={name}></Welcome>
      <Content name={name}></Content>
      <ImageModal></ImageModal>
      <ControlButtons></ControlButtons>
    </>
  );
}
