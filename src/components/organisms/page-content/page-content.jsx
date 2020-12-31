import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function PageContent({ children, docs, bkGradient, bkDark, style, className }) {
  return (
    <>
      <Container style={style} fluid className={`${className} ${(bkGradient) ? 'bk-gradient' : (bkDark) ? 'bk-dark' : ''} pt-4 pb-4`}>
        <Row className={`d-flex ${(docs) ? 'justify-content-center justify-content-lg-start pl-0 pl-lg-4' : 'justify-content-center'}`}>
          <Col xs={12} lg={(docs) ? 12 : 8}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}

