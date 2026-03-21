import { useEffect, useRef } from "react";

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const onMove = ({ clientX: x, clientY: y }) => {
      if (dot.current) {
        dot.current.style.left = x + "px";
        dot.current.style.top = y + "px";
      }
      if (ring.current) {
        ring.current.style.left = x + "px";
        ring.current.style.top = y + "px";
      }
    };
    const onEnter = ({ target }) => {
      if (
        target.closest(
          "a, button, .service-row, .work-item, .testi-card, .contact__channel",
        )
      ) {
        ring.current?.classList.add("active");
      }
    };
    const onLeave = () => ring.current?.classList.remove("active");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}

export default Cursor;
