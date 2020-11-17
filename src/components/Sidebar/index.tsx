import React from 'react';

import { connect } from 'react-redux'

function toggleLesson(module:any,lesson:any){
    
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }
}

const Sidebar = ({ modules, dispatch }:any) => {
   
        return (
            <aside>
                { modules.map( (module:any) => 
                    (<div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map((lesson:any) => 
                                <li key={lesson.id}>
                                   
                                    <button onClick={() => dispatch(toggleLesson(module,lesson))}>Selecionar</button>
                                </li>
                            )}
                        </ul>
                    </div>
                ))}
            </aside>
        );
                            }
                        
export default connect((state:any) => ({modules: state.modules}) )(Sidebar);