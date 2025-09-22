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

// INSTRUCTIONS TO ADD YOUR PHOTOS:
// 1. Add your photos to the folder: public/gallery/
// 2. Name your photos with simple names like: photo1.jpg, photo2.jpg, etc.
// 3. Update this array with your photo filenames
// 4. The photos will automatically display in your gallery!

const galleryImages = [
  { id: 1, src: '/gallery/photo1.jpg', alt: 'Nuestro amor en fotografía' },
  { id: 2, src: '/gallery/photo2.jpg', alt: 'Momentos especiales juntos' },
  { id: 3, src: '/gallery/photo3.jpg', alt: 'Sonrisas y felicidad' },
  { id: 4, src: '/gallery/photo4.jpg', alt: 'Recuerdos inolvidables' },
  { id: 5, src: '/gallery/photo5.jpg', alt: 'Aventuras compartidas' },
  { id: 6, src: '/gallery/photo6.jpg', alt: 'Celebrando nuestro amor' },
  { id: 7, src: '/gallery/photo7.jpg', alt: 'Instantes de felicidad' },
  { id: 8, src: '/gallery/photo8.jpg', alt: 'Juntos para siempre' },
  { id: 9, src: '/gallery/photo9.jpg', alt: 'Nuestra historia de amor' },
  { id: 10, src: '/gallery/photo10.jpg', alt: 'El inicio de nuestra vida juntos' },
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
