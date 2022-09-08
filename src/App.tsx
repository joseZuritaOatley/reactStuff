import React from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

import MetaWiki from "./MetaWiki";
import Calendar from "./Calendar";
import MetaRadio from "./MetaRadio";
import SeedPool from "./SeedPool";

import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "./styles.css";

export type ViewId = "a" | "b" | "c" | "new";

const config = {
};

const APP_MAP: Record<ViewId, string> = {
  a: <MetaWiki />,
  b: <SeedPool />,
  c: <MetaRadio />,
  new: "New Window"
};

export const mosaicWindow = (
  <Mosaic<ViewId>
    className="mosaic-blueprint-theme bp3-dark"
    renderTile={(id, path) => (
      <MosaicWindow<ViewId>
        config={config}
        path={path}
        createNode={() => <Calendar />}
        title={id}
      >
        <div style={{ width: "100%", height: "100%" }}>{APP_MAP[id]}</div>
      </MosaicWindow>
    )}
    initialValue={{
      direction: "row",
      first: "a",
      second: {
        direction: "column",
        first: "b",
        second: "c"
      }
    }}
  />
);

function WindowManager() {
  return mosaicWindow;
}

export default WindowManager;
