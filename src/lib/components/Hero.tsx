import * as React from "react";

export type HeroViewProps = {
  content: HeroContent;
};
import type { HeroContent } from "../content";
import { RichTextView } from ".";
import { editableAttributes } from "@storyblok/preview-bridge";
const colorMapping: Record<HeroContent["backgroundColor"], string> = {
  beige: "bg-beige",
  white: "bg-white",
  grey: "bg-grey",
};
const rootAlignment = (content: HeroContent): string => {
  if (!content.image) {
    return "flex flex-col md:flex-col";
  }
  switch (content.textAlignment) {
    case "left":
      return "flex flex-col md:flex-row";
    case "right":
      return "flex flex-col md:flex-row-reverse";
    case "center":
      return "flex flex-col md:flex-col";
  }
};
const textAlignment = (content: HeroContent): string => {
  if (!content.image) {
    return "items-center";
  }
  switch (content.textAlignment) {
    case "left":
    case "right":
      return "items-start";
    case "center":
      return "items-center";
  }
};

function Hero(props: HeroViewProps) {
  return (
    <div
      {...editableAttributes(props.content)}
      className={`w-full ${colorMapping[props.content.backgroundColor]} ${
        props.content.imagePadding ? "p-10" : "p-0"
      } self-stretch items-stretch ${rootAlignment(
        props.content
      )} flex-wrap justify-between items-center`}
    >
      <div
        className={`flex-1 p-20 inline-flex flex-col justify-start gap-6 ${textAlignment(
          props.content
        )}`}
      >
        <RichTextView doc={props.content.description} />
      </div>
      {props.content.image ? (
        <img
          src={props.content.image?.filename}
          alt={props.content.image?.alt}
          className={`min-w-[50%] overflow-hidden flex-1 ${
            props.content.imagePadding
              ? "rounded-xl max-h-[800px] min-h-[600px]"
              : "rounded-none max-h-[100%] min-h-[100%]"
          } object-cover`}
        />
      ) : null}
    </div>
  );
}

export default Hero;
