import React, { useEffect, useRef } from 'react'
import flowers from '../assets/images/flowers.png'
import fondo from '../assets/images/squares-bg.png'
import marco from '../assets/images/marco-fondo.png'
import chiguiro from '../assets/images/chiguiro.png'
import wedding from '../assets/images/boda-chiguirito.png'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../CSS/responsive.css'

export const Principal = () => {
    const ref = useRef(null)
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
            <div className="seccion seccion-1">
                <motion.div
                    className="texto"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="titulo font-[yours]"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Para el amor de mi vida...
                    </motion.h1>

                    <motion.h2
                        className="subtitulo font-[yours]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        De tu noviecita
                    </motion.h2>

                    <motion.p
                        className="parrafo-1 font-[yours]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                    >
                        Mi precioso niño, quise utilizar mi talento creando ésta aplicación
                        para que puedas ver lo mucho que te amo y lo importante que eres para
                        mí. Sería más normal hacerte una carta o muchos detalles (cosa que 
                        disfruto mucho hacer para ti), pero ésta vez quería hacer algo diferente
                        y demostrarte de todas las formas que pueda el gran amor que siento por
                        ti. Que cada vez que entres a ésta página y ojalá sea muchas veces te
                        sientas amado, apreciado y valorado. Espero que la disfrutes tanto
                        como yo disfruté haciendola.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="imagen-flowers"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                >
                    <img src={flowers} alt="flowers" className='flowers' />
                </motion.div>
            </div>

            {/* Segunda sección */}
            <div className="seccion seccion-2" style={{ backgroundImage: `url(${fondo})` }}>
                <div className="contenedor-texto">
                    <div className="caja" data-aos="fade-right">
                        <h2 className="titulo font-[yours]">Mi cielo lindo 🤍</h2>
                        <p className="parrafo font-[delius]">
                            Cuando me acerque a ti por primera vez como una amiga
                            no pensé que llegaría a enamorarme de ti tan profundamente
                            pero estamos aquí juntos, siendo felices y algo que no podría 
                            negar mi yo del pasado, es que me gustaste desde ese momento
                            en el que empezamos a establecer nuestra amistad. No se como lo
                            pienses tú, pero yo siento que entre tu y yo siempre hubo la
                            conexión tan grande que tenemos ahora, talvez tu y yo no podriamos
                            haber funcionado como amigos nunca, porque la manera en que empece
                            a sentir algo mas por ti fue tan rapido. Me alegra que nuestros caminos
                            hayan tomado por el mismo rumbo y que ahora estemos juntos, es lo mejor
                            que me ha pasado en la vida. Te amo con todo mi ser, eres el amor de mi vida.
                        </p>
                        <img src={chiguiro} alt="Chigüirito" className="imagen-chiguiro" data-aos="fade-left" />
                    </div>
                </div>
            </div>

            {/* Contador */}
            <div ref={ref} className="seccion seccion-3">
                <motion.div
                    className="contador"
                    style={{ backgroundImage: `url(${marco})` }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className="contador-titulo font-[yours]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Llevo a tu lado...
                    </motion.h2>

                    <motion.div
                        className="contador-numero font-[delius]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {rounded}
                    </motion.div>

                    <motion.p
                        className="contador-texto font-[delius]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                    >
                        Días, en los que cada uno de ellos <br />
                        te he amado cada vez más...
                    </motion.p>
                </motion.div>

                {/* <motion.div
                    className="imagen-wedding"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                >
                    <img src={wedding} alt="Matrimonio de chigüirito" />
                </motion.div> */}
            </div>
        </>
    )
}
