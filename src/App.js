import data from './data'
import { Fragment, useState } from 'react'

// todo use contentful to return all the tags
const dedup = (array) => {
  return array.filter(function (item, pos) {
    return array.indexOf(item) === pos
  })
}

// create unique list of tags
const allTags = dedup(data.map((meta) => meta.tags).flat())

const Painting = ({ title, description, tags, image }) => {
  return (
    <div className="painting">
      <h3>{title}</h3>
      <img className="image-thumb" src={image} alt="" />
      <hr />
    </div>
  )
}

function App() {
  const [selectedTags, setSelectedTags] = useState([])

  const onTagSelected = (e) => {
    const { name: tag, checked } = e.target
    const index = selectedTags.indexOf(tag)

    // TODO improve 😅
    if (checked) {
      if (index === -1) {
        selectedTags.push(tag)
      }
    } else {
      // if the tag is already in the array, remove it
      if (index !== -1) {
        selectedTags.splice(index, 1)
      }
    }

    setSelectedTags(selectedTags.slice())
  }

  const checkboxes = allTags.map((tag) => {
    return (
      <Fragment key={tag}>
        <input
          type="checkbox"
          className="checkbox"
          onChange={onTagSelected}
          name={tag}
          id={tag}
        />
        <label htmlFor={tag}>{tag}</label>
      </Fragment>
    )
  })

  const paintings = data
    .filter((painting) => {
      if (selectedTags.length === 0) return true
      const found = painting.tags.some((r) => selectedTags.includes(r))
      return found
    })
    .map(({ title, description, tags, image }, i) => {
      return (
        <Painting
          key={i}
          title={title}
          description={description}
          tags={tags}
          image={image}
        ></Painting>
      )
    })

  return (
    <main>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <p>
        This file uses values sourced from the{' '}
        <a href="https://f36.contentful.com/">Forma36 tokens</a>.
      </p>

      <p>
        This a <button>Button</button>
      </p>

      <section className="hero">
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
            Clone, deploy, edit, and customize this starter to build your own
            homepage
          </p>
          <div>
            <button>
              <a href="https://github.com/gatsbyjs/gatsby-starter-contentful-homepage#deploy-your-site">
                Deploy Now
              </a>
            </button>

            <button className="button-secondary">
              <a href="https://github.com/gatsbyjs/gatsby-starter-contentful-homepage">
                GitHub
              </a>
            </button>
          </div>
        </article>
      </section>
      <p>
        <b>Tags</b>:{checkboxes}
      </p>
      <div className="grid">{paintings}</div>
    </main>
  )
}

export default App
