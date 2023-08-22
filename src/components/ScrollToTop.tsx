import { useState } from "react";
import { GoChevronUp } from "react-icons/go";

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (!isVisible && window.scrollY > 100) {
      setVisible(true);
    } else if (isVisible && window.scrollY <= 100) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } cursor-pointer fixed bottom-5 right-5 rounded-full p-4 text-xl bg-blue text-white shadow-md`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <GoChevronUp />
    </div>
  );
};

export default ScrollToTop;
