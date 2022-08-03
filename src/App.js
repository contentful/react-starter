import useSWR from 'swr'
import { useState } from 'react'
import { Spinner } from '@contentful/f36-spinner'
import { createClient } from 'contentful'
import Painting from './Painting'
import Content from './Content'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
})

const fetcher = async () => {
  const entryItems = await client.getEntries({ content_type: 'painting' })
  const tagItems = await client.getTags()

  const tags = tagItems.items.map((tag) => tag.name)

  // Process the data from the Contentful REST API into a neater object
  // If you want to avoid this step, consider using the GraphQL API
  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      name: fields.name,
      image: fields.image.fields.file.url,
      alt: fields.image.fields.title,
      artist: fields.artist.fields.name,
      tags: entry.metadata.tags
        .map((t) => tagItems.items.find((ti) => ti.sys.id === t.sys.id))
        .map((t) => t.name),
    }
  })

  return { entries, tags }
}

function App() {
  const [selectedTags, setSelectedTags] = useState([])
  const { data, error } = useSWR('contentful', fetcher)

  if (error) {
    console.log(error)
    return <div>failed to load </div>
  }
  if (!data) return <Spinner size="large" />

  const { tags, entries } = data

  const onTagSelected = (e) => {
    const { name: tag, checked } = e.target
    const index = selectedTags.indexOf(tag)

    if (checked && index === -1) {
      selectedTags.push(tag)
    } else if (index !== -1) {
      // if the tag is already in the array, remove it
      selectedTags.splice(index, 1)
    }
    setSelectedTags(selectedTags.slice())
  }

  const checkboxes = tags.map((tag) => {
    return (
      <label htmlFor={tag} key={tag}>
        <input type="checkbox" onChange={onTagSelected} name={tag} id={tag} />
        {tag}
      </label>
    )
  })

  const paintings = entries
    .filter((painting) => {
      if (selectedTags.length === 0) return true
      const found = painting.tags.some((r) => selectedTags.includes(r))
      return found
    })
    .map(({ name, image, alt, artist }, i) => {
      return (
        <Painting
          key={i}
          name={name}
          image={image}
          alt={alt}
          artist={artist}
        ></Painting>
      )
    })

  return (
    <main>
      <Content />
      <p className="tags">
        👉<b>Tags</b>:{checkboxes}
      </p>
      <div className="grid">{paintings}</div>
    </main>
  )
}

export default App
