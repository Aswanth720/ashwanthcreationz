import Image from "next/image"
import Link from "next/link"

interface Props {
  title: string
  description: string
  slug: string
  category: string
  readingTime?: string
  coverImage?: string
}

export default function ArticleCard({
  title,
  description,
  slug,
  category,
  readingTime,
  coverImage,
}: Props) {
  return (
    <Link href={slug}>
      <article
        className="
          group overflow-hidden
          rounded-[28px]
          border border-zinc-800
          bg-zinc-950
          transition duration-300
          hover:-translate-y-1
          hover:border-cyan-500
        "
      >
        <div className="relative h-52 overflow-hidden">
          <Image
            src={coverImage || "/covers/default.jpg"}
            alt={title}
            fill
            className="
              object-cover transition duration-500
              group-hover:scale-105
            "
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span
              className="
                rounded-full bg-cyan-500/10
                px-3 py-1 text-xs
                text-cyan-400
              "
            >
              {category}
            </span>

            <span className="text-sm text-zinc-500">
              {readingTime}
            </span>
          </div>

          <h2
            className="
              mt-5 text-2xl font-black
              transition
              group-hover:text-cyan-400
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-4 leading-7
              text-zinc-400
            "
          >
            {description}
          </p>

          <div className="mt-6 text-sm text-zinc-500">
            Enter Article →
          </div>
        </div>
      </article>
    </Link>
  )
}