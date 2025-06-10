import * as React from "react";

export type TestimonialsViewProps = {
  content: TestimonialsContent;
};
import { ContentView } from ".";
import type { TestimonialsContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";

function TestimonialsView(props: TestimonialsViewProps) {
  return (
    <>
      <div className="div-febcf57c" {...editableAttributes(props.content)}>
        <div className="div-febcf57c-2">
          <h2 className="h2-febcf57c">{props.content.title}</h2>
          <p className="p-febcf57c">{props.content.description}</p>
        </div>
        <div className="div-febcf57c-3">
          {props.content.testimonials?.map((testimonial, index) => (
            <ContentView content={testimonial} key={index} />
          ))}
        </div>
      </div>

      <style>{`.div-febcf57c {
  display: flex;
  padding: 60px 80px 100px 80px;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  align-self: stretch;
  background: var(--background-primary, #FFF);
}.div-febcf57c-2 {
  display: flex;
  flex-direction: column;
  gap: 16px;
}.h2-febcf57c {
  flex: 1 0 0;
  color: var(--primary, #1F1F1F);
  text-align: center;
  font-family: Inter;
  font-size: var(--Typography-font-size-font-size-6xl, 60px);
  font-style: normal;
  font-weight: 800;
  line-height: var(--Typography-font-line-height-line-height-6xl, 72px) /* 120% */;
  letter-spacing: -0.6px;
}.p-febcf57c {
  align-self: stretch;
  color: var(--text, #44474A);
  text-align: center;
  font-family: Inter;
  font-size: var(--body-lg, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--line-height-lg, 28px) /* 155.556% */;
}.div-febcf57c-3 {
  display: flex;
  align-items: stretch;
  gap: var(--spacing-2xl, 24px);
  align-self: center;
}`}</style>
    </>
  );
}

export default TestimonialsView;
