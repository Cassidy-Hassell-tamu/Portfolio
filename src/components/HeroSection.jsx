function HeroSection() {
  return (
    <section 
      id="home" 
      className="bg-[#E7FFF4] px-4 py-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#386E55]">
              My title here...
            </h1>
            <p className="text-lg md:text-xl text-[#386E55] opacity-80">
              My short description...
            </p>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img src="/public/Headshot.jpg" alt="Headshot of Cassidy Hassell" className="rounded-3xl w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

