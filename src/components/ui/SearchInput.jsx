// src/components/ui/SearchInput.jsx
import "./SearchInput/SearchInput.scss";

function SearchInput({ value, onChange, placeholder = "Search games..." }) {
  return (
    <div className="search-input">
      <div className="search-input__icon">
        <span className="search-input__icon-circle" />
      </div>
      <input
        className="search-input__field"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
