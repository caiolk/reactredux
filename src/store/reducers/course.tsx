import React from 'react';

const INITIAL_STATE  = { 
    activeModule: {},
    activeLesson: {},
    modules : [
        { 
            id: 1,
            title: 'Iniciando com react', 
            lessons:[
                { id: 1, title: 'Primeira Aula'},
                { id: 2, title: 'Segunda Aula'},      
            ],
        },
        {
            id: 2, 
            title: 'Aprendendo Redux', 
            lessons: [
                { id: 3, title: 'Terceira Aula'},
                { id: 4, title: 'Quarta Aula' }
            ]

        }
    ]
}

export default function course(state:any = INITIAL_STATE, action:any){
  
  
    if(action.type === 'TOGGLE_LESSON'){
         
        return { 
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }
  
    return state;
}