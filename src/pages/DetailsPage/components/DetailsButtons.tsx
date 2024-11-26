import Button from "@/components/Button/Button";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

type Props = {
  isFavorite: boolean;
  addFavorite: () => void;
  handleBack: () => void;
};

const DetailsButtons: React.FC<Props> = ({
  addFavorite,
  handleBack,
  isFavorite,
}: Props) => {
  const { ref, focusKey, focusSelf } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex gap-4 mt-8">
        <Button
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          onPress={addFavorite}
        />
        <Button title="Back" onPress={handleBack} />
      </div>
    </FocusContext.Provider>
  );
};

export default DetailsButtons;
