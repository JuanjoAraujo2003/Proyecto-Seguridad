import {useForm} from "react-hook-form";
import {createDocument} from "../api/documentApi.ts";

export function WordForm()
{
    const {register, handleSubmit} = useForm()
    const onSubmit = handleSubmit(async (data) => {
        const response = await createDocument(data)
        console.log(response)
    })
    return(<div>
        <form onSubmit={onSubmit}>
            <h1>Informe de Valoracion de Activos</h1>
            <input type= "text" placeholder= "Categoria Activo" {...register("category")}/>
            <input type= "text" placeholder= "Nombre Activo" {...register("name")}/>
            <textarea  placeholder= "Descripcion Activo" {...register("description")}/>
            <textarea  placeholder= "Valoracion Activo" {...register("value")}/>
            <textarea  placeholder= "Riesgo Activo" {...register("risk")}/>
            <button>Guardar</button>

        </form>
    </div>)
}