import { memo, ReactNode } from "react";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { cn } from "@/utils/utils";

interface PageProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: PageProps) => {
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className={cn("container mx-auto", className)}>
        {children}
      </div>
    </FocusContext.Provider>
  );
};

export default memo(Layout);
