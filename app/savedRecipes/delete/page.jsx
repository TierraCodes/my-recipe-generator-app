import deleteRecipe from "@/app/deleteRecipe"

export default function Recipes(props){
    return(
        <>
            <form action={deleteRecipe}>
                <input type="hidden" name="id" value={props.id}/>
                <button>Delete</button>
            </form>
        </>
    )
}