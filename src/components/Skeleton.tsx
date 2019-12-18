import React from 'react'
import styled from 'styled-components'

const StyledSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

const StyledSkeletonLine = styled(StyledSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: '\00a0';
  }
`

const SkeletonLine: React.SFC = (): JSX.Element => <StyledSkeletonLine />

export default SkeletonLine
