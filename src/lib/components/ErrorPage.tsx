import * as React from "react";

export type ErrorPageProps = {
  className?: string;
};
import { AppBarView, FooterView } from "./index";

function ErrorPage(props: ErrorPageProps) {
  return (
    <div
      className={`flex flex-col items-stretch min-h-screen ${
        props.className ?? ""
      }`}
    >
      <AppBarView />
      <div className="flex-1 self-stretch px-20 pt-24 flex flex-col justify-between items-center gap-12">
        <div className="flex flex-col justify-start items-center gap-6">
          <div className="flex flex-col justify-start items-center gap-2">
            <h1 className="justify-start text-stone-900 text-8xl font-extrabold">
              Uh-oh!
            </h1>
            <h2 className="justify-start text-stone-900 text-2xl font-bold leading-10">
              500 error
            </h2>
            <p className="text-center justify-start text-stone-900 text-lg font-normal leading-7">
              Something went wrong at our end. We are trying to fix the problem.
            </p>
            <p className="text-center justify-start text-stone-900 text-lg font-normal leading-7">
              Please try again at a later stage.
            </p>
          </div>
          <div className="px-6 py-3 bg-black rounded-[10px] flex flex-col justify-start items-center gap-3 overflow-hidden">
            <div className="self-stretch justify-center text-white text-lg font-semibold leading-relaxed">
              Back to Home
            </div>
          </div>
        </div>
        <img src="/404.png" className="h-72 object-cover translate-x-[-60px]" />
      </div>
      <FooterView />
    </div>
  );
}

export default ErrorPage;
