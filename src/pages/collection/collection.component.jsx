import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const Collection = ({ match }) => {
  const { id } = useParams();
  const CollectionItem = useSelector((state) => state.shop);
  const previewItems = CollectionItem.filter((item) => item.routeName === id);
  console.log(previewItems);

  return (
    <div className="collection">
      {previewItems.length && (
        <CollectionPreview
          {...previewItems[0]}
          numberOfShow={previewItems[0].items.length}
        />
      )}
    </div>
  );
};

export default Collection;
