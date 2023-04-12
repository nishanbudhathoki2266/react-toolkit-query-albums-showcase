import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "../store/index";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;

    if (isLoading) {
        content = <Skeleton times={3} />
    }

    else if (error) {
        content = <div>Error loading albums.</div>
    }

    else {
        content = data.map(album => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={album.id} header={header}>
                List of photos in the album
            </ExpandablePanel>
        })
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">
                    Albums for {user.name}
                </h3>
                <Button onClick={handleAddAlbum} loading={results.isLoading}>+ Add Album</Button>
            </div>

            <div>
                {content}
            </div>
        </div>
    )
}
export default AlbumsList