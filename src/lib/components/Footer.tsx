import * as React from "react";

export type FooterViewProps = {
  className?: string;
};

function FooterView(props: FooterViewProps) {
  return (
    <div
      className={`self-stretch px-20 pt-20 pb-10 bg-stone-900 inline-flex flex-col justify-center items-center gap-12 overflow-hidden ${props.className}`}
    >
      <div className="self-stretch inline-flex justify-start items-center gap-2.5">
        <div className="w-[577px] flex justify-start items-center gap-1 flex-wrap content-center">
          <div className="flex-1 justify-start text-white text-5xl font-extrabold font-['Inter'] leading-[62px]">
            Let’s make something cool together
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-between items-start">
        <div className="w-[453.38px] inline-flex flex-col justify-start items-start gap-10">
          <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-relaxed">
            80,000 + developers & marketers use Storyblok&apos;s CMS to deliver
            powerful content experiences on any frontend: Websites, eCommerce,
            mobile apps, AR/VR or voice content
          </div>
          <div className="w-5 h-4 relative overflow-hidden">
            <div className="w-1 h-3 left-[0.26px] top-[5.65px] absolute bg-white" />
            <div className="w-[4.93px] h-1 left-0 top-0 absolute bg-white" />
            <div className="w-3.5 h-3 left-[7.07px] top-[5.38px] absolute bg-white" />
          </div>
          <div className="w-5 h-3.5 relative overflow-hidden">
            <div className="w-5 h-3.5 left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-7 h-4 relative overflow-hidden">
            <div className="w-7 h-4 left-0 top-0 absolute bg-white" />
          </div>
        </div>
        <div className="flex justify-start items-start gap-28">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-white text-xl font-semibold font-['Inter'] leading-7">
              Learn more
            </div>
            <div className="self-stretch justify-start text-green-300 text-base font-medium font-['Inter'] leading-snug">
              Home
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Services
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              About
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Blog
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Get in touch
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-white text-xl font-semibold font-['Inter'] leading-7">
              Service
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Brand
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Strategy
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Website
            </div>
            <div className="justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Marketing
            </div>
            <div className="justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Design
            </div>
          </div>
          <div className="w-44 inline-flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-white text-xl font-semibold font-['Inter'] leading-7">
              Resources
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Enterprise
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Case Studies
            </div>
            <div className="self-stretch justify-start text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Legal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterView;
