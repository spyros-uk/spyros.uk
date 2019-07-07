import styled from "styled-components";

export { H1, H2, H3, H4, P, A };

const commonStyling = `
  margin: 0;
  color: white
`;

const H1 = styled.h1`
  ${commonStyling}
  margin-bottom: .5rem;

  font-size: var(--h1-font-size);
`;

const H2 = styled.h2`
  ${commonStyling}

  font-size: var(--h2-font-size);
`;

const H3 = styled.h3`
  ${commonStyling}

  font-size: var(--h3-font-size);
`;

const H4 = styled.h3`
  ${commonStyling}

  font-size: var(--h3-font-size);
  font-style: italic;
`;

const P = styled.p`
  ${commonStyling}

  font-size: var(--p-font-size);
`;

const A = styled.a`
  ${commonStyling}

  position: relative;
  text-decoration: none;
  letter-spacing: 0.15rem;

  font-size: var(--a-font-size);

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(var(--a-font-size) * 0.05);

    transform: scaleX(0);
    transition: transform 0.3s ease;

    background-color: currentColor;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
