import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormRow = ({ label, children }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      {children}
    </Form.Group>
  );
};

FormRow.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FormRow;
