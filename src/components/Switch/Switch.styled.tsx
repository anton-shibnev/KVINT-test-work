import styled from 'styled-components';
import { Switch } from 'antd';

// eslint-disable-next-line import/prefer-default-export
export const StyledSwitch = styled(Switch)`
  height: 17px;

  .ant-switch-handle {
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    left: 0;

    &::before {
      background-color: #919191;
      border-radius: 16px;
    }
  }

  &.ant-switch-checked {
    background-color: #0f213c;

    .ant-switch-handle {
      left: calc(100% - 18px - 2px);

      &::before {
        background-color: #01c8f8;
      }
    }
  }
`;
