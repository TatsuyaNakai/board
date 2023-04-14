import React from "react";

import Button from "react-bootstrap/Button";

export default function SubmitButton({ label, disabled = false }) {
	return (
		<Button type="submit" variant="primary" disabled={disabled}>
			{label}
		</Button>
	);
}
