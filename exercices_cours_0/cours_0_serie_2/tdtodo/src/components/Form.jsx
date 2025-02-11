import { useState} from "react";
function Form({onAdd}){
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()){
            onAdd(input.trim());
            setInput('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ajouter une tâche" value={input} onChange={(e) => setInput(e.target.value)} />
            <button>Ajouter</button>
        </form>
    )
}
export default Form;
