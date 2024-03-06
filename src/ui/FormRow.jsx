import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormRow = ({ label, children, error }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      {children}
      {error && (
        <p className="text-danger">
          <small>{error}</small>
        </p>
      )}
    </Form.Group>
  );
};

FormRow.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
};

export default FormRow;
