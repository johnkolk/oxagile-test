import { cn } from "@/utils/utils";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

type Props = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ title, onPress }: Props) => {
  const { ref, focused } = useFocusable({ onEnterPress: onPress });

  const className = cn([
    "transition-transform cursor-pointer text-[20px] text-gray-300 rounded-xl px-8 py-3 transition-all hover:text-white",
    {
      "opacity-1 text-white bg-gray-900": focused,
    },
  ]);

  return (
    <button ref={ref} className={className} onClick={onPress}>
      {title}
    </button>
  );
};

export default Button;
