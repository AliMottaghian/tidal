import { Row, Input, Button, Col } from "antd";
import PropTypes from "prop-types";

const SearchInput = ({ onSearchChange, searchBtn, inputEl }) => {
  return (
    <Row>
      <Col md={20} xs={17}>
        <Input
          allowClear
          onChange={onSearchChange}
          placeholder="Search here"
          ref={inputEl}
        />
      </Col>
      <Col xs={4} className="textCenter">
        <Button type="primary" onClick={searchBtn}>
          SEARCH
        </Button>
      </Col>
    </Row>
  );
};
SearchInput.propTypes = {
  onSearchChange: PropTypes.func,
  searchBtn: PropTypes.func,
  inputEl: PropTypes.object,
};
export default SearchInput;
