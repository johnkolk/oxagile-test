import { FilterItemType, FilterType } from "@/types";
import cn from "clsx";

interface Props {
  item: FilterType;
  isActive: boolean;
  onPress: (item: FilterItemType) => void;
}

const FilterItem: React.FC<Props> = ({ item, onPress, isActive }: Props) => {
  const { id, label } = item;

  const onClick = () => {
    onPress(id);
  };

  const className = cn([
    "text-[20px] hover:scale-130 hover:font-bold transition-colors cursor-pointer",
    {
      ["scale-120 font-bold"]: isActive,
    },
  ]);

  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
};

export default FilterItem;
