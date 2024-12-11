'use client'
import { useState } from "react"

export default function Update(props) {

    const [recipeName, setRecipeName] = useState(props.recipe.name);

    return(
        <form action={props.updateName}>
            <input 
                type="hidden" name="id" 
                value={props.recipe.id} />
            <label>
                New Recipe Name: 
                <input 
                    type="text" name="name"
                    value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                </label>
            <button type="submit">Update</button>
        </form>
    )
}