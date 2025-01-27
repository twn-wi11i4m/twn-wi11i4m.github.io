import React from "react";
import { Container } from "react-bootstrap";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div class="copyright py-4 text-center text-white">
      <Container>
        <small>© {currentYear} TWN-wi11i4m. All Rights Reserved</small>
      </Container>
    </div>
  );
};
export default Copyright;
