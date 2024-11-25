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
    "text-[20px] hover:text-blue-500 transition-colors cursor-pointer",
    {
      ["text-blue-500"]: isActive,
    },
  ]);

  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
};

export default FilterItem;
