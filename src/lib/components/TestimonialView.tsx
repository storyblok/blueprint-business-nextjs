import * as React from "react";

export type TestimonialViewProps = {
  content: TestimonialContent;
};
import type { TestimonialContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";
import { backgroundColor } from "./backgroundColorClass";

function TestimonialView(props: TestimonialViewProps) {
  return (
    <div
      className="flex flex-col items-start gap-6 p-12 flex-1 rounded-[12px] bg-white"
      {...editableAttributes(props.content)}
    >
      <p className="self-stretch justify-start text-stone-900 text-base font-normal font-['Inter'] leading-normal">
        “{props.content.quote}”
      </p>
      <div className="self-stretch flex gap-5">
        {props.content.image ? (
          <div
            className={`aspect-[1/1] shrink-0 w-11 h-11 overflow-hidden rounded-full ${backgroundColor(
              props.content.imageBackgroundColor
            )}`}
          >
            <img
              className="object-cover w-full h-full "
              src={props.content.image?.filename}
              alt={props.content.image?.alt}
            />
          </div>
        ) : null}
        <div className="flex flex-col">
          <div className="justify-start text-stone-900 text-base font-bold font-['Inter']">
            {props.content.name}
          </div>
          <div className="justify-start text-stone-900 text-base font-normal font-['Inter'] leading-normal">
            {props.content.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialView;
