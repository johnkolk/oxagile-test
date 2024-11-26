import { FilterItemType, FilterType } from "@/types";
import { cn } from "@/utils/utils";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface Props {
  item: FilterType;
  isActive: boolean;
  onPress: (item: FilterItemType) => void;
}

const FilterItem: React.FC<Props> = ({ item, onPress, isActive }: Props) => {
  const { ref, focused } = useFocusable({ onEnterPress: () => onPress(id) });
  const { id, label } = item;

  const onClick = () => {
    onPress(id);
  };

  const className = cn([
    "transition-transform cursor-pointer text-[20px] text-gray-500 rounded-xl px-8 py-3 transition-all hover:text-white",
    {
      "text-white": focused || isActive,
    },
    {
      "bg-gray-900": isActive,
    },
  ]);

  return (
    <div ref={ref} className={className} onClick={onClick}>
      {label}
    </div>
  );
};

export default FilterItem;
