import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const GsapAnim = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('body', {opacity: 1, duration: .01}) //globalStyle.js  - body { opacity: 0}

        //
        //HeroSection/HeroImage
        //
        gsap.timeline()
            .from('.heroCircleBg', { scale: 0, duration: .5, delay: .6, ease: 'back' })
            .from('.heroImg', { opacity: 0, y: -10, duration: 1, })
            .from('.circle', { opacity: 0, duration: 1, stagger: .5 })


        //
        //InfoSection/AddressImage
        //
        gsap.timeline({
            scrollTrigger: {
                trigger: '.address-image',
                start: "90% 100%",
                once: true,
            }
        }).from('.address-image #man', { opacity: 0, x: '-25' , duration: .6 })
            .from('.address-image #sign', { yPercent: 100, duration: .5 })


        //
        // MATCH MEDIA
        //
        const heroTimeline = gsap.timeline()
        ScrollTrigger.matchMedia({'(min-width: 960px)': () => {

            //hero section
            ScrollTrigger.saveStyles('.hero-background, .hero-text h1, .hero-text h2, .hero-serivces > *, .nav')
            heroTimeline
                .from('.hero-background', { yPercent: '-100', duration: 1.2 })
                .from('.hero-text h1', { opacity: 0, duration: .5 })
                .from('.hero-text h2', { opacity: 0, x: '-50', duration: .5}, "<+=.2")
                .from('.hero-serivces > *', { x: 10 ,opacity: 0, duration: .3, stagger: .2 })
                .from('.nav', { opacity: 0, duration: 2 }, 1)


            //InfoSection/AddressBlock
            ScrollTrigger.saveStyles('.address-text, .phone-container > :is(h2, h3)')
            gsap.from('.address-text', {
                scrollTrigger: {
                    trigger: '.address-text',
                    start: 'top 90%'
                },
                y: 100,
                duration: .5
            })


            gsap.from('.phone-container > :is(h2, h3)', {
                scrollTrigger: {
                    trigger: '.phone-container',
                    start: 'top 90%',
                },
                x: 50,
                opacity: 0,
                duration: .6,
                stagger: .3,
            })

            //InfoSection/OpeningHoursBlock
            ScrollTrigger.saveStyles('.opening-hours h2, .opening-hours .items > *')
            gsap.timeline({scrollTrigger: {
                trigger: '.opening-hours h2',
                start: 'top 80%',
            }})
                .from('.opening-hours h2', { y: -50, duration: .5 })
                .from('.opening-hours .items > *', {
                    y: 50,
                    opacity: 0,
                    duration: .5,
                    stagger: .15,
                })

            //PriceListSection
            ScrollTrigger.saveStyles('.price-list h2, .price-list .items > *')
            gsap.timeline({scrollTrigger: {
                trigger: '.price-list .items',
                start: 'top 90%'
            }})
                .from('.price-list h2', { y: 50, duration: .5, ease: 'back' })
                .from('.price-list .items > *', {
                    opacity: 0,
                    duration: 1,
                    stagger: .2,
                }, .2)

            //footer
            ScrollTrigger.saveStyles('footer > *')
            gsap.from('footer > *', {
                scrollTrigger: {
                    trigger: 'footer',
                    start: 'center bottom',
                    end: 'bottom bottom',
                    scrub: 1
                },
                y: '200',
            })

        }, '(max-width: 959.9px)': () => {
            heroTimeline.isActive() && heroTimeline.progress(1)
        }
    })

    })
    return <></>
}

export default GsapAnim
