import * as React from "react";

export type StatsViewProps = {
  content: StatsContent;
};
import type { StatsContent } from "../content";

function Stats(props: StatsViewProps) {
  return (
    <div className="self-stretch px-20 pt-20 pb-24 inline-flex flex-col justify-start items-start gap-10">
      <div className="justify-start text-stone-900 text-2xl font-extrabold font-['Inter'] leading-10">
        Making an impact with creativity and innovation.
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-6">
        <div className="flex-1 self-stretch p-6 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4">
          <div className="text-center justify-start text-stone-900 text-5xl font-extrabold font-['Inter'] leading-[62px]">
            10+
          </div>
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-stone-900 text-lg font-semibold font-['Inter'] leading-7">
                  Projects completed
                </div>
                <div className="self-stretch justify-start text-stone-900 text-base font-normal font-['Inter'] leading-7">
                  Turning ideas into reality, one project at a time.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4">
          <div className="text-center justify-start text-stone-900 text-5xl font-extrabold font-['Inter'] leading-[62px]">
            120+
          </div>
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-stone-900 text-lg font-semibold font-['Inter'] leading-7">
                  Happy clients
                </div>
                <div className="self-stretch justify-start text-stone-900 text-base font-normal font-['Inter'] leading-7">
                  Spreading joy through outstanding service and creativity.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4">
          <div className="text-center justify-start text-stone-900 text-5xl font-extrabold font-['Inter'] leading-[62px]">
            9000+
          </div>
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-stone-900 text-lg font-semibold font-['Inter'] leading-7">
                  Shared coffee chats
                </div>
                <div className="self-stretch justify-start text-stone-900 text-base font-normal font-['Inter'] leading-7">
                  Fueling inspiration and collaboration over great
                  conversations.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 self-stretch p-6 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4">
          <div className="text-center justify-start text-stone-900 text-5xl font-extrabold font-['Inter'] leading-[62px]">
            18
          </div>
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-stone-900 text-lg font-semibold font-['Inter'] leading-7">
                  Ideas brought to life
                </div>
                <div className="self-stretch justify-start text-stone-900 text-base font-normal font-['Inter'] leading-7">
                  Transforming imagination into impactful digital experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
