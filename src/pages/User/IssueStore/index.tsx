import CustomInput, { CustomInputStyle } from '@/components/Inputs/Input';
import styled from 'styled-components';
import SearchIcon from '@assets/icons/search.svg';
import CustomButton from '@/components/Button';

export default function IssueStore() {
  return (
    <IssueStoreWrapper>
      <div className="page-title">
        <h2>Issue Management</h2>
      </div>
      <div className="page-tools">
        <div className="actions">
          <CustomButton text="Create" />
          <CustomButton text="Update" />
          <CustomButton text="Delete" />
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
              <th style={{ minWidth: '400px' }}>Issue</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Project</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center">1</td>
              <td>Vấn đề số 1</td>
              <td className="center">12/12/2025</td>
              <td className="center">High</td>
              <td className="center">--</td>
              <td className="center">Fixed</td>
            </tr>
            <tr>
              <td className="center">2</td>
              <td>
                Vấn đề số 2 Vấn đề số 2 Vấn đề số 2 Vấn đề số 2 Vấn đề số 2 Vấn
                đề số 2 Vấn đề số 2 Vấn đề số 2 Vấn đề số 2 Vấn đề số 2
              </td>
              <td className="center">12/12/2025</td>
              <td className="center">High</td>
              <td className="center">--</td>
              <td className="center">Fixed</td>
            </tr>
            <tr>
              <td className="center">3</td>
              <td>Vấn đề số 3</td>
              <td className="center">12/12/2025</td>
              <td className="center">High</td>
              <td className="center">--</td>
              <td className="center">Fixed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </IssueStoreWrapper>
  );
}

const IssueStoreWrapper = styled.div`
  .page-tools {
    display: flex;
    justify-content: space-between;
  }

  .page-title h2 {
    margin-top: 0;
  }

  ${CustomInputStyle} {
    margin: 0;
    padding: 2px;
    border: 1px solid black;
    border-radius: 4px;
  }

  .actions button {
    margin-bottom: 10px;
  }

  .table-content {
    width: 100%;
    overflow-x: auto;
  }

  table {
    border-spacing: 0;

    tr {
      td,
      th {
        padding: 10px;
      }

      td.center {
        text-align: center;
      }
    }

    tbody > tr:hover {
      background-color: lightgray;
      color: white;
    }

    th {
      background-color: gray;
    }
  }
`;
