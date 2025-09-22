// components/video-section.tsx
"use client"

export function VideoSection() {
  return (
    <section className="container mx-auto px-12 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-primary font-serif">Introduction</h2>
        <div className="flex justify-center mt-8">
            <video
            src="/rasamala_video.mp4"
            controls
            className="rounded-2xl shadow-lg max-w-4xl w-full"
            >
            Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </section>
  )
}
