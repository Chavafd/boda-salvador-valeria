'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', alt: 'Momento romántico' },
  { id: 2, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', alt: 'Abrazo de amor' },
  { id: 3, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', alt: 'Anillos de boda' },
  { id: 4, src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800', alt: 'Preparativos' },
  { id: 5, src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800', alt: 'Flores de boda' },
  { id: 6, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', alt: 'Detalles elegantes' },
]

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <>
      <section className="py-20 md:py-32 snap-start bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-5xl md:text-7xl text-wedding-black mb-4">
              Galería
            </h2>
            <p className="text-wedding-gray max-w-2xl mx-auto text-lg">
              Momentos especiales que hemos compartido en nuestro camino hacia la boda
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              className="gallery-swiper"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={image.id}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white text-3xl hover:text-gray-300 transition-colors z-60"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-8 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            <FaChevronLeft />
          </button>

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-8 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            <FaChevronRight />
          </button>
        </motion.div>
      )}

      <style jsx global>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #0a0a0a;
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          background: #6b7280;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #0a0a0a;
        }
      `}</style>
    </>
  )
}
