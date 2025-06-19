import * as React from "react";

export type ContentViewProps = {
  content: Content;
};

/*
 * NOTE: when expressing conditionals with JSX or directives, TypeScript cannot infer the types. This is why we assert the type, even though it's technically incorrect. * Signal-based frameworks like Solid.js and Mitosis are simply incompatible with TypeScript in conditionals. */ import type {
  CardsContent,
  Content,
  HeroContent,
  PageContent,
  TestimonialContent,
  TestimonialsContent,
  TabsContent,
  TeamMembersContent,
} from "../content";
import TeamMembersView from "./TeamMembers";
import PageView from "./PageView";
import TestimonialsView from "./TestimonialsView";
import TestimonialView from "./TestimonialView";
import CardsView from "./Cards";
import HeroView from "./Hero";
import TabsView from "./TabsView";
function ContentView(props: ContentViewProps) {
  return (
    <>
      {props.content.component === "page" ? (
        <PageView content={props.content as PageContent} />
      ) : null}{" "}
      {props.content.component === "testimonials" ? (
        <TestimonialsView content={props.content as TestimonialsContent} />
      ) : null}{" "}
      {props.content.component === "testimonial" ? (
        <TestimonialView content={props.content as TestimonialContent} />
      ) : null}{" "}
      {props.content.component === "cards" ? (
        <CardsView content={props.content as CardsContent} />
      ) : null}{" "}
      {props.content.component === "hero" ? (
        <HeroView content={props.content as HeroContent} />
      ) : null}{" "}
      {props.content.component === "tabs" ? (
        <TabsView content={props.content as TabsContent} />
      ) : null}{" "}
      {props.content.component === "teamMembers" ? (
        <TeamMembersView content={props.content as TeamMembersContent} />
      ) : null}
    </>
  );
}
export default ContentView;
