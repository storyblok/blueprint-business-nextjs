import * as React from "react";

export type TeamMembersViewProps = {
  content: TeamMembersContent;
};
import type { TeamMembersContent } from "../content";
import { editableAttributes } from "@storyblok/preview-bridge";
import TeamMemberView from "./TeamMember";
import RichTextView from "./RichText";

function TeamMembersView(props: TeamMembersViewProps) {
  return (
    <div
      className="self-stretch px-5 py-10 md:px-20 md:py-24 items-center flex flex-col"
      {...editableAttributes(props.content)}
    >
      <div className="max-w-6xl flex flex-col gap-10">
        <RichTextView doc={props.content.description} />
        <div className="self-stretch flex justify-start items-stretch gap-4 md:gap-6 flex-col md:flex-row">
          {props.content.teamMembers?.map((member) => (
            <TeamMemberView
              key={member.content._uid}
              content={member.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMembersView;
