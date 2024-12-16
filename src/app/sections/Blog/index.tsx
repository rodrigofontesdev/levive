import { ButtonLink } from '@/components/ButtonLink'
import { FeaturedPost } from '@/components/FeaturedPost'

import featuredImage from '@/assets/640x480.svg'

export function Blog() {
  return (
    <section className="py-40 px-5">
      <div className="max-w-screen-xl mx-auto">
        <header className="flex justify-between gap-10">
          <h2 className="uppercase text-5xl -tracking-wider flex-shrink-0 mb-20">Blog</h2>
          <p className="text-lg text-right max-w-2xl">
            Explore nosso blog para obter as últimas tendências, dicas e insights de especialistas.
            Seu guia de bem-estar e saúde começa aqui.
          </p>
        </header>

        <div className="text-right mb-5">
          <ButtonLink href="#">Ver Blog</ButtonLink>
        </div>

        <div className="flex gap-10">
          <FeaturedPost
            cover={featuredImage}
            slug="/blog/post-slug"
            title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
          />

          <FeaturedPost
            cover={featuredImage}
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
