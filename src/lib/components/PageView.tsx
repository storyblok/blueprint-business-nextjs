import * as React from "react";

export type PageViewProps = {
  content: PageContent;
};
import { AppBarView, ContentView, FooterView } from ".";
import type { PageContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";

function PageView(props: PageViewProps) {
  return (
    <>
      <div className="div-45b118fa" {...editableAttributes(props.content)}>
        <AppBarView />
        {props.content.body?.map((content, index) => (
          <ContentView content={content} key={index} />
        ))}
        <FooterView />
      </div>

      <style>{`.div-45b118fa {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}`}</style>
    </>
  );
}

export default PageView;
