import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-items'
import Review from './review'

const Testimonials: React.FC = () => (
    <Carousel className='bg-black text-white py-10 lg:py-20'>
        <CarouselItem index={0}>
            <div>
                <Review by='Axel (Showtime)'>
                    7Labs and showtime both share the love for high-quality 
                    software and the passion for building something people want.
                </Review>
            </div>
        </CarouselItem>
        <CarouselItem index={1}>
            <div>
                <Review by='Axel (Showtime)'>
                    7Labs and showtime both share the love for high-quality 
                    software and the passion for building something people want.
                </Review>
            </div>
        </CarouselItem>
        <CarouselItem index={2}>
            <div>
                <Review by='Axel (Showtime)'>
                    7Labs and showtime both share the love for high-quality 
                    software and the passion for building something people want.
                </Review>
            </div>
        </CarouselItem>
        <CarouselItem index={3}>
            <div>
                <Review by='Axel (Showtime)'>
                    7Labs and showtime both share the love for high-quality 
                    software and the passion for building something people want.
                </Review>
            </div>
        </CarouselItem>
        <CarouselItem index={4}>
            <div>
                <Review by='Axel (Showtime)'>
                    7Labs and showtime both share the love for high-quality 
                    software and the passion for building something people want.
                </Review>
            </div>
        </CarouselItem>
    </Carousel>
)

export default Testimonials