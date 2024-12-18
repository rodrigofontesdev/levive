'use client'

import { Post } from '@/components/Post'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ButtonLink } from '@/components/ButtonLink'

import postOneImage from '@/assets/post-1.jpg'
import postTwoImage from '@/assets/post-2.jpg'

export default function Posts() {
  const pathname = usePathname()

  return (
    <div className="py-28">
      <ul className="flex flex-wrap gap-4 mb-16">
        <li>
          <Link
            href="/blog"
            className={`inline-block bg-black hover:bg-brown text-white py-4 px-8 ${pathname === '/blog' && 'bg-brown'} transition-colors duration-300 ease-in`}
          >
            Todos
          </Link>
        </li>
        <li>
          <Link
            href="/blog/categoria/bem-estar"
            className={`inline-block bg-black hover:bg-brown text-white py-4 px-8 ${pathname === '/blog/categoria/bem-estar' && 'bg-brown'} transition-colors duration-300 ease-in`}
          >
            Bem-estar
          </Link>
        </li>
        <li>
          <Link
            href="/blog/categoria/saude"
            className={`inline-block bg-black hover:bg-brown text-white py-4 px-8 ${pathname === '/blog/categoria/saude' && 'bg-brown'} transition-colors duration-300 ease-in`}
          >
            Saúde
          </Link>
        </li>
        <li>
          <Link
            href="/blog/categoria/dicas"
            className={`inline-block bg-black hover:bg-brown text-white py-4 px-8 ${pathname === '/blog/categoria/dicas' && 'bg-brown'} transition-colors duration-300 ease-in`}
          >
            Dicas
          </Link>
        </li>
      </ul>

      <div className="grid md:grid-cols-2 auto-rows-min gap-16 mb-20">
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

      <div className="flex justify-center md:justify-end items-center gap-10">
        <ButtonLink href="#">Anterior</ButtonLink>
        <ButtonLink href="#">Próximo</ButtonLink>
      </div>
    </div>
  )
}
