import PropTypes from "prop-types";
import { Result, Button } from "antd";

const NotFound = ({ history }) => {
  const backToHome = () => {
    history.replace("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backToHome}>
          Back Home
        </Button>
      }
    />
  );
};

NotFound.propTypes = {
  history: PropTypes.object,
};

export default NotFound;
