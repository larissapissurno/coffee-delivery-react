import styled, { css } from 'styled-components'

interface TitleProps {
  color?: 'base-title' | 'base-subtitle'
}
export const TitleXL = styled.h1<TitleProps>`
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme[props.color || 'base-title']};
`

export const TitleL = styled.h2<TitleProps>`
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme[props.color || 'base-subtitle']};
`

export const TitleS = styled.h3<TitleProps>`
  font-size: 1.25rem;
  color: ${(props) => props.theme[props.color || 'base-subtitle']};
`

export const TitleXS = styled.h4<TitleProps>`
  font-size: 1.125rem;
  color: ${(props) => props.theme[props.color || 'base-subtitle']};
`

export const TextRegularL = styled.p<TitleProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme[props.color || 'base-subtitle']};

  ${(props) =>
    (!props.color || props.color === 'base-subtitle') &&
    css`
      font-stretch: 100;
    `}
`

export const TextRegularM = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.3;
`
