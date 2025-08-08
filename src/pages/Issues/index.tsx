import styled from 'styled-components';

export default function Issues() {
  return (
    <IssuePage>
      <div className="header"> Issues & Solutions</div>
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
