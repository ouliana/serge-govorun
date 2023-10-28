import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { ListContainer } from '../adminStyles';
import { Format } from '../../shared/Format';
import FormatListItem from './FormatListItem';

const AdminFormats = () => {
  const [formats, setFormats] = useState<Format[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Format).find();
      setFormats(data);
    })();
  }, []);

  return (
    <ListContainer>
      {formats.map(format => (
        <FormatListItem
          key={format.id}
          item={format}
        />
      ))}
    </ListContainer>
  );
};

export default AdminFormats;
