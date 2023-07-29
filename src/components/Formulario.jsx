import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {

    const [allTodo, setAllTodo] = useState({
        title1: 'Todo #01',
        description1: 'Descripcion #01',
        state1: 'false',
        priority: true
    })

    const { title1, description1, state1, priority } = allTodo

    const handleSubtmit = (e) => {
        e.preventDefault()

        if (!title1.trim() || !description1.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Title and Description mandatory',
                //footer: '<a href="">Why do I have this issue?</a>'
            })
        }

        addTodo({
            id: Date.now(),
            ...allTodo,
            state1: state1
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo add succesfult',
            showConfirmButton: false,
            timer: 1500
        })


        console.log("se dio click")
    }

    const handleChange = e => {
        const { name, type, checked, value } = e.target
        setAllTodo(
            {
                ...allTodo,
                [name]: type === 'checkbox' ? checked : value,
            }
        )
    }

    return (
        <form onSubmit={handleSubtmit}>
            <input
                type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title1"
                value={title1}
                onChange={handleChange}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese Descripcion"
                name="description1"
                value={description1}
                onChange={handleChange}
            ></textarea>
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
                className="form-select mb-2"
                name="state1"
                value={state1}
                onChange={handleChange}
            >
                <option value={false}>Pendiente</option>
                <option value={true}>Completado</option>
            </select>
            <button
                type="submit"
                className="btn btn-primary"
                name="button1"
            >Agregar Todo</button>
            <img src="" alt="" />
        </form>
    );
};

export default Formulario;
