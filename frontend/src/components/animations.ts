import Styler from "stylefire";
import { animate } from "popmotion";

const customScrollBehavior = (instructions: any) => {
  const [{ el, left }] = instructions;
  const styler = Styler(el);

  animate({
    from: el.scrollLeft,
    to: left,
    type: "spring",
    onUpdate: (left: any) => styler.set("scrollLeft", left)
  });
};

export default customScrollBehavior;
