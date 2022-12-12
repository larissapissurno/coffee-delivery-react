import styled, { css, DefaultTheme } from 'styled-components'

interface TitleProps {
  color?: keyof DefaultTheme
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

interface TextRegularProps {
  color?: keyof DefaultTheme
}
const TextRegular = styled.p<TextRegularProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  color: ${(props) => props.theme[props.color || 'base-text']};
`

export const TextRegularL = styled(TextRegular)`
  font-size: 1.25rem;

  ${(props) =>
    (!props.color || props.color === 'base-subtitle') &&
    css`
      font-stretch: 100;
    `}
`

export const TextRegularM = styled(TextRegular)`
  font-size: 1rem;
`

export const TextRegularS = styled(TextRegular)`
  font-size: 0.875rem;
`
