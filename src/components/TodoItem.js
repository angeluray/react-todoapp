import React from "react"
class TodoItem extends React.Component {
    state = {
        editing: false,
    }

    handleEditing =  () => {
        console.log ("Edit MODE Activated");
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = event => {
       // console.log( event.key);
       if ( event.key === "Enter") {
           this.setState ({ editing: false })
       }
    }

    render() {

        const {completed, id, title } = this.props.todo;

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }


        let viewMode ={}
        let editMode = {}

        if ( this.state.editing ){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        

        return (
            <li> 

                <div onDoubleClick = { this.handleEditing }  style ={ viewMode }> 

                    <input type="checkbox" 
                        checked={ completed }
                        onChange ={ () => this.props.handleChangeProps( id ) }/>

                

                <button onClick={ () => this.props.deleteTodoProps ( id ) } > 
                    Delete
                </button>
                    <span style ={ completed ? completedStyle : null } >
                        { title }
                    </span>
                
                </div> 
                <input 
                    type="text" 
                    style= { editMode }  
                    value={ title }
                    onChange={e => {
                        this.props.setUpdate(e.target.value, id)
                      }}
                    onKeyDown= {this.handleUpdatedDone }
                />
            </li>
        
        )

    }

    


}

export default TodoItem