import { Video } from '../../shared/Video';

interface Props {
  videoItem: Video;
}

const AdminVideoListItem = ({ videoItem }: Props) => {
  return <>{videoItem.title_en}</>;
};

export default AdminVideoListItem;
