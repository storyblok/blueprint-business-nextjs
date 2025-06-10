import * as React from "react";

export type CardsViewProps = {
  content: CardsContent;
};
import type { CardsContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";
import CardView from "./Card";
import RichTextView from "./RichText";

function CardsView(props: CardsViewProps) {
  return (
    <div
      className="self-stretch px-5 py-10 md:px-20 md:py-24 bg-neutral-100 items-center flex flex-col"
      {...editableAttributes(props.content)}
    >
      <div className="max-w-6xl flex flex-col gap-10">
        <div className="self-stretch flex-1 inline-flex flex-col justify-center items-start gap-2">
          <RichTextView doc={props.content.description} />
        </div>
        <div className="self-stretch flex justify-start items-stretch gap-4 md:gap-6 flex-col md:flex-row">
          {props.content.cards?.map((card) => (
            <CardView
              className="flex-1 self-stretch"
              key={card._uid}
              content={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsView;
