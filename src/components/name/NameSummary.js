import React from "react";
import { Row, Col, Card } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";

// Components
import StackedData from "components/shared/StackedData";

function timeToNextState(blocks) {
  if (blocks) {
    let today = new Date();
    let timeLeft = new Date(
      today.getTime() + (blocks / 144) * 24 * 3600 * 1000
    );
    return (
      <>
        <span>{blocks}</span> (~<Moment fromNow>{timeLeft}</Moment>)
      </>
    );
  } else {
    return "-";
  }
}

export default function NameSummary({ name }) {
  const { t } = useTranslation();
  return (
    <Card title={t("name_detail.summary")}>
      <Row>
        <Col mobile={12} tablet>
          <StackedData label="name_detail.name" value={name.name} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="name_detail.release_block" value={name.release} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="name_detail.reserved"
            value={name.reserved.toString()}
          />
        </Col>
      </Row>
      <Row>
        <Col mobile={12} tablet>
          <StackedData label="name_detail.state" value={name.state} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="name_detail.blocks_until_next"
            value={timeToNextState(name.blocksUntil)}
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="name_detail.next_state" value={name.nextState} />
        </Col>
      </Row>
    </Card>
  );
}
