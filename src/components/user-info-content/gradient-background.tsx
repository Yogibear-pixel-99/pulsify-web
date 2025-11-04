import { useEffect } from "react";

export default function GradientBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const scroll =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const shift = Math.sin(scroll * Math.PI);

      document.body.style.background = `linear-gradient(
        135deg,
        hsl(${270 + shift * 20}, 70%, 35%),
        hsl(${330 + shift * 15}, 60%, 45%),
        hsl(${210 + shift * 10}, 55%, 40%)
      )`;
      document.body.style.backgroundAttachment = "fixed";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
