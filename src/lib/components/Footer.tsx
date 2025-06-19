import * as React from "react";

export type FooterViewProps = {
  className?: string;
};

function FooterView(props: FooterViewProps) {
  return (
    <div
      className={`self-stretch px-4 pt-10 pb-6 bg-stone-900 flex flex-col justify-center items-center gap-8 overflow-hidden sm:px-10 md:px-20 md:pt-20 md:pb-10 md:gap-12 ${props.className}`}
    >
      <div className="self-stretch flex flex-col justify-start items-center gap-2.5 md:flex-row md:items-center">
        <div className="w-full flex justify-start items-center gap-1 flex-wrap content-center md:w-[577px]">
          <div className="flex-1 text-white text-2xl font-extrabold font-['Inter'] leading-9 md:text-5xl md:leading-[62px]">
            Let’s make something cool together
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        <div className="w-full flex flex-col justify-start items-start gap-6 md:w-[453.38px] md:gap-10">
          <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-relaxed md:text-base">
            80,000 + developers & marketers use Storyblok&apos;s CMS to deliver
            powerful content experiences on any frontend: Websites, eCommerce,
            mobile apps, AR/VR or voice content
          </div>
          <div className="flex gap-3">
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
        </div>
        <div className="flex flex-col gap-8 w-full md:flex-row md:justify-start md:items-start md:gap-28 md:w-auto">
          <div className="inline-flex flex-col justify-start items-start gap-2 md:gap-3.5">
            <div className="text-white text-lg font-semibold font-['Inter'] leading-6 md:text-xl md:leading-7">
              Learn more
            </div>
            <div className="text-green-300 text-base font-medium font-['Inter'] leading-snug">
              Home
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Services
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              About
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Blog
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Get in touch
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-2 md:gap-3.5">
            <div className="text-white text-lg font-semibold font-['Inter'] leading-6 md:text-xl md:leading-7">
              Service
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Brand
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Strategy
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Website
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Marketing
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Design
            </div>
          </div>
          <div className="w-full inline-flex flex-col justify-start items-start gap-2 md:gap-3.5 md:w-44">
            <div className="text-white text-lg font-semibold font-['Inter'] leading-6 md:text-xl md:leading-7">
              Resources
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Enterprise
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Case Studies
            </div>
            <div className="text-white/70 text-base font-medium font-['Inter'] leading-snug">
              Legal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterView;
