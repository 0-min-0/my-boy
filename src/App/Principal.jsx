import React, { useEffect, useRef } from 'react'
import flowers from '../assets/images/flowers.png'
import fondo from '../assets/images/squares-bg.png'
import marco from '../assets/images/marco-fondo.png'
import chiguiro from '../assets/images/chiguiro.png'
import wedding from '../assets/images/boda-chiguirito.png'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Principal = () => {
    const ref = useRef(null) // referencia a la sección del contador
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.floor(latest))

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, 814, {
                duration: 4,
                ease: "easeOut"
            })
            return animation.stop
        }
    }, [isInView, count])
    useEffect(() => {
        AOS.init({ duration: 1500, once: true })
    }, [])

    return (
        <>
            {/* Primera sección */}
            <div className='sm:items-start sm:mt-10 sm:gap-2 sm:h-[65%] flex h-screen justify-between items-center gap-10'>
                {/* Texto animado con motion */}
                <motion.div
                    className='sm:ml-15 sm:text-left font-[yours] text-center ml-30'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className='sm:text-4xl text-6xl'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Para el amor de mi vida...
                    </motion.h1>

                    <motion.h2
                        className='sm:text-2xl text-4xl mb-3'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        De tu noviecita
                    </motion.h2>

                    <motion.p
                        className='sm:text-xl text-3xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                    >
                        Mi precioso niño, quise utilizar mi talento creando ésta aplicación <br />
                        para que puedas ver lo mucho que te amo y lo importante que eres para <br />
                        mí. Sería más normal hacerte una carta o muchos detalles (cosa que <br />
                        disfruto mucho hacer para ti), pero ésta vez quería hacer algo diferente <br />
                        y demostrarte de todas las formas que pueda el gran amor que siento por <br />
                        ti. Que cada vez que entres a ésta página y ojalá sea muchas veces te <br />
                        sientas amado, apreciado y valorado. Espero que la disfrutes tanto <br />
                        como yo disfruté haciendola.
                    </motion.p>
                </motion.div>

                {/* Imagen con efecto zoom */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                >
                    <img src={flowers} className='sm:w-40 w-120 h-auto' alt='flowers' />
                </motion.div>
            </div>

            {/* Segunda sección con AOS */}
            <div
                className='sm:h-[75%] flex justify-center w-full h-[90%] bg-cover bg-center'
                style={{ backgroundImage: `url(${fondo})` }}
            >
                <div className='sm:gap-1 flex justify-between items-center gap-6'>
                    {/* Caja de texto animada con AOS */}
                    <div
                        className='sm:relative sm:px-6 sm:py-5 sm:ml-1 bg-white/90 px-10 py-8 ml-20 rounded-xl'
                        data-aos="fade-right"
                    >
                        <h2 className='sm:text-3xl font-[yours] text-4xl mb-2'>Mi cielo lindo 🤍</h2>
                        <p className='sm:text-sm font-[delius] text-md'>
                            Cuando me acerque a ti por primera vez como una amiga <br />
                            no pensé que llegaría a enamorarme de ti tan profundamente <br />
                            pero estamos aquí juntos, siendo felices y algo que no podría <br />
                            negar mi yo del pasado, es que me gustaste desde ese momento <br />
                            en el que empezamos a establecer nuestra amistad. No se como lo <br />
                            pienses tú, pero yo siento que entre tu y yo siempre hubo la <br />
                            conexión tan grande que tenemos ahora, talvez tu y yo no podriamos <br />
                            haber funcionado como amigos nunca, porque la manera en que empece <br />
                            a sentir algo mas por ti fue tan rapido. Me alegra que nuestros caminos <br />
                            hayan tomado por el mismo rumbo y que ahora estemos juntos, es lo mejor <br />
                            que me ha pasado en la vida. Te amo con todo mi ser, eres el amor de mi vida. <br />
                        </p>
                        <img
                            src={chiguiro}
                            alt='Chigüirito'
                            className='sm:absolute sm:top-[-15%] sm:right-[-15%] sm:w-60 w-130 h-auto scale-x-[-1]'
                            data-aos="fade-left"
                        />
                    </div>

                    {/* Imagen con AOS */}

                </div>
            </div>
            {/* Nueva sección: contador de días juntos */}
            <div
                ref={ref}
                className="sm:pt-6 flex justify-around pt-10 bg-[#fffefd]"
            >
                <motion.div
                    className='sm:h-[55vh] flex flex-col items-center justify-center w-1/2 h-[100vh] bg-contain bg-center'
                    style={{ backgroundImage: `url(${marco})` }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className="sm:text-3xl sm:mt-14 sm:mb-2 text-5xl font-[yours] mt-24 mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Llevo a tu lado...
                    </motion.h2>

                    <motion.div
                        className='sm:text-4xl text-7xl font-[delius] font-bold text-[#ef7694] tracking-wider'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {rounded}
                    </motion.div>

                    <motion.p
                        className="sm:mt-2 sm:text-xs mt-4 text-xl text-center font-[delius] text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                    >
                        Días, en los que cada uno de ellos <br />
                        te he amado cada vez más y me he <br />
                        enamorado más profundamente de ti.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                >
                    <img src={wedding} className='sm:w-80 w-160 h-auto' alt='Matrimonio de chigüirito' />
                </motion.div>

            </div>

        </>
    )
}
