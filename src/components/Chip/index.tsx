import { ChipItem, SelectedChipItem } from './styles';

interface Params {
  brand: string;
  selected: boolean;
}

const Chip = ({ brand, selected }: Params) => {
  return (
    <>
      {selected ? (
        <SelectedChipItem>{brand}</SelectedChipItem>
      ) : (
        <ChipItem>{brand}</ChipItem>
      )}
    </>
  );
};

export default Chip;
