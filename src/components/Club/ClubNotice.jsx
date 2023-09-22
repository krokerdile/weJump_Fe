import styled from "styled-components";
import NoticeBox from "@components/Club/NoticeBox";

const ClubNotice = () => {
  const mockData = [
    { title: "3주차_ Learning MS Office", text: "이번주에는 Microsoft Office tool에 대해 공부해보았는데요 ...", user: "user1", date: "2023.09.11" },
    { title: "3주차_ Learning MS Office", text: "이번주에는 Microsoft Office tool에 대해 공부해보았는데요 ...", user: "user1", date: "2023.09.11" },
  ];
  console.log(mockData);

  return (
    <NoticeList>
      {mockData.map((item, index) => (
        <NoticeBox title={item.title} text={item.text} user={item.user} date={item.date} key={index} />
      ))}
    </NoticeList>
  );
};

export default ClubNotice;

const NoticeList = styled.div`
  width: 100%;
  height: 10%;
`;
