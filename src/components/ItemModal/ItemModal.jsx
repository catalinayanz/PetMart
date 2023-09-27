import ItemDetail from "../ItemDetail/ItemDetail";

const ItemModal = ({ item, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <ItemDetail itemFiltered={item} />
      </div>
    </div>
  );
};

export default ItemModal;