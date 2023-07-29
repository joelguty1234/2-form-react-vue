import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null)

    const handleSubtmit = (e) => {
        e.preventDefault()
        const data = new FormData(form.current)
        console.log([...data.entries()])

        const { title1, description1, state1 } = Object.fromEntries([...data.entries()])
        console.log(title1, description1, state1)

        if (title1.trim() === 'Ingrese Titulo' || !title1.trim()) return console.log("llena este campo")
    }
    return (
        <form onSubmit={handleSubtmit} ref={form}>
            <input
                type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title1"
                defaultValue="Ingrese Titulo"
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese Descripcion"
                name="description1"
                defaultValue="Ingrese Descripcion"
            ></textarea>
            <select
                className="form-select mb-2"
                name="state1"
                defaultValue="Pendiente"
            >
                <option value="pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button
                type="submit"
                className="btn btn-primary"
                name="button1"
            >Procesar</button>
            <img src="" alt="" />
        </form>
    );
};

export default NoControlado;
