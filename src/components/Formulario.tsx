import { useForm } from '../hooks/useForm';

interface FormData {
    email: string,
    name: string,
    edad: number
}

const Formulario = () => {

    const { email, name, edad, formulario, handleInputChange } = useForm<FormData>({
        email: '', name: '', edad: 21
    });

    // const { email, name, edad } = formulario

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Edad" className="form-label">Edad</label>
                <input
                    type="number"
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={handleInputChange}
                />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    )
}

export default Formulario
