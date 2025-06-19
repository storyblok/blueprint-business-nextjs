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
      className={`flex flex-col justify-start items-start gap-4 bg-white rounded-[20px] p-4 sm:p-6 ${props.className}`}
    >
      {props.content.icon ? (
        <img
          className="p-2 w-10 h-10 sm:w-[50px] sm:h-[50px]"
          src={props.content.icon?.filename}
          alt={props.content.icon?.alt}
        />
      ) : null}
      <RichTextView doc={props.content.description} />
    </div>
  );
}

export default CardView;
