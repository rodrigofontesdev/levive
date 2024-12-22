import { ButtonLink } from '@/components/ButtonLink'
import { Post } from '@/components/Post'

import postOneImage from '@/assets/post-1.jpg'
import postTwoImage from '@/assets/post-2.jpg'

export function Blog() {
  return (
    <section
      id="blog"
      data-section="blog"
      className="mb-48 px-5"
    >
      <div className="max-w-screen-xl mx-auto">
        <header className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          <h2 className="uppercase text-4xl sm:text-5xl -tracking-wider flex-shrink-0">Blog</h2>
          <p className="text-lg lg:text-right lg:max-w-2xl">
            Explore nosso blog para obter as últimas tendências, dicas e insights de especialistas.
            Seu guia de bem-estar e saúde começa aqui.
          </p>
        </header>

        <div className="text-right mb-10">
          <ButtonLink href="/blog">Ver Blog</ButtonLink>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <Post
            cover={postOneImage}
            slug="/blog/post-slug"
            title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
          />

          <Post
            cover={postTwoImage}
            slug="/blog/post-slug"
            title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
          />
        </div>
      </div>
    </section>
  )
}
