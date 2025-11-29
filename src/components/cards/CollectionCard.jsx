// src/components/cards/CollectionCard.jsx
import "./CollectionCard/CollectionCard.scss";

function CollectionCard({ collection }) {
  return (
    <article className="collection-card">
      <div className="collection-card__covers">
        {collection.coverStack.map((src, index) => (
          <div
            key={src}
            className={`collection-card__cover collection-card__cover--${index}`}
          >
            <img src={src} alt={collection.title} />
          </div>
        ))}
      </div>
      <div className="collection-card__body">
        <h3 className="collection-card__title">{collection.title}</h3>
        <p className="collection-card__description">
          {collection.description}
        </p>
        <button type="button" className="collection-card__cta">
          View collection
        </button>
      </div>
    </article>
  );
}

export default CollectionCard;
