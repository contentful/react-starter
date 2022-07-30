const laptop = new URL('./assets/resources.svg', import.meta.url)
const logo = new URL('./assets/react-contentful.png', import.meta.url)

const Content = () => {
  return (
    <>
      <section className="river">
        <img src={laptop} alt="Laptop with a play button" aria-hidden="true" />
        <article>
          <h1>
            <small>React + Contentful</small>
            React Contentful Homepage Starter
          </h1>
          <p>
            Clone, edit, and customize this starter to build your own React app.
          </p>
          <div className="buttons">
            <button className="button-large">
              <a href="https://www.contentful.com/contentful-and-javascript-tutorial">
                Read more
              </a>
            </button>

            <button className="button-large button-secondary">
              <a href="https://github.com/contentful/react-starter">GitHub</a>
            </button>
          </div>
        </article>
      </section>
      <section className="river">
        <img src={logo} alt="React + Contentful" aria-hidden="true" />
        <article>
          <h2>Get started using React</h2>
          <p>
            Filter paintings based on their Contentful tag using the checkboxes
            below.
          </p>

          <ul>
            <li>Fetches data from the Contentful REST API</li>
            <li>
              Filter data using React's <code>useState</code> hook
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default Content
