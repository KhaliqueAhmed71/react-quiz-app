import React from "react";
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import GalleryPageContainer from "../components/GalleryPageContainer";

export default function GalleryPage() {
  return (
    <div>
      <Header
        PageName={"Gallery Page"}
        PageDetail={"Home / Gallery Page"}
        Honed={"Food Gallery"}
      />
      <GalleryPageContainer />

    </div>
  );
}
