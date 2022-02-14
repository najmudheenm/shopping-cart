import { useSelector } from "react-redux";

//components
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const Shop = () => {
  const collections = useSelector((state) => state.shop);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
