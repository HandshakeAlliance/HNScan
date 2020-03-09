import React, { Suspense } from "react";
import styled from "styled-components";
import { Card, Row, Col } from "@urkellabs/ucl";

// Containers
import DailyDifficulty from "containers/charts/DailyDifficulty";
import DailyTransactions from "containers/charts/DailyTransactions";
import TotalSupply from "containers/charts/TotalSupply";
import TotalTransactions from "containers/charts/TotalTransactions";
import TotalBurned from "containers/charts/TotalBurned";

const ChartsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CustomCol = styled(Col)`
  height: 250px;
  /* margin-top: 48px; */
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  position: relative;
  transition: transform 0.5s ease-in;

  * {
    width: 100%;
  }

  /* &:hover {
    cursor: pointer;
    transform: scale(1.01);
  } */
`;

// This container will block any interactions on the immediate graph below it,
// ensuring that we don't get tooltips from these graphs
// @smell, there's probably a better way to do this...
const InteractonBlocker = styled.div`
  /* cursor: pointer; */
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`;

//@todo would be cool to link "source" like Etherscan does, but link it to our API docs when we have them.
//@todo right now we default to difficulty for the "url"/charts -> I think we can in the future make this a lander for charts, rather than just default to difficulty similar to etherscan. Allow people to pick it out..

export default function Charts() {
  return (
    <>
      <ChartsWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Card title="Market Data">
            <Row>
              <CustomCol mobile={12} desktop={4}>
                <InteractonBlocker />
                <TotalSupply />
              </CustomCol>
              <CustomCol mobile={12} desktop={4}>
                <InteractonBlocker />
                <TotalBurned />
              </CustomCol>
            </Row>
          </Card>
          <Card title="Chain Data">
            <Row>
              <CustomCol mobile={12} desktop={4}>
                <InteractonBlocker />
                <DailyDifficulty />
              </CustomCol>
              <CustomCol mobile={12} desktop={4}>
                <InteractonBlocker />
                <DailyTransactions />
              </CustomCol>
              <CustomCol mobile={12} desktop={4}>
                <InteractonBlocker />
                <TotalTransactions />
              </CustomCol>
            </Row>
          </Card>
        </Suspense>
      </ChartsWrapper>
    </>
  );
}
