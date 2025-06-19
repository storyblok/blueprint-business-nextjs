import * as React from "react";

export type PageViewProps = {
  content: PageContent;
};
import { AppBarView, ContentView, FooterView } from ".";
import type { PageContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";

function PageView(props: PageViewProps) {
  return (
    <div
      className="flex flex-col items-stretch"
      {...editableAttributes(props.content)}
    >
      <AppBarView />
      {props.content.body?.map((content, index) => (
        <ContentView content={content} key={index} />
      ))}
      <FooterView />
    </div>
  );
}

export default PageView;
