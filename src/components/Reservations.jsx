import React from 'react'

export const Reservations = () => {
  return (
    <div div className='bg-yellow-500 font-pop'>
        <div className="py-10 px-4">
                <div className="text-2xl font-bold mb-4">
                    Haz tu Reserva en Línea
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="block w-full py-2 px-4 rounded-lg mb-4"
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="block w-full py-2 px-4 rounded-lg mb-4"
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className="block w-full py-2 px-4 rounded-lg mb-4"
                    />
                    <input
                        type="datetime-local"
                        placeholder="Fecha y Hora"
                        className="block w-full py-2 px-4 rounded-lg mb-4"
                    />
                    <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg">
                        Enviar
                    </button>
                </form>
            </div>
    </div>
  )
}

