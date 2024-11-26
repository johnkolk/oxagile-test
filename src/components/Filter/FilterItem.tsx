import { FilterItemType, FilterType } from "@/types";
import { cn } from "@/utils/utils";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface Props {
  item: FilterType;
  isActive: boolean;
  onPress: (item: FilterItemType) => void;
}

const FilterItem: React.FC<Props> = ({ item, onPress, isActive }: Props) => {
  const { ref, focused } = useFocusable();
  const { id, label } = item;

  const onClick = () => {
    onPress(id);
  };

  const className = cn([
    "transition-transform cursor-pointer text-[20px] hover:scale-150",
    {
      "scale-150": focused || isActive,
    },
  ]);

  return (
    <div ref={ref} className={className} onClick={onClick}>
      {label}
    </div>
  );
};

export default FilterItem;
