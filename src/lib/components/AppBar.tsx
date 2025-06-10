import * as React from "react";

function AppBarView(props: any) {
  return (
    <>
      <div className="div-38aceef4">
        <div className="div-38aceef4-2">
          <div className="div-38aceef4-3" />
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="22.7754"
              y="-0.858398"
              width="23.8097"
              height="23.8097"
              rx="3.73071"
              transform="rotate(73.0511 22.7754 -0.858398)"
              fill="#1F1F1F"
            />
          </svg>
          <div className="div-38aceef4-4">BrightStart</div>
        </div>
        <div className="div-38aceef4-5">
          <div className="div-38aceef4-6">
            <a className="a-38aceef4">Home</a>
            <a className="a-38aceef4">Services</a>
            <a className="a-38aceef4">About</a>
            <a className="a-38aceef4">Blog</a>
          </div>
          <button className="button-38aceef4">Get in touch</button>
        </div>
      </div>

      <style>{`.div-38aceef4 {
  display: flex;
  padding: 32px 80px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--icon-darkness, #000);
}.div-38aceef4-2 {
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
}.div-38aceef4-3 {
  display: flex;
  align-items: center;
  gap: 6px;
}.div-38aceef4-4 {
  color: #1F1F1F;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.42px;
}.div-38aceef4-5 {
  display: flex;
  align-items: center;
  gap: 24px;
}.div-38aceef4-6 {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl, 16px);
}.a-38aceef4 {
  color: #1F1F1F;
  font-family: Inter;
  font-size: var(--body-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: var(--letter_spacing-normal, 0px);
}.button-38aceef4 {
  display: flex;
  padding: var(--spacing-base, 8px) var(--spacing-xl, 16px);
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  border-radius: var(--unit-base, 8px);
  opacity: var(--level-none, 1);
  background: #80EFAC;
  align-self: stretch;
  color: #1F1F1F;
  text-align: right;
  font-family: Inter;
  font-size: var(--size-base, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: 140% /* 19.6px */;
  letter-spacing: var(--letter_spacing-normal, 0px);
}`}</style>
    </>
  );
}

export default AppBarView;
