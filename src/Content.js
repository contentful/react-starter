const Content = () => {
  return (
    <>
      <section className="river">
        <img
          src="https://images.ctfassets.net/p39nycxzit31/U3SK6xjRhpQRa9vJy8nyM/b57a359f6fed8bf3e3b8cc7af66bb896/Hero.png?w=2368&h=1776&q=50&fm=webp"
          alt=""
        />
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
              <a href="https://github.com/gatsbyjs/gatsby-starter-contentful-homepage#deploy-your-site">
                Read more
              </a>
            </button>

            <button className="button-large button-secondary">
              <a href="https://github.com/gatsbyjs/gatsby-starter-contentful-homepage">
                GitHub
              </a>
            </button>
          </div>
        </article>
      </section>
      <section className="river">
        <article>
          <h2>Get started using React</h2>
          <p>
            Use the checkboxes below to filter paintings based on their tags in
            Contentful.
          </p>

          <ul>
            <li>Fetches data from the Contentful REST API</li>
            <li>
              Filter data using React's <code>useState</code> hook
            </li>
          </ul>
        </article>
        <img
          src="https://images.ctfassets.net/p39nycxzit31/U3SK6xjRhpQRa9vJy8nyM/b57a359f6fed8bf3e3b8cc7af66bb896/Hero.png?w=2368&h=1776&q=50&fm=webp"
          alt=""
        />
      </section>
    </>
  )
}

export default Content
