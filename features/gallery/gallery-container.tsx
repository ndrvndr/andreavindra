import { IconLibraryPhoto } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"
import { Highlight } from "@/components/ui/hero-highlight"
import { photos } from "@/constants/gallery"
import Image from "next/image"

export default function GalleryContainer() {
  return (
    <div>
      <header className="relative">
        <p
          aria-hidden={true}
          className="absolute bottom-42.5 left-0 hidden text-[250px] leading-0 font-bold text-secondary opacity-5 lg:block"
        >
          camera roll
        </p>

        <div className="layout flex flex-col items-center pt-28 pb-12 text-center md:pt-48 md:pb-20">
          <Button
            asChild
            size="icon-lg"
            variant="secondary"
            className="pointer-events-none"
          >
            <span aria-hidden="true">
              <IconLibraryPhoto />
            </span>
          </Button>
          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Saved <Highlight>Moments</Highlight>
          </h1>
          <p className="mt-3">Little things I want to remember</p>
        </div>
      </header>

      <section className="layout py-16">
        <DraggableCardContainer className="relative flex min-h-[calc(100vh-556px)] w-full items-center justify-center overflow-clip">
          {photos.map((photo, index) => (
            <DraggableCardBody key={photo.title} className={photo.className}>
              <Image
                src={photo.image}
                alt={photo.title}
                width={320}
                height={320}
                sizes="272px"
                priority={index < 2}
                draggable={false}
                className="pointer-events-none relative z-10 aspect-square h-auto w-full object-cover"
              />
              <h2 className="mt-4 text-center text-2xl font-bold">
                {photo.title}
              </h2>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </section>
    </div>
  )
}
