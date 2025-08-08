import CustomInput from '@/components/Inputs/Input';
import styled from 'styled-components';
import SearchIcon from '@assets/icons/search.svg';

export default function IssueStore() {
  return (
    <IssueStoreWrapper>
      <div className="page-header">
        <h4>Issue Management</h4>
      </div>
      <div className="buttons">
        <div className="actions">
          <button>Create</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
        <div className="search">
          <CustomInput
            name="query"
            placeholder="Nhập từ khoá"
            icon={SearchIcon}
          />
        </div>
      </div>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Issue</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Project</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vấn đề số 1</td>
              <td>12/12/2025</td>
              <td>High</td>
              <td>--</td>
              <td>Fixed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </IssueStoreWrapper>
  );
}

const IssueStoreWrapper = styled.div``;
