import React from 'react';

import { connect } from 'react-redux';

interface activeModuleParam{
    id:number,
    lessons: [
        id:number,
        title:string
    ],
    title: string
}
const Video =  ({activeModule,activeLesson}:any) => {
    console.log(activeModule,activeLesson)
    return (

        <div style={{padding:10}}>
            <strong> Módulo { activeModule.title }</strong>
            <span>- Aula { activeLesson.title }</span>
        </div>
    );

}

export default connect((state:any) => 
    ( {activeModule :state.course.activeModule, activeLesson: state.course.activeLesson}))
    (Video)