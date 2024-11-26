import { FilterItemType, FilterType } from "@/types";
import { cn } from "@/utils/utils";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface Props {
  item: FilterType;
  isActive: boolean;
  count?: number;
  onPress: (item: FilterItemType) => void;
}

const FilterItem: React.FC<Props> = ({
  item,
  onPress,
  isActive,
  count,
}: Props) => {
  const { ref, focused } = useFocusable({ onEnterPress: () => onPress(id) });
  const { id, label } = item;

  const onClick = () => {
    onPress(id);
  };

  const className = cn([
    "transition-transform relative cursor-pointer text-[20px] text-gray-500 rounded-xl px-8 py-3 transition-all hover:text-white",
    {
      "text-white": focused || isActive,
    },
    {
      "bg-gray-900": isActive,
    },
  ]);

  console.log("count ", count);

  return (
    <div ref={ref} className={className} onClick={onClick}>
      {count !== undefined && count > 0 && (
        <div className=" absolute -top-1 -right-1 rounded-full text-[15px] text-white px-2 bg-slate-700">
          {count}
        </div>
      )}
      {label}
    </div>
  );
};

export default FilterItem;
