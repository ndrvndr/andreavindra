import { IconLibraryPhoto } from "@tabler/icons-react"
import Image from "next/image"

import { PageHeader } from "@/components/layouts/page-header"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"
import { photos } from "@/constants/gallery"

export default function GalleryContainer() {
  return (
    <div>
      <PageHeader
        backgroundText="camera roll"
        icon={IconLibraryPhoto}
        title="Saved"
        highlight="Moments"
        description="Little things I want to remember"
      />

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
