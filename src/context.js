import { createContext, useContext } from "react";

export function Heading({ children }) {
  const level = useContext(LevelContext);
  const testParm = useContext(TestParamContext);
  switch (level) {
    case 1:
      return <h1>{children + testParm}</h1>;
    case 2:
      return <h2>{children + testParm}</h2>;
    case 3:
      return <h3>{children + testParm}</h3>;
    case 4:
      return <h4>{children + testParm}</h4>;
    case 5:
      return <h5>{children + testParm}</h5>;

    default:
      break;
  }
}

export function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        <TestParamContext.Provider value={5}>
          {children}
        </TestParamContext.Provider>
      </LevelContext.Provider>
    </section>
  );
}

export function ContextPage() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={4}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={5}>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

const LevelContext = createContext(1);
const TestParamContext = createContext(4);
