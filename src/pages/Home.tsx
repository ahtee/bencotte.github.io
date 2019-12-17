import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Loading from '../components/Loading'
import me from '../images/me.jpg'
const CardImage = React.lazy(() => import('../components/CardImage'))
const Header = React.lazy(() => import('../components/Header'))
const HeaderImage = React.lazy(() => import('../components/HeaderImage'))

const devTools = [
  {
    src: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
    title: 'React',
    description:
      'Deep understanding of React and able to deploy production-ready applications to the Cloud.',
    buttonText: 'React Projects',
    buttonVariant: 'primary',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=react',
    border: 'primary',
    external: true,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
    title: 'Vue',
    description:
      'High-level understanding of Vue, able to participate in development of new features.',
    buttonText: 'Vue Projects',
    buttonVariant: 'success',
    buttonLink: 'https://github.com/ahtee?tab=repositories&q=vue',
    border: 'success',
    external: true,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
    title: 'Amazon Web Services',
    description:
      'Familiar with the available toolset provided by AWS and the best practices for deployment.',
    buttonText: 'SA-A Certification',
    buttonVariant: 'warning',
    buttonLink:
      'https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-09-21&ci=AWS00577397',
    border: 'warning',
    external: true,
  },
]

function Home() {
  return (
    <div>
      <Helmet>
        <title>otte.io</title>
        <meta name="description" content="otte.io welcome" />
      </Helmet>
      <Header
        title="Ben Otte"
        tagline="Frontend web developer, experienced and certified in AWS Cloud Services, JavaScript thinker, former musician, and always learning."
      >
        <React.Suspense fallback={<Loading />}>
          <HeaderImage src={me} alt="Ben Otte" width="200" height="270" />
        </React.Suspense>
      </Header>
      <Container>
        <Row>
          <h3>Development tools</h3>
        </Row>
        <Row>
          {devTools.map((tool, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <CardImage
                src={tool.src}
                title={tool.title}
                description={tool.description}
                buttonText={tool.buttonText}
                buttonVariant={tool.buttonVariant}
                buttonLink={tool.buttonLink}
                border={tool.border}
                external={tool.external}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
export default Home