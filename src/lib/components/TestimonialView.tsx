import * as React from "react";

export type TestimonialViewProps = {
  content: TestimonialContent;
};
import type { TestimonialContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";

function TestimonialView(props: TestimonialViewProps) {
  return (
    <>
      <div className="div-7886804e" {...editableAttributes(props.content)}>
        <p className="p-7886804e">“{props.content.quote}”</p>
        <div className="div-7886804e-2">
          <span className="span-7886804e">{props.content.name}</span>
          <span className="span-7886804e-2">{props.content.title}</span>
        </div>
      </div>

      <style>{`.div-7886804e {
  display: flex;
  padding: var(--spacing-3xl, 48px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-2xl, 24px);
  flex: 1 0 0;
  border-radius: var(--radius-lg, 12px);
  background: var(--background-secondary, #F6F7F8);
}.p-7886804e {
  align-self: stretch;
  color: var(--text-secondary, #5F616E);
  font-family: Inter;
  font-size: var(--size-xl, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  flex: 1 0 0;
}.div-7886804e-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}.span-7886804e {
  flex: 1 0 0;
  color: #1F1F1F;
  font-family: Inter;
  font-size: var(--size-xl, 20px);
  font-style: normal;
  font-weight: var(--weight-bold, 700);
  line-height: normal;
  letter-spacing: -0.2px;
}.span-7886804e-2 {
  flex: 1 0 0;
  color: #1F1F1F;
  font-family: Inter;
  font-size: var(--size-lg, 16px);
  font-style: normal;
  font-weight: var(--weight-regular, 400);
  line-height: normal;
  letter-spacing: -0.16px;
}`}</style>
    </>
  );
}

export default TestimonialView;
