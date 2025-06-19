import * as React from "react";

export type TestimonialsViewProps = {
  content: TestimonialsContent;
};
import { ContentView } from ".";
import type { TestimonialsContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";

function TestimonialsView(props: TestimonialsViewProps) {
  return (
    <div
      className="flex flex-col items-center self-stretch gap-[60px] px-5 pt-[60px] pb-[100px] bg-neutral-100 sm:gap-[60px] sm:px-20 sm:pt-[60px] sm:pb-[100px]"
      {...editableAttributes(props.content)}
    >
      <div className="flex flex-col gap-2 sm:gap-4">
        <h2 className="flex-1 text-center text-3xl leading-[38px] tracking-[-0.3px] font-extrabold text-[#1F1F1F] font-inter       sm:text-[60px] sm:leading-[72px] sm:tracking-[-0.6px]">
          {props.content.title}
        </h2>
        <p className="self-stretch text-center text-base leading-6 text-[#44474A] font-inter font-normal       sm:text-[18px] sm:leading-[28px]">
          {props.content.description}
        </p>
      </div>
      <div className="self-stretch flex justify-start items-stretch gap-4 md:gap-6 flex-col md:flex-row">
        {props.content.testimonials?.map((testimonial, index) => (
          <ContentView content={testimonial} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsView;
