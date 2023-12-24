import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

const Scroll = () => {
  return (
    <div>
      {/*<div> <img width="50" height="50" class="lazyloading-hidden lazyloaded" data-src="https://cdn.dribbble.com/assets/icon-backtotop-d9d209c36a169637612a8fe4a1f15ab9e5763a20dbe5b7706df4e23aadf6052e.png" alt="Back to top" src="https://cdn.dribbble.com/assets/icon-backtotop-d9d209c36a169637612a8fe4a1f15ab9e5763a20dbe5b7706df4e23aadf6052e.png"></img></div> */}
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      />
    </div>
  );
};
export default Scroll;
