import React from "react";
import styled from "styled-components";

function OrderList(props) {
  return (
    <>
      <TableStyleT2>
        <Colgroup>
          <col></col>
          <Colgroupstyle />
          <Colgroupstyle />
        </Colgroup>
        <Thead>
          <tr>
            <Th>{props.item.create_timestamp}</Th>
            <Th colSpan="2">
              <A>
                <Span>{props.item.salePrice}원</Span>
                <Spani className="fas fa-chevron-right"></Spani>
              </A>
            </Th>
          </tr>
        </Thead>

        <tbody>
          <tr>
            <Td>
              <ListItem>
                <AreaImg>
                  <ImgBg filename={props.item.filename}></ImgBg>
                </AreaImg>
                <AreaTxt>
                  <ListHead>
                    <Row>
                      <Col>
                        <ColA>{props.item.name}</ColA>
                      </Col>
                      <ColIcon>
                        <ColSpan>발송 완료</ColSpan>
                      </ColIcon>
                    </Row>
                  </ListHead>
                  <ListOptions>
                    <Li>
                      {/* <OptionTxt>
                        웰컴딜 수량 확인 : 1인당 1개 작품만 구매 가능해요
                      </OptionTxt> */}
                      <OptionCount>1개</OptionCount>
                    </Li>
                  </ListOptions>
                </AreaTxt>
              </ListItem>
            </Td>

            <TdControllWow>
              <div>
                <span>{props.item.brandIdx}</span>
              </div>
              <Col5>
                <TdConA>메시지로 문의</TdConA>
              </Col5>
            </TdControllWow>

            <TdControllRow>
              <div>
                <BtnPoint type="button">구매후기 작성</BtnPoint>
              </div>
              <Col5>
                <TdConA>발송 정보 조회</TdConA>
              </Col5>
            </TdControllRow>
          </tr>
        </tbody>
      </TableStyleT2>
    </>
  );
}

const BtnPoint = styled.button`
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
  padding: 6px 12px;
  font-size: 12px;
  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;
  width: 100%;
`;

const TdConA = styled.a`
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
  padding: 6px 12px;
  font-size: 12px;
  color: #333;
  border: 1px solid #ccc;
  background: #fff;
  width: 100%;
`;

const Col5 = styled.div`
  margin-top: 5px;
`;

const TdControllRow = styled.td`
  text-align: center;
  border-left: 1px solid #ccc;
  color: #666;
  border-top: 1px solid #d9d9d9;
  padding: 16px 0;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
`;

const TdControllWow = styled.td`
  word-wrap: break-word;
  text-align: center;
  border-left: 1px solid #ccc;
  color: #666;
  border-top: 1px solid #d9d9d9;
  padding: 16px 0;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
`;

const OptionCount = styled.em`
  position: absolute;
  top: 0;
  right: 0;
`;

const OptionTxt = styled.span`
  float: left;
  display: block;
  width: 445px;
  min-height: 16px;
  margin-right: 20px;
  width: auto;
  text-decoration: none;
`;

const Li = styled.li`
  overflow: hidden;
  margin-top: 3px;
  position: relative;
`;

const ListOptions = styled.ul`
  margin-bottom: 0;
`;

const ColSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  -webkit-border-radius: 9px;
  border-radius: 9px;
  margin-left: 8px;
  line-height: 1.9;
  font-size: 9px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #00aa9b;
  color: #00aa9b;
  margin-left: 2px;
  margin-top: -7px;
`;

const ColIcon = styled.div`
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-sizing: border-box;
  padding: 4px;
  vertical-align: middle;
  display: table-cell;
`;

const ColA = styled.a`
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Col = styled.div`
  display: table-cell;
  max-width: 660px;
`;

const Row = styled.div`
  display: table;
  vertical-align: middle;
`;

const ListHead = styled.div`
  margin: 0 0 8px 0;
  margin-bottom: 0;
`;

const AreaTxt = styled.div`
  margin-left: 8px;
  float: none;
  display: table-cell;
  width: auto;
  padding-left: 8px;
  padding-right: 20px;
  vertical-align: middle;
  overflow: hidden;
`;

const ImgBg = styled.div`
  margin-left: 16px;
  display: inline-block;
  width: 64px;
  height: 64px;
  background: #efefef;
  vertical-align: top;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-image: url("https://backend.alittlevanilla.kro.kr/product/display?fileName=${(
    props
  ) => props.filename}");
`;

const AreaImg = styled.div`
  margin-left: 0;
  float: none;
  display: table-cell;
  width: 50px;
  vertical-align: top;
`;

const ListItem = styled.div`
  padding: 16px 0;
  overflow: hidden;
  position: relative;
  display: table;
  width: 100%;
`;

const Td = styled.td`
  color: #666;
  border-top: 1px solid #d9d9d9;
  padding: 16px 0;

  &:first-child {
    border-left: 0 none;
    text-align: left;
  }
`;

const Spani = styled.i`
  transform: rotate(0);
  line-height: 0.14em;
  display: inline-block;
  vertical-align: middle;
`;

const Span = styled.span`
  margin-top: 3px;
  font-size: 12px;
  display: inline-block;
  font-weight: bold;
  vertical-align: middle;
`;

const A = styled.a`
  display: inline-block;
  vertical-align: middle;
`;

const Th = styled.th`
  text-align: center;
  border-left: 1px solid #ccc;
  color: #666;
  padding: 12px 0;
  background: #f5f5f5;
  background-color: #f5f5f5;
  border-left: 0 none;
  line-height: 1.3em;
  vertical-align: middle;
  text-align: right;

  &:first-child {
    text-align: left;
    text-indent: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }
`;

const Thead = styled.thead`
  color: inherit;
  font-size: inherit;
`;

const Colgroupstyle = styled.col`
  width: 120px;
`;

const Colgroup = styled.colgroup`
  color: inherit;
  font-size: inherit;
`;

const TableStyleT2 = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 16px;
  width: 100%;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
  width: 100%;
  border: 1px solid #d9d9d9;
`;

export default OrderList;
