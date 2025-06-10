"use client";
import * as React from "react";
import { useState } from "react";

export type TabsViewProps = {
  content: TabsContent;
};
import type { TabsContent } from "../content";
import { ContentView, RichTextView } from "./index";
import { editableAttributes } from "@storyblok/preview-bridge";

function TabsView(props: TabsViewProps) {
  const [currentTabUid, setCurrentTabUid] = useState(
    () => props.content.tabs[0]?._uid
  );

  return (
    <div
      className="self-stretch px-20 py-24 bg-white inline-flex flex-col justify-start items-center gap-14"
      {...editableAttributes(props.content)}
    >
      <div className="self-stretch flex flex-col justify-start items-center gap-2">
        <RichTextView doc={props.content.description} />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <div className="self-stretch p-1 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-900 inline-flex justify-start items-center gap-2">
          {props.content.tabs?.map((tab) => (
            <button
              key={tab._uid}
              {...editableAttributes(tab)}
              onClick={(_event) => setCurrentTabUid(tab._uid)}
              className={`flex-1 py-4 ${
                currentTabUid === tab._uid
                  ? "bg-stone-800 text-white"
                  : "bg-transparent text-stone-800 "
              } rounded-lg flex justify-center items-center gap-0.5`}
            >
              <div className="justify-center  text-base font-bold font-['Inter'] leading-snug">
                {tab.title}
              </div>
            </button>
          ))}
        </div>
        {props.content.tabs
          .find((tab) => tab._uid === currentTabUid)
          ?.content?.map((content) => (
            <div className="rounded-3xl overflow-hidden" key={content._uid}>
              <ContentView content={content} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default TabsView;
