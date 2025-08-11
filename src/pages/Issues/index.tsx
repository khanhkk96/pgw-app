import styled from 'styled-components';

export default function Issues() {
  return (
    <IssuePage>
      <h2 className="header">Issues & Solutions</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Vấn đề</th>
            <th>Tóm tắt</th>
            <th>Ngày tạo</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
      </table>
    </IssuePage>
  );
}

const IssuePage = styled.div``;
