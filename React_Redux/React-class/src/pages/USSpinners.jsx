import { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const USSpinners = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleCancel = () => {
    setIsSubmitting(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="me-2"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Submitting
          </>
        ) : (
          "Click to Submit"
        )}
      </Button>

      <Button
        variant="danger"
        className="me-2"
        disabled={!isSubmitting}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </div>
  );
};

export default USSpinners;
