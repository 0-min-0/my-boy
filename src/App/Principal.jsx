import React from 'react'
import flowers from '../assets/images/flowers.png'
import fondo from '../assets/images/squares-bg.png'
import chiguiro from '../assets/images/chiguiro.png'

export const Principal = () => {
    return (
        <>
            <div className='flex h-screen justify-between items-center gap-10'>
                <div className='font-[yours] text-center ml-30'>
                    <h1 className='text-6xl'>Para el amor de mi vida...</h1>
                    <h2 className='text-4xl mb-3'>De tu noviecita</h2>
                    <p className='text-3xl'>
                        Mi precioso niño, quise utilizar mi talento creando ésta aplicación <br />
                        para que puedas ver lo mucho que te amo y lo importante que eres para <br />
                        mí. Sería más normal hacerte una carta o muchos detalles (cosa que <br />
                        disfruto mucho hacer para ti), pero ésta vez quería hacer algo diferente <br />
                        y demostrarte de todas las formas que pueda el gran amor que siento por <br />
                        ti. Que cada vez que entres a ésta página y ojalá sea muchas veces te <br />
                        sientas amado, apreciado y valorado. Espero que la disfrutes tanto <br />
                        como yo disfruté haciendola.
                    </p>
                </div>
                <div>
                    <img src={flowers} className='w-120 h-auto' alt='flowers' />
                </div>
            </div>
            <div className='flex justify-centerw-full h-[90%] bg-cover bg-center' style={{ backgroundImage: `url(${fondo})` }}>
                <div className='flex justify-between items-center gap-6'>
                    <div className='bg-white/90 px-10 py-8 ml-20 rounded-xl'>
                        <h2 className='font-[yours] text-4xl mb-2'>Mi cielo lindo 🤍</h2>
                        <p className='font-[delius] text-md'>
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
                    </div>
                    <img src={chiguiro} alt='Chigüirito' className='w-130 h-auto scale-x-[-1]' />
                </div>
            </div>
        </>
    )
}
