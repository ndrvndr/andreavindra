export type JournalItem = {
  id: string
  year: string
  title: string
  description: string
  content: React.ReactNode
}

export const journalItems: JournalItem[] = [
  {
    id: "2025",
    title: "2025: Learning and Exploring",
    description:
      "New experiences and opportunities to deepen my technical skills.",
    year: "2025",
    content: (
      <p>
        During the 2025 Eid holiday, I traveled to Jakarta and continued the
        trip to Pulau Pramuka with friends from my hometown in Bangka. It became
        one of the more memorable trips of the year, especially because it was
        also my first time taking a boat trip there and trying snorkeling.
        <br />
        <br />
        Seeing the underwater world for the first time made the trip feel
        different from my usual travels. It was a simple experience, but one
        that stood out because it introduced me to something completely new.
        <br />
        <br />
        Outside of traveling, I also spent more time strengthening the areas
        where I felt I still had gaps, especially in backend development.
        Through personal projects and online learning, I explored backend
        concepts more deeply while also learning DevOps and deployment
        workflows. The goal was to build a more complete understanding of how an
        application works end to end, from the frontend and backend to
        infrastructure and deployment, and to grow into a more well-rounded
        full-stack developer.
      </p>
    ),
  },
  {
    id: "2024",
    title: "2024: A New Chapter",
    description: "A new city, new connections, and new adventures.",
    year: "2024",
    content: (
      <p>
        In 2024, I found myself moving again, this time back to Bandung as my
        company prepared to require working from the office. The move brought a
        different rhythm to everyday life. I started spending more time with
        people from work, meeting new friends, and slowly building a new circle
        in a city away from home.
        <br />
        <br />
        That year also became the start of many new experiences. In May, I
        explored Ciwidey for the first time, visiting Kawah Putih, Kawah
        Rengganis, and its suspension bridge. A few months later, in September,
        I finally crossed one item off my bucket list: hiking a mountain for the
        first time. Gunung Putri may have been a relatively small beginning, but
        for me, it marked the start of something I had wanted to experience for
        a long time.
      </p>
    ),
  },
  {
    id: "2023",
    title: "2023: From University to Working Life",
    description: "Graduation, the start of my career, and a return home.",
    year: "2023",
    content: (
      <p>
        After the pandemic came to an end, I returned to Batam with one main
        goal in mind: finishing my thesis and completing university on time.
        After months of focusing on that final chapter, I finally graduated as
        planned, closing an important phase of my life.
        <br />
        <br />A few months later, in October, another chapter began when I
        landed my first job as a Frontend Developer. Since the job allowed me to
        work remotely, I decided to return to my hometown in Bangka. It was a
        quiet transition, but an important one—moving from student life into the
        beginning of my professional career.
      </p>
    ),
  },
]
