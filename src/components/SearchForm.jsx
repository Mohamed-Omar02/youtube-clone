import {css} from "@emotion/react";
import {Form} from "react-router-dom";
import {Search} from "@mui/icons-material";

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
    > svg {
      color: #878282;
      width: 40px;
      height: auto;
    }
  }
`;

const SearchForm = () => {
  return (
    <div className="search-bar" css={styles}>
      <Form>
        <input type="text" placeholder="Search..." />
        <a className="submit">
          <Search titleAccess="search" />
        </a>
      </Form>
    </div>
  );
};

export default SearchForm;
