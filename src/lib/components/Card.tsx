import * as React from "react";

export type CardViewProps = {
  content: CardContent;
  className?: string;
};
import type { CardContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";
import RichTextView from "./RichText";

function CardView(props: CardViewProps) {
  return (
    <div
      {...editableAttributes(props.content)}
      className={`flex flex-col justify-start items-start gap-4 bg-white rounded-[20px] p-6 ${props.className}`}
    >
      {props.content.icon ? (
        <img
          className="p-2 w-[50px] h-[50px]"
          src={props.content.icon?.filename}
          alt={props.content.icon?.alt}
        />
      ) : null}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <RichTextView doc={props.content.description} />
      </div>
    </div>
  );
}

export default CardView;
