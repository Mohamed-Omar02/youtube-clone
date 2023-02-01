import {css} from "@emotion/react";
import {Form, useNavigate} from "react-router-dom";
import {Search} from "@mui/icons-material";
import {useState} from "react";
const styles = css`
  width: 50%;
  margin: 0 auto;

  form {
    flex-basis: 1;
    display: flex;
    .submit {
      padding: 0 10px;
      background-color: #2827279e;
      border: 1px solid #555;
      border-radius: 0 20px 20px 0;
    }
    input {
      color: white;
      width: 100%;
      background-color: transparent;
      border-radius: 20px 0 0 20px;
      border: 1px solid #555;
      padding: 5px;
      padding-left: 20px;
      transition: 0.3s;
      &::placeholder {
        color: #878282;
      }
      &:focus {
        outline: none;
        border-color: #007eff;
      }
    }
  }
  .submit {
    cursor: pointer;
    > svg {
      color: #878282;
      width: 40px;
      height: auto;
    }
  }
`;

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className="search-bar" css={styles}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="submit">
          <Search titleAccess="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
