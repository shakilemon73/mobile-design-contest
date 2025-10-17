import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface LargeTitleProps {
  title: string;
  className?: string;
}

export function LargeTitle({ title, className }: LargeTitleProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-10 transition-all duration-300 blur-nav",
        isScrolled
          ? "py-3 border-b border-border"
          : "py-6 border-b border-transparent"
      )}
      style={{ paddingTop: 'max(env(safe-area-inset-top), 0.5rem)' }}
    >
      <h1
        className={cn(
          "transition-all duration-300 px-6",
          isScrolled ? "title-2" : "large-title",
          className
        )}
        data-testid="large-title"
      >
        {title}
      </h1>
    </div>
  );
}
